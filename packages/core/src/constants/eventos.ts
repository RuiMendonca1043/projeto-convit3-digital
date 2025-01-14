import { Evento } from "../evento";
import { Id } from "../shared";

const eventos: Evento[] = [
  {
    id: "6fc7a32a-2abc-4142-a117-d1a643cf824c",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "c1ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "c2ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "c3ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  // {
  //   id: "b75529fa-85dc-4553-9b43-86cd7673555c",
  //   alias: "evento-js-avancado",
  //   senha: "js2024",
  //   nome: "Workshop Avançado de JavaScript",
  //   data: new Date("2024-11-20T15:00:00Z"),
  //   local: "Rio de Janeiro, RJ",
  //   descricao: "Um workshop avançado para programadores JavaScript.",
  //   imagem:
  //     "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
  //   imagemBackground:
  //     "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
  //   publicoEsperado: 100,
  //   convidados: [
  //     {
  //       id: "c4ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Eduardo Santos",
  //       email: "eduardo@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "c5ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Fernanda Costa",
  //       email: "fernanda@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //   ],
  // },
  // {
  //   id: "61e6b213-ae91-404b-bd94-694a4d3296aa",
  //   alias: "evento-dev-frontend",
  //   senha: "front123",
  //   nome: "Bootcamp de Desenvolvimento Frontend",
  //   data: new Date("2024-11-15T09:00:00Z"),
  //   local: "Belo Horizonte, MG",
  //   descricao: "Aprenda a criar interfaces incríveis e responsivas.",
  //   imagem:
  //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
  //   imagemBackground:
  //     "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "c6ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Gabriela Rocha",
  //       email: "gabriela@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "c7ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Hugo Nogueira",
  //       email: "hugo@example.com",
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "c8ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Isabela Martins",
  //       email: "isabela@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "aa22f5b6-362f-42d5-bba7-8d5be5d0b678",
  //   alias: "casamento-alberto-marina",
  //   senha: "casamento2024",
  //   nome: "Casamento do Alberto e Marina",
  //   data: new Date("2024-11-25T16:00:00Z"),
  //   local: "Florianópolis, SC",
  //   descricao:
  //     "Celebração do casamento de Alberto e Marina com amigos e familiares.",
  //   imagem:
  //     "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
  //   imagemBackground:
  //     "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "c9ghfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Bruno Cardoso",
  //       email: "bruno@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "c10hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Carla Mendes",
  //       email: "carla@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "364c0110-3c7a-4c73-88c4-d5821d17704a",
  //   alias: "aniversario-joao",
  //   senha: "joao2024",
  //   nome: "Aniversário do João - 30 Anos",
  //   data: new Date("2024-12-05T18:00:00Z"),
  //   local: "Curitiba, PR",
  //   descricao:
  //     "Comemoração dos 30 anos de João com amigos próximos e familiares.",
  //   imagem:
  //     "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
  //   imagemBackground:
  //     "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
  //   publicoEsperado: 80,
  //   convidados: [
  //     {
  //       id: "c11hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Maria Souza",
  //       email: "maria@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 2,
  //     },
  //     {
  //       id: "c12hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "José Almeida",
  //       email: "jose@example.com",
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "e7d11b7e-311a-4707-a727-83585f5f1006",
  //   alias: "inauguracao-loja-estrela",
  //   senha: "estrela2024",
  //   nome: "Inauguração da Loja Estrela",
  //   data: new Date("2024-12-10T09:00:00Z"),
  //   local: "Porto Alegre, RS",
  //   descricao:
  //     "Evento de inauguração da nova loja Estrela com brindes e promoções.",
  //   imagem:
  //     "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
  //   imagemBackground:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
  //   publicoEsperado: 300,
  //   convidados: [
  //     {
  //       id: "c13hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Cláudia Lima",
  //       email: "claudia@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 3,
  //     },
  //     {
  //       id: "c14hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Ricardo Barbosa",
  //       email: "ricardo@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "11bfa745-166a-4b92-b667-bcfff6f2b261",
  //   alias: "reuniao-familia-oliveira",
  //   senha: "familia2024",
  //   nome: "Reunião da Família Oliveira",
  //   data: new Date("2024-12-15T12:00:00Z"),
  //   local: "Salvador, BA",
  //   descricao: "Reunião de fim de ano da família Oliveira.",
  //   imagem:
  //     "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
  //   imagemBackground:
  //     "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
  //   publicoEsperado: 50,
  //   convidados: [
  //     {
  //       id: "c15hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Thiago Oliveira",
  //       email: "thiago@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 4,
  //     },
  //     {
  //       id: "c16hfpmlgb8-1gng3bej5c3-kcwx1tr5p3r",
  //       nome: "Letícia Oliveira",
  //       email: "leticia@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
];

export default eventos;
