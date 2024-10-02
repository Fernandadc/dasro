import React from "react";

const category = {
  tradicional: 0,
  special: 1,
  gourmet: 2,
  premium: 3,
};

const cakes = {
  anne: 0,
  diamanteNegro: 1,
  macron: 2,
  moca: 3,
  morango: 4,
  negra: 5,
  ouroBrancoMousse: 6,
  pretaBranca: 7,
  stikadinho: 8,
  martaRocha: 9,
  martaRochaAbacaxi: 10,
  manjarDosDeuses: 11,
  nutella: 12,
  oreo: 13,
};
const treats = {
  brigadeiro: 0,
  amendoim: 1,
  beijinho: 2,
  bichoDePe: 3,
  branquinho: 4,
  cafe: 5,
  brigadeiroGourmet: 6,
  casadinhoNinhoBrigadeiro: 7,
  casadinhoNinhoBicho: 8,
  churros: 9,
  ferrero: 10,
  limao: 11,
  maracuja: 12,
  ninhoNutella: 13,
  nozes: 14,
  olhoDeSogra: 15,
  prestigio: 16,
  sensacao: 17,
  brulle: 18,
  chocolateBranco: 19,
  confete: 20,
  kinder: 21,
  meioAmargo: 22,
  redVelvet: 23,
  stikadinho: 24,
};
// Database seguindo padrão SQL com index de acesso para cada item
const db = {
  cakes: [
    {
      name: "Anne",
      description:
        "Leite moça cozido, coco ralado natural, ameixa e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Diamante Negro",
      description:
        "Brigadeiro, creme de leite condensado branco, mousse de chocolate, chocolate diamante negro e chantilly",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Macron",
      description: "Massa de coco queimado, ovos moles, ameixa e fios de ovos",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Moça",
      description:
        "Leite moça cozido, creme de leite condensado com chocolate, mousse de chocolate, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Morango",
      description:
        "Brigadeiro ou branquinho, disco de merengue, morangos, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Negra",
      description:
        "Brigadeiro, creme de leite condensado com chocolate, mousse de chocolate, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Ouro Branco com mousse",
      description:
        "Creme de leite condensado, creme de leite condensado com chocolate, mousse de chocolate, bombom ouro branco e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Preta e Branca",
      description:
        "Brigadeiro, branquinho, mousse de chocolate, raspas de chocolate e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Stikadinho",
      description:
        "Brigadeiro, brigadeiro de quick, mousse de chocolate, chocolate stikadinho e chantilly.",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Marta Rocha Tradicional",
      description:
        "Leite condensado, ovos moles, nozes, disco de merengue e chantilly.",
      category: category.special,
      image: "link da foto",
    },
    {
      name: "Marta Rocha com Abacaxi",
      description:
        "Leite condensado, ovos moles, nozes, abacaxi, disco de merengue e chantilly.",
      category: category.special,
      image: "link da foto",
    },
    {
      name: "Manjar dos Deuses",
      description:
        "Leite condensado, ovos moles, nozes, ameixa, disco de merengue e chantilly.",
      category: category.special,
      image: "link da foto",
    },
    {
      name: "Nutella",
      description:
        "Leite condensado com amendoim, mousse de chocolate, nutella e chantilly.",
      category: category.special,
      image: "link da foto",
    },
    {
      name: "Oreo",
      description:
        "Leite condensado cozido, mousse de chocolate, chantilly com leite condensado e biscoito oreo, raspas de chocolate e nozes.",
      category: category.special,
      image: "link da foto",
    },
  ],
  treats: [
    {
      name: "Brigadeiro",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Amendoim",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Beijinho",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Bicho de pé",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Branquinho",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Café",
      category: category.tradicional,
      image: "link da foto",
    },
    {
      name: "Brigadeiro Gourmet",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Casadinho Ninho e Brigadeiro",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Casadinho Ninho e Bicho de pé",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Churros",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Ferrero",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Limão",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Maracujá",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Ninho com Nutella",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Nozes",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Olho de Sogra",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Prestígio",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Sensação",
      category: category.gourmet,
      image: "link da foto",
    },
    {
      name: "Brullé",
      category: category.premium,
      image: "link da foto",
    },
    {
      name: "Chocolate Branco",
      category: category.premium,
      image: "link da foto",
    },
    {
      name: "Confete",
      category: category.premium,
      image: "link da foto",
    },
    {
      name: "Kinder",
      category: category.premium,
      image: "link da foto",
    },
    {
      name: "Meio Amargo",
      category: category.premium,
      image: "link da foto",
    },
    {
      name: "Red Velvet",
      category: category.premium,
      image: "link da foto",
    },
    {
      name: "Stikadinho",
      category: category.premium,
      image: "link da foto",
    },
  ],
};

export default db;
export { treats, cakes, category};
