(function () {
  var dados = window.FUJIYAMA;
  var contato = dados.contato;

  function formatarPreco(preco) {
    if (preco === null || preco === undefined) return "Consulte";
    return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function el(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto) e.textContent = texto;
    return e;
  }

  // Cardápio com abas por categoria
  var abas = document.getElementById("abas");
  var lista = document.getElementById("lista-cardapio");

  function mostrarCategoria(indice) {
    var categoria = dados.cardapio[indice];
    lista.innerHTML = "";
    categoria.itens.forEach(function (item) {
      var card = el("article", "prato");
      var topo = el("div", "prato__topo");
      topo.appendChild(el("h3", "prato__nome", item.nome));
      topo.appendChild(el("span", "prato__preco", formatarPreco(item.preco)));
      card.appendChild(topo);
      if (item.descricao) card.appendChild(el("p", "prato__descricao", item.descricao));
      lista.appendChild(card);
    });
    Array.prototype.forEach.call(abas.children, function (aba, i) {
      aba.setAttribute("aria-selected", i === indice ? "true" : "false");
    });
  }

  dados.cardapio.forEach(function (categoria, i) {
    var aba = el("button", "aba", categoria.categoria);
    aba.setAttribute("role", "tab");
    aba.addEventListener("click", function () { mostrarCategoria(i); });
    abas.appendChild(aba);
  });
  if (dados.cardapio.length) mostrarCategoria(0);

  // Horários
  var horarios = document.getElementById("horarios");
  dados.horarios.forEach(function (h) {
    var li = el("li");
    li.appendChild(el("span", null, h.dias));
    li.appendChild(el("strong", null, h.horas));
    horarios.appendChild(li);
  });

  // Links de contato: esconde o que ainda não foi preenchido
  function configurar(seletor, href) {
    document.querySelectorAll(seletor).forEach(function (a) {
      if (href) a.href = href;
      else a.hidden = true;
    });
  }
  configurar(".js-whatsapp", contato.whatsapp &&
    "https://wa.me/" + contato.whatsapp + "?text=" + encodeURIComponent(contato.mensagemWhatsapp));
  configurar(".js-telefone", contato.telefone && "tel:+" + contato.telefone);
  configurar(".js-instagram", contato.instagram);

  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    var aberto = nav.classList.toggle("nav--aberto");
    toggle.setAttribute("aria-expanded", aberto);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("nav--aberto");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("ano").textContent = new Date().getFullYear();
})();
