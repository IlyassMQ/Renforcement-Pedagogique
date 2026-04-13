// Tu crées un CRM simplifié. Chaque contact est un objet avec : nom, entreprise, email, telephone, ville, et un objet imbriqué adresse (rue, code_postal, ville, pays).

// Crée 6 contacts avec des adresses complètes
// Affiche le nom et la ville de chaque contact
// Regroupe les contacts par ville : pour chaque ville, la liste des noms
// Cherche tous les contacts d'une entreprise donnée
// Modifie l'adresse d'un contact (il a déménagé)
// Ajoute un champ "dernierContact" (date) à chaque contact
// Affiche les contacts que tu n'as pas contactés depuis plus de 30 jours

let contacts = [
{ nom: "Ali Benali", entreprise: "OCP", email: "ali@ocp.ma", telephone: "0600000001", ville: "Casablanca", adresse: { rue: "123 Bd Zerktouni", code_postal: "20000", ville: "Casablanca", pays: "Maroc" }, dernierContact: new Date("2026-02-10") },
{ nom: "Sara Amrani", entreprise: "Capgemini", email: "sara@capgemini.com", telephone: "0600000002", ville: "Rabat", adresse: { rue: "45 Avenue Mohammed V", code_postal: "10000", ville: "Rabat", pays: "Maroc" }, dernierContact: new Date("2026-03-10") },
{ nom: "Youssef El Idrissi", entreprise: "Accenture", email: "youssef@accenture.com", telephone: "0600000003", ville: "Casablanca", adresse: { rue: "78 Bd Anfa", code_postal: "20000", ville: "Casablanca", pays: "Maroc" }, dernierContact: new Date("2026-01-15") },
{ nom: "Imane Tazi", entreprise: "OCP", email: "imane@ocp.ma", telephone: "0600000004", ville: "Marrakech", adresse: { rue: "12 Rue Majorelle", code_postal: "40000", ville: "Marrakech", pays: "Maroc" }, dernierContact: new Date("2026-02-20") },
{ nom: "Karim Fassi", entreprise: "IBM", email: "karim@ibm.com", telephone: "0600000005", ville: "Rabat", adresse: { rue: "9 Hay Riad", code_postal: "10100", ville: "Rabat", pays: "Maroc" }, dernierContact: new Date("2026-03-01") },
{ nom: "Nadia Lahlou", entreprise: "Capgemini", email: "nadia@capgemini.com", telephone: "0600000006", ville: "Casablanca", adresse: { rue: "33 Bd Ghandi", code_postal: "20000", ville: "Casablanca", pays: "Maroc" }, dernierContact: new Date("2026-01-01") }
];


    contacts.forEach(c => {
       console.log(c.nom ,"-",c.ville) 
    }
        
    )

    let groupes = {};
contacts.forEach(c => {
  if (!groupes[c.ville]) {
    groupes[c.ville] = [];
  }
  groupes[c.ville].push(c.nom);
});

console.log(groupes);

function chercherParEntreprise(nomEntreprise) {
  return contacts.filter(c => c.entreprise === nomEntreprise);
}

console.log(chercherParEntreprise("OCP"));