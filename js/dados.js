// Dados do restaurante. Edite aqui para atualizar o site, sem mexer no HTML.
// Campos vazios ("") escondem o botão correspondente.
// Fonte: cardápio oficial do Fujiyama Sushi (Google Sites).

window.FUJIYAMA = {
  contato: {
    // Somente números, com DDI e DDD.
    whatsapp: "5511999422046",
    telefones: ["(11) 3644-5012", "(11) 3641-4455", "(11) 99942-2046"],
    instagram: "", // Ex.: "https://instagram.com/fujiyamasushi"
    mensagemWhatsapp: "Olá! Vi o cardápio no site e gostaria de fazer um pedido."
  },

  horarios: [
    { turno: "Almoço", dias: "Terça a sexta", horas: "11:30 às 14:30" },
    { turno: "Almoço", dias: "Sábado e domingo", horas: "11:30 às 15:30" },
    { turno: "Jantar", dias: "Terça a sábado", horas: "18:30 às 22:00" },
    { turno: "Jantar", dias: "Domingo", horas: "18:00 às 21:00" }
  ],

  // preco: número (ex.: 29.9) ou null para mostrar "Consulte".
  // foto: arquivo em img/fotos (opcional).
  cardapio: [
    {
      categoria: "Entradas",
      foto: "sashimi.jpg",
      itens: [
        { nome: "Shimeji", preco: 62.9 },
        { nome: "Shimeji com lula", preco: 79.9 },
        { nome: "Gyoza", preco: 38.9 },
        { nome: "Ostras", detalhe: "12 unidades", preco: 93.9 }
      ]
    },
    {
      categoria: "Sashimi",
      descricao: "Fatias de peixe cru.",
      itens: [
        { nome: "Misto", detalhe: "24 fatias", preco: 102.9 },
        { nome: "Misto especial", detalhe: "32 fatias, 2 pessoas", preco: 142.9 },
        { nome: "Salmão", detalhe: "24 fatias", preco: 143.9 },
        { nome: "Polvo", detalhe: "12 fatias", preco: 89.9 }
      ]
    },
    {
      categoria: "Sushi",
      descricao: "Fatia de peixe sobre arroz.",
      foto: "sushi.jpg",
      itens: [
        { nome: "Misto especial", detalhe: "2 pessoas", preco: 159.9 },
        { nome: "Misto", detalhe: "13 unidades", preco: 79.9 },
        { nome: "Atum e salmão", detalhe: "6 un. de cada + 1/2 tekka + 1/2 salmão hossomaki", preco: 129.9 },
        { nome: "Salmão", detalhe: "12 unidades", preco: 129.9 },
        { nome: "Fuji", detalhe: "6 unidades", preco: 77.9 }
      ]
    },
    {
      categoria: "Sushi dupla",
      itens: [
        { nome: "Carapau, tainha, serra, kani ou salmão skin", preco: 26.9 },
        { nome: "Salmão, linguado, olhete ou robalo", preco: 31.9 },
        { nome: "Atum, polvo, camarão ou massago", preco: 32.9 },
        { nome: "Toro", detalhe: "Negui-toro e enguia", preco: 79.9 },
        { nome: "Ikura", detalhe: "Ovas de salmão", preco: 79.9 },
        { nome: "Fuji", detalhe: "Especial da casa", preco: 33.9 }
      ]
    },
    {
      categoria: "Uramaki",
      descricao: "Sushi enrolado com arroz por fora.",
      itens: [
        { nome: "Atum", preco: 39.9 },
        { nome: "Hot roll", preco: 24.9 },
        { nome: "Califórnia", preco: 33.9 },
        { nome: "Ebitem", preco: 43.9 },
        { nome: "Salmão", preco: 39.9 },
        { nome: "Filadélfia", detalhe: "Skin com cream cheese", preco: 33.9 },
        { nome: "Salmão skin", preco: 31.9 }
      ]
    },
    {
      categoria: "Makizushi",
      descricao: "Sushi enrolado em alga.",
      foto: "makizushi.jpg",
      itens: [
        { nome: "Tekamaki", detalhe: "Atum", preco: 25.9 },
        { nome: "Kappa maki", detalhe: "Pepino", preco: 21.9 },
        { nome: "Salmão ou kani maki", preco: 27.9 }
      ]
    },
    {
      categoria: "Temaki",
      foto: "temaki.jpg",
      itens: [
        { nome: "Califórnia", preco: 29.9 },
        { nome: "Atum", preco: 33.9 },
        { nome: "Salmão", preco: 34.9 },
        { nome: "Skin", preco: 23.9 },
        { nome: "Camarão", preco: 33.9 },
        { nome: "Kani", preco: 17.9 },
        { nome: "Ebitem", preco: 35.9 },
        { nome: "Massago", detalhe: "Ovas de arenque", preco: 41.9 },
        { nome: "Filadélfia", preco: 26.9 }
      ]
    },
    {
      categoria: "Ussuzukuri",
      foto: "ussuzukuri.jpg",
      itens: [
        { nome: "Linguado", preco: 68.9 },
        { nome: "Namorado", preco: 68.9 },
        { nome: "Robalo", preco: 68.9 },
        { nome: "Salmão", preco: 68.9 },
        { nome: "Misto", preco: 63.7 }
      ]
    },
    {
      categoria: "Carpaccio",
      foto: "carpaccio.jpg",
      itens: [
        { nome: "Peixe branco", preco: 68.9 },
        { nome: "Salmão", preco: 63.7 }
      ]
    },
    {
      categoria: "Tirashi",
      descricao: "Peixes variados sobre arroz.",
      foto: "tirashi.jpg",
      itens: [
        { nome: "Tirashi simples", preco: 105.9 },
        { nome: "Tirashi especial", preco: 147.9 }
      ]
    },
    {
      categoria: "Combinados",
      descricao: "Sushi e sashimi. Consulte também o combinado especial.",
      foto: "combinado.jpg",
      itens: [
        { nome: "1 pessoa", detalhe: "12 sashimis, 5 sushis, 1/2 tekka, 4 un. Califórnia", preco: 95.9 },
        { nome: "2 pessoas", detalhe: "20 sashimis, 10 sushis, 1 tekka, 1 uramaki salmão", preco: 183.9 },
        { nome: "3 pessoas", detalhe: "32 sashimis, 18 sushis, 1 salmão maki, 1 tekka, 1/2 Califórnia, 1/2 uramaki salmão", preco: 275.9 },
        { nome: "4 pessoas", detalhe: "44 sashimis, 24 sushis, 1 salmão maki, 1 tekka, 1/2 Califórnia, 1/2 uramaki salmão, 1/2 uramaki ebitem, 1 hot roll", preco: 367.9 }
      ]
    },
    {
      categoria: "Teppanyaki",
      descricao: "Grelhados na chapa. Acompanham arroz e missoshiru.",
      foto: "teppanyaki.jpg",
      itens: [
        { nome: "Filé mignon com legumes", preco: 94.5 },
        { nome: "Filé de frango com legumes", preco: 60.4 },
        { nome: "Frutos do mar com legumes", preco: 94.5 },
        { nome: "Lula com legumes", preco: 83.5 },
        { nome: "Camarão com legumes", preco: 94.5 },
        { nome: "Salmão com legumes", preco: 98.9 },
        { nome: "Linguado com legumes", preco: 98.9 },
        { nome: "Anchova com legumes", preco: 85.9 },
        { nome: "Legumes", preco: 45.9 },
        { nome: "Shogayaki", preco: 145.9 }
      ]
    },
    {
      categoria: "Yakizakana",
      descricao: "Peixe assado na brasa.",
      itens: [
        { nome: "1/2 anchova", preco: 85.9 },
        { nome: "1/4 anchova", preco: 75.9 }
      ]
    },
    {
      categoria: "Tempurá",
      descricao: "Empanados.",
      foto: "tempura.jpg",
      itens: [
        { nome: "Misto especial", detalhe: "Camarão, peixe, lula e legumes", preco: 99.1 },
        { nome: "Misto", detalhe: "Camarão e legumes", preco: 89.9 },
        { nome: "Camarão", detalhe: "6 unidades", preco: 119.9 },
        { nome: "Legumes", preco: 69.9 }
      ]
    },
    {
      categoria: "Furai",
      descricao: "À milanesa. Acompanha arroz e missoshiru.",
      itens: [
        { nome: "Gyukatsu", detalhe: "Filé mignon", preco: 96.7 },
        { nome: "Chikenkatsu", detalhe: "Peito de frango", preco: 63.7 },
        { nome: "Ebi furai", detalhe: "6 unidades de camarão", preco: 119.9 },
        { nome: "Katsudonburi", preco: 77.9 }
      ]
    },
    {
      categoria: "Arroz",
      itens: [
        { nome: "Porção", preco: 16.9 },
        { nome: "Yakimeshi", detalhe: "Risoto japonês", preco: 45.9 }
      ]
    },
    {
      categoria: "Yakisoba",
      foto: "yakisoba.jpg",
      itens: [
        { nome: "Yakisoba especial", detalhe: "Carne, camarão, frango e legumes", preco: 88.9 },
        { nome: "Yakisoba carne", detalhe: "Com legumes", preco: 69.9 },
        { nome: "Yakisoba legumes", preco: 53.9 }
      ]
    },
    {
      categoria: "Sukiyaki",
      descricao: "Porção para 2 ou 3 pessoas.",
      itens: [
        { nome: "Sukiyaki", detalhe: "Carne e vegetais cozidos em molho shoyu", preco: 229.9 }
      ]
    },
    {
      categoria: "Macarrão",
      foto: "udon.jpg",
      itens: [
        { nome: "Tempurá udom", preco: 75.9 },
        { nome: "Udom especial", preco: 77.9 },
        { nome: "Udom simples", preco: 65.9 },
        { nome: "Hiyashi somen", detalhe: "Macarrão gelado com molho e saquê", preco: 53.9 },
        { nome: "Nabeyaki udom", preco: 78.9 },
        { nome: "Lamen especial", preco: 65.9 },
        { nome: "Lamen simples", preco: 52.9 },
        { nome: "Tchampom", preco: 95.9 },
        { nome: "Hiyashi tyuka", preco: 55.9 }
      ]
    },
    {
      categoria: "Teishoku",
      foto: "teishoku.jpg",
      itens: [
        { nome: "Teishoku simples", preco: 85.9 },
        { nome: "Teishoku especial", preco: 108.9 },
        { nome: "Teishoku yakizakana", preco: 85.9 },
        { nome: "Teishoku Fujiyama", preco: 217.9 }
      ]
    },
    {
      categoria: "Outros",
      itens: [
        { nome: "Missoshiru", preco: 15.9 },
        { nome: "Gari", detalhe: "Gengibre", preco: 15.9 },
        { nome: "Sunomono", detalhe: "Pepino", preco: 23.9 },
        { nome: "Hiyayakko", detalhe: "Tofu gelado temperado", preco: 28.9 },
        { nome: "Yurinchi", preco: 65.9 }
      ]
    },
    {
      categoria: "Bebidas",
      foto: "refrigerante.jpg",
      itens: [
        { nome: "Café expresso", preco: 9.8 },
        { nome: "Feel Good / Ice Tea", preco: 14.9 },
        { nome: "Refrigerante lata", preco: 11.9 },
        { nome: "Água", detalhe: "Com ou sem gás", preco: 8.9 },
        { nome: "Citrus / H2OH", preco: 14.9 }
      ]
    },
    {
      categoria: "Sucos",
      itens: [
        { nome: "Sucos naturais", preco: 15.9 },
        { nome: "Suco misto", preco: 16.9 },
        { nome: "Lichia", preco: 23.9 }
      ]
    },
    {
      categoria: "Cervejas",
      itens: [
        { nome: "Long neck", detalhe: "Stella e Heineken", preco: 18.9 },
        { nome: "Cerveja 600 ml", detalhe: "Original e Serramalte", preco: 27.9 },
        { nome: "Cerpa", detalhe: "Long neck", preco: 23.9 }
      ]
    },
    {
      categoria: "Caipirinhas",
      foto: "caipirinha.jpg",
      itens: [
        { nome: "Sakê", preco: 32.9 },
        { nome: "Sakê com frutas", preco: 33.9 },
        { nome: "Sakê importado", preco: 44.9 },
        { nome: "Sakê importado com frutas", preco: 45.9 },
        { nome: "Vodka", preco: 32.9 },
        { nome: "Vodka importada", preco: 39.9 },
        { nome: "Pinga", preco: 21.9 },
        { nome: "Tequila", preco: 29.9 }
      ]
    },
    {
      categoria: "Sakê",
      itens: [
        { nome: "Sakê gelado", detalhe: "Importado", preco: 52.9 },
        { nome: "Sakê quente", detalhe: "Importado", preco: 52.9 },
        { nome: "Sakê gelado", detalhe: "Nacional", preco: 31.9 },
        { nome: "Sakê", detalhe: "Garrafa nacional", preco: 87.9 }
      ]
    },
    {
      categoria: "Aperitivos",
      itens: [
        { nome: "Whisky 8 anos", preco: 28.9 },
        { nome: "Vodka", preco: 19.8 },
        { nome: "Vodka importada", preco: 28.9 },
        { nome: "Gim importado", preco: 23.9 },
        { nome: "Tequila", detalhe: "Ouro ou prata", preco: 22.9 },
        { nome: "Rum", preco: 17.9 },
        { nome: "Campari", preco: 18.9 }
      ]
    },
    {
      categoria: "Sobremesas",
      foto: "sobremesa.jpg",
      itens: [
        { nome: "Creme de papaya", preco: 21.9 },
        { nome: "Banana flambada", preco: 21.9 },
        { nome: "Sorvetes", preco: 17.9 },
        { nome: "Frutas", preco: 12.5 },
        { nome: "Tempurá de sorvete", preco: 28.9 },
        { nome: "Petit gâteau", preco: 28.9 }
      ]
    }
  ],

  festivais: {
    sushi: ["Sushi", "Sashimi (6 fatias)", "Shimeji (porção única)", "Temakis", "Gyoza", "Yakisoba", "Salmão grelhado", "Anchova grelhada", "Tempurá", "Sobremesa"]
  }
};
