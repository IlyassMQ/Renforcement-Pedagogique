// Tu crées un convertisseur multi-devises pour une application de finance.

// Crée un objet contenant les taux de change par rapport à l'euro : USD (1.08), GBP (0.86), MAD (10.85), JPY (162.5), CAD (1.47)
// Écris la logique de conversion : convertit d'abord en euros puis dans la devise cible
// Adapte-la pour convertir un panier entier (tableau de prix)
// Affiche la valeur d'un montant dans TOUTES les devises disponibles simultanément
// Stocke un historique des conversions (date, montants, devises). Affiche l'historique
// Statistiques : devise la plus demandée, montant total converti, conversion la plus fréquente


// TAUX DE CHANGE (base EUR)

const rates = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.86,
  MAD: 10.85,
  JPY: 162.5,
  CAD: 1.47
};


let history = [];

//CONVERSION SIMPLE

function convert(amount, from, to) {
  let inEUR = amount / rates[from];
  let result = inEUR * rates[to];

  // sauvegarde historique
  history.push({
    date: new Date().toLocaleString(),
    amount,
    from,
    to,
    result
  });

  return result;
}

//CONVERTIR UN MONTANT DANS TOUTES LES DEVISES

function convertAll(amount, from) {
  console.log("Conversion de", amount, from, "vers toutes les devises :");

  for (let currency in rates) {
    let result = convert(amount, from, currency);
    console.log(currency, ":", result.toFixed(2));
  }
}

//CONVERTIR UN PANIER

function convertCart(cart, from, to) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i];
  }

  let result = convert(total, from, to);

  console.log("Panier total :", total, from);
  console.log("Converti en", to, ":", result.toFixed(2));
}

//STATISTIQUES

function stats() {
  let countByCurrency = {};
  let totalConverted = 0;

  for (let i = 0; i < history.length; i++) {
    let h = history[i];

    totalConverted = totalConverted + h.amount;

    if (!countByCurrency[h.to]) {
      countByCurrency[h.to] = 0;
    }

    countByCurrency[h.to]++;
  }


  console.log("STATISTIQUES");
  console.log("Total converti est :", totalConverted);
  console.log("Conversions par devise :", countByCurrency);
}

//---TESTS

// conversion simple
console.log("100 USD -> MAD:", convert(100, "USD", "MAD").toFixed(2));

// conversion dans toutes les devises
convertAll(50, "EUR");
// panier
convertCart([10, 20, 30], "EUR", "USD");

// stats
stats();

// afficher historique
console.log("HISTORIQUE:");
console.log(history);