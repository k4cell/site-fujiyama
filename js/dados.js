// Dados do restaurante. Edite aqui para atualizar o site, sem mexer no HTML.
// Campos vazios ("") escondem o botão correspondente.

window.FUJIYAMA = {
  contato: {
    // Somente números, com DDI e DDD. Ex.: "5511999999999"
    whatsapp: "",
    telefone: "",
    instagram: "", // Ex.: "https://instagram.com/restaurantefujiyama"
    mensagemWhatsapp: "Olá! Vi o cardápio no site e gostaria de fazer um pedido."
  },

  // A PREENCHER: horários reais de funcionamento.
  horarios: [
    { dias: "Segunda a sexta", horas: "A confirmar" },
    { dias: "Sábado", horas: "A confirmar" },
    { dias: "Domingo e feriados", horas: "A confirmar" }
  ],

  // A PREENCHER: cardápio real. Os itens abaixo são exemplos provisórios.
  // preco: número (ex.: 29.9) ou null para mostrar "Consulte".
  cardapio: [
    {
      categoria: "Entradas",
      itens: [
        { nome: "Gyoza", descricao: "Pastel japonês grelhado recheado.", preco: null },
        { nome: "Sunomono", descricao: "Salada agridoce de pepino.", preco: null },
        { nome: "Missoshiru", descricao: "Sopa de missô com tofu e cebolinha.", preco: null }
      ]
    },
    {
      categoria: "Sushis e sashimis",
      itens: [
        { nome: "Sashimi de salmão", descricao: "Fatias de salmão fresco.", preco: null },
        { nome: "Niguiri", descricao: "Bolinho de arroz com peixe por cima.", preco: null },
        { nome: "Uramaki", descricao: "Enrolado com arroz por fora.", preco: null }
      ]
    },
    {
      categoria: "Pratos quentes",
      itens: [
        { nome: "Yakisoba", descricao: "Macarrão salteado com legumes e carne.", preco: null },
        { nome: "Tempurá", descricao: "Legumes e camarão empanados.", preco: null },
        { nome: "Teppanyaki", descricao: "Grelhado na chapa com legumes.", preco: null }
      ]
    },
    {
      categoria: "Combinados",
      itens: [
        { nome: "Combinado tradicional", descricao: "Seleção de sushis e sashimis.", preco: null }
      ]
    },
    {
      categoria: "Bebidas",
      itens: [
        { nome: "Refrigerantes", descricao: "Lata 350 ml.", preco: null },
        { nome: "Chá verde", descricao: "Quente ou gelado.", preco: null }
      ]
    }
  ]
};
