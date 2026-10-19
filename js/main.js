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

  function slug(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  // Cardápio: todas as categorias em sequência, com atalhos no topo
  var atalhos = document.getElementById("categorias");
  var lista = document.getElementById("lista-cardapio");

  dados.cardapio.forEach(function (categoria) {
    var id = "cat-" + slug(categoria.categoria);

    var atalho = el("a", "categoria", categoria.categoria);
    atalho.href = "#" + id;
    atalhos.appendChild(atalho);

    var bloco = el("section", "grupo" + (categoria.foto ? " grupo--foto" : ""));
    bloco.id = id;
    if (categoria.foto) {
      var img = el("img", "grupo__foto");
      img.src = "img/fotos/" + categoria.foto;
      img.alt = categoria.categoria;
      img.loading = "lazy";
      bloco.appendChild(img);
    }
    var corpo = el("div", "grupo__corpo");
    corpo.appendChild(el("h3", "grupo__titulo", categoria.categoria));
    if (categoria.descricao) corpo.appendChild(el("p", "grupo__descricao", categoria.descricao));

    var itens = el("ul", "itens");
    categoria.itens.forEach(function (item) {
      var li = el("li", "item");
      var linha = el("div", "item__linha");
      linha.appendChild(el("span", "item__nome", item.nome));
      linha.appendChild(el("span", "item__pontos"));
      linha.appendChild(el("span", "item__preco", formatarPreco(item.preco)));
      li.appendChild(linha);
      if (item.detalhe) li.appendChild(el("span", "item__detalhe", item.detalhe));
      itens.appendChild(li);
    });
    corpo.appendChild(itens);
    bloco.appendChild(corpo);
    lista.appendChild(bloco);
  });

  // Destaca a categoria visível nos atalhos
  if ("IntersectionObserver" in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var ativo = atalhos.querySelector('[href="#' + entrada.target.id + '"]');
        atalhos.querySelectorAll(".categoria--ativa").forEach(function (a) { a.classList.remove("categoria--ativa"); });
        if (ativo) {
          ativo.classList.add("categoria--ativa");
          atalhos.scrollTo({ left: ativo.offsetLeft - atalhos.clientWidth / 2 + ativo.clientWidth / 2, behavior: "smooth" });
        }
      });
    }, { rootMargin: "-140px 0px -60% 0px" });
    lista.querySelectorAll(".grupo").forEach(function (g) { observador.observe(g); });
  }

  // Festival
  var festival = document.getElementById("festival-sushi");
  dados.festivais.sushi.forEach(function (item) { festival.appendChild(el("li", null, item)); });

  // Horários agrupados por turno
  var horarios = document.getElementById("horarios");
  var turnoAtual = null;
  var listaTurno;
  dados.horarios.forEach(function (h) {
    if (h.turno !== turnoAtual) {
      turnoAtual = h.turno;
      horarios.appendChild(el("h4", "turno", h.turno));
      listaTurno = el("ul", "horarios");
      horarios.appendChild(listaTurno);
    }
    var li = el("li");
    li.appendChild(el("span", null, h.dias));
    li.appendChild(el("strong", null, h.horas));
    listaTurno.appendChild(li);
  });
  horarios.appendChild(el("p", "nota", "Fechado às segundas-feiras."));

  // Telefones
  var telefones = document.getElementById("telefones");
  contato.telefones.forEach(function (tel) {
    var li = el("li");
    var a = el("a", null, tel);
    a.href = "tel:+55" + tel.replace(/\D/g, "");
    li.appendChild(a);
    telefones.appendChild(li);
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
  configurar(".js-instagram", contato.instagram);
  document.querySelectorAll(".js-whatsapp").forEach(function (a) {
    a.target = "_blank";
    a.rel = "noopener";
  });

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
