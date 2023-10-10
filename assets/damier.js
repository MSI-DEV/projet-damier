console.log("Script chargé !")
// Je crée une fonction maTable que je relie à la balise "table" en html.
let maTable = document.createElement("table")
// J'indique que maTable est l'enfant de ma balise html "body".
document.body.appendChild(maTable);
// Je fais ma première boucle.
// J'indique que mon nombre de lignes commence par 1 puis s'arrête à 8.
// Génération des lignes de ma table//
const lettres =["A","B","C","D","E","F","G","H"];
// const chiffres = ["1","2","3","4","5"];
for (let lignes = 1; lignes <= 9; lignes ++)
{
    // Je crée la fonction uneRow que je relie à la balise "tr".
    let maligne = document.createElement("tr");
    // J'indique qu'il s'agit d'un enfant de la balise (maTable)(maLigne).
    maTable.appendChild(maligne)
    console.log("numero de lignes/de table : ",lignes);  
    // Je fais une nouvelle boucle où je traite cette fois-ci des cellules, qui commencent aussi par 1 et s'arrêtent à 8.
for (let cellules = 1; cellules <=9; cellules++)
{
        // Je crée la fonction uneCellule que je relie à la balise html "td".
    let maCellule = document.createElement("td"); 
    if ((lignes+cellules)%2 ===0)
    {
        maCellule.style.backgroundColor="black"}
    else {
        maCellule.style.backgroundColor="white"
    }
    // maCellule.textContent = (`numero de ligne:${lignes} numero de colonne:${cellules}`).toString();
    if (lignes ===1 || cellules === 1) 
    {
        maCellule.style.backgroundColor = "white"
        maCellule.style.border ="none"
    if (lignes <= 1 || cellules == 0)
    {
        // maCellule.textContent = lignes[cellules];
        maCellule.textContent = lettres [cellules-2]
    }
    else { if(lignes >=1 || cellules ==0){
        maCellule.textContent = lignes-1}
    }

    }
    maligne.appendChild(maCellule);
    // J'indique que uneCellule est enfant de (uneRow)(maLigne).
              // J'indique que le texte à l'intérieur de ma cellule équivaudrait à une multiplication entre mon nombre de lignes et mon nombre de cellules
    //   maCellule.textContent = (cellules * lignes).toString();
      console.log("numero de cellule/multiplicateur :",)
}
}