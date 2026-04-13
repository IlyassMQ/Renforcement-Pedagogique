// R-Challenge 5 — La gestion de stock d'un restaurant
// Tu gères le stock d'ingrédients d'un restaurant. Chaque ingrédient est un objet : nom, quantite, unite (kg, litres, pièces), prix_unitaire, seuil_alerte, categorie (légume, viande, épice, boisson).

// Crée 12 ingrédients de 4 catégories différentes
// Affiche les ingrédients dont la quantité est en dessous du seuil d'alerte
// Calcule la valeur totale du stock (quantité × prix unitaire)
// Affiche la valeur du stock par catégorie
// Simule une commande : vérifie si les ingrédients nécessaires sont disponibles. Si oui, décrémente le stock. Si non, affiche ce qui manque
// Génère une liste de courses : tous les ingrédients sous le seuil d'alerte avec la quantité à commander pour revenir au double du seuil

//1. STOCK

const stock = [
  { nom: "Tomate", quantite: 5, unite: "kg", prix: 2, seuil: 8, categorie: "légume" },
  { nom: "Oignon", quantite: 12, unite: "kg", prix: 1.5, seuil: 10, categorie: "légume" },
  { nom: "Carotte", quantite: 3, unite: "kg", prix: 1.2, seuil: 6, categorie: "légume" },
  { nom: "Poulet", quantite: 15, unite: "kg", prix: 6, seuil: 10, categorie: "viande" },
  { nom: "Boeuf", quantite: 4, unite: "kg", prix: 10, seuil: 8, categorie: "viande" },
  { nom: "Agneau", quantite: 2, unite: "kg", prix: 12, seuil: 5, categorie: "viande" },
  { nom: "Sel", quantite: 20, unite: "kg", prix: 0.5, seuil: 5, categorie: "épice" },
  { nom: "Poivre", quantite: 2, unite: "kg", prix: 3, seuil: 4, categorie: "épice" },
  { nom: "Paprika", quantite: 1, unite: "kg", prix: 4, seuil: 3, categorie: "épice" },
  { nom: "Eau", quantite: 50, unite: "litres", prix: 0.8, seuil: 20, categorie: "boisson" },
  { nom: "Jus Orange", quantite: 10, unite: "litres", prix: 2.5, seuil: 15, categorie: "boisson" },
  { nom: "Soda", quantite: 8, unite: "litres", prix: 3, seuil: 10, categorie: "boisson" },
];

//PRODUITS EN ALERTE

console.log("Produits sous seuil :");

for (let i = 0; i < stock.length; i++) {
  if (stock[i].quantite < stock[i].seuil) {
    console.log(stock[i].nom, "-", stock[i].quantite, stock[i].unite);
  }
}

//VALEUR TOTALE DU STOCK

let total = 0;

for (let i = 0; i < stock.length; i++) {
  total = total + stock[i].quantite * stock[i].prix;
}

console.log("Valeur totale du stock :", total, "DH");

//VALEUR PAR CATÉGORIE

let categories = {
  légume: 0,
  viande: 0,
  épice: 0,
  boisson: 0,
};

for (let i = 0; i < stock.length; i++) {
  let item = stock[i];
  let value = item.quantite * item.prix;

  categories[item.categorie] = categories[item.categorie] + value;
}

console.log("Valeur par catégorie :");
console.log(categories);

// COMMANDE

let commande = [
  { nom: "Tomate", quantite: 2 },
  { nom: "Poulet", quantite: 5 },
  { nom: "Poivre", quantite: 1 },
];

console.log("Traitement de la commande...");

for (let i = 0; i < commande.length; i++) {
  let itemCommande = commande[i];

  let trouve = false;

  for (let j = 0; j < stock.length; j++) {
    if (stock[j].nom === itemCommande.nom) {
      trouve = true;

      if (stock[j].quantite >= itemCommande.quantite) {
        stock[j].quantite = stock[j].quantite - itemCommande.quantite;
        console.log("✅", itemCommande.nom, "retiré du stock");
      } else {
        console.log(" Pas assez de", itemCommande.nom);
      }
    }
  }

  if (!trouve) {
    console.log("Produit introuvable :", itemCommande.nom);
  }
}

//LISTE DE COURSES 

console.log("Liste de courses :");

for (let i = 0; i < stock.length; i++) {
  if (stock[i].quantite < stock[i].seuil) {
    let Commander = (stock[i].seuil * 2) - stock[i].quantite;

    console.log(
      stock[i].nom,
      "commander",
      Commander,
      stock[i].unite
    );
  }
}