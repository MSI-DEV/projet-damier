console.log("Script chargé !")
// Je crée une fonction maTable que je relie à la balise "table" en html.
let maTable = document.createElement("table")
// J'indique que maTable est l'enfant de ma balise html "body".
document.body.appendChild(maTable);
// Je fais ma première boucle.
// J'indique que mon nombre de lignes commence par 1 puis s'arrête à 10.
// Génération des lignes de ma table//
for (let lignes = 1; lignes <= 10; lignes ++){
    let maligne = document.createElement("tr");
}
