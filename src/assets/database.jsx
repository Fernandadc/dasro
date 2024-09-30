import React from "react";
const category = {
  tradicional: 0,
  special: 1,
  gourmet: 2,
  premium: 3,
};

const cakes = {
    anne: 0,
}
const treats = {
    brigadeiro: 0,
}
// Database seguindo padrão SQL com index de acesso para cada item
const db = {
  cakes: [
    {
      name: "Anne",
      description: "Ingredientes vão aqui",
      category: category.tradicional,
      image: "link da foto",
    },
  ],
  treats: [
    {
      name: "Brigadeiro",
      category: category.tradicional,
      image: "link da foto",
    },
  ],
};

export default db;
