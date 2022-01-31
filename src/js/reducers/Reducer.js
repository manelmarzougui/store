import { ADD_PROD, DELETE_PROD } from "../actiontype/Type";

const inisalState = {
  prod: [
    {
      id: 1,
      name: "Sac Zara",
      url: "https://static.zara.net/photos///2021/V/1/1/p/6237/810/008/2/w/563/6237810008_6_1_1.jpg?ts=1620733929636",
      prix: "120dt",
    },
    {
      id: 2,
      name: "Robe Zara",
      url: "https://img-3.journaldesfemmes.fr/0ts6R6kStFpIPlJ5WOuD0rf2TVQ=/1240x/smart/67e4dd576382450881de5903341d6123/ccmcms-jdf/16270904.jpg",
      prix: "250dt",
    },
    {
      id: 3,
      name: "Chemise",
      url: "data:image/jpeg;base64,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",
      prix: "40dt",
    },
    {
      id: 4,
      name: "Pantalon Zara",
      url: "https://cdn.fashiola.fr/L601357734/zara-jean-zw-premium-80s-tapered-ice-stone.jpg",
      prix: "65dt",
    },
    {
      id: 5,
      name: "Veste",
      url: "https://static.zara.net/photos///2022/V/0/1/p/3046/029/800/7/w/315/3046029800_2_1_1.jpg?ts=1640251107929",
      prix: "180dt",
    },
    {
      id: 6,
      name: "Basket",
      url: "https://i.pinimg.com/236x/3c/30/3c/3c303c503d3b9c9e92c4c138979ade81.jpg",
      prix: "90dt",
    },
    {
      id: 7,
      name: "Monteaux ",
      url: "https://i.pmdstatic.net/gal/2021/08/02/68f2ae6c-2f98-4fc6-b138-d9999513408b.jpeg",
      prix: "200dt",
    },
    {
      id: 8,
      name: "Pull",
      url: "https://monpetitpull.com/wp-content/uploads/2021/07/IMG_3156.jpg",
      prix: "50dt",
    },
    {
      id: 9,
      name: "Pull",
      url: "https://cdn.outfitbook.fr/17094-thickbox_default/pull-court-gris-a-col-montant.jpg",
      prix: "55dt",
    },
    {
      id: 10,
      name: "Botinne Zara",
      url: "https://img01.ztat.net/article/spp-media-p1/3aedf7fffb71410585c066ac5a8c44ba/af59abce2f1a41c895ff3e0b8e0493e4.jpg?imwidth=1800",
      prix: "80dt",
    },
    {
      id: 11,
      name: "Botinne Zara",
      url: "https://www.modress.com/ori-bottines-ajourees-noires-a-talon-moyen-7337_48121.jpg",
      prix: "95dt",
    },
  ],
};

export const ProdReducer = (state = inisalState, { type, payload }) => {
  switch (type) {
    case ADD_PROD:
      return { ...state, prod: [...state.prod, payload] };
    case DELETE_PROD:
      return { ...state, prod: state.prod.filter((e) => e.id !== payload) };
    default:
      return state;
  }
};
