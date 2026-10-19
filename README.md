# Fujiyama Sushi

Site do Fujiyama Sushi (Rua Potsdam, 67, Vila Leopoldina, São Paulo/SP). Site estático em HTML, CSS e JavaScript puro, sem build.

## Como editar

Quase tudo que muda com frequência fica em `js/dados.js`:

- `contato`: WhatsApp, telefones e Instagram. Campo vazio esconde o botão.
- `horarios`: horários de funcionamento.
- `cardapio`: categorias e pratos. `preco: null` mostra "Consulte"; `foto` aponta para um arquivo em `img/fotos/`.
- `festivais`: itens do Festival de Sushi.

As fotos e o logo foram extraídos do cardápio oficial em PDF.

## Ver localmente

Abra `index.html` no navegador.

## Publicar

Pode ser publicado no GitHub Pages (Settings → Pages → branch principal, pasta raiz), Netlify ou Vercel.
