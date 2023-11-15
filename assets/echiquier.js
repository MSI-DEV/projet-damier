console.log("Script chargé !");

// Création de la table et ajout à body
let table = document.createElement("table");
document.body.appendChild(table);

// Génération des lignes de la table
const lettres = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let lignes = 1; lignes <= 10; lignes++) {
    let maligne = document.createElement("tr");
    table.appendChild(maligne);

    // Génération des cellules de chaque ligne
    for (let cellules = 1; cellules <= 8; cellules++) {
        let maCellule = document.createElement("td");

        // Définition de la couleur de fond de la cellule en fonction de la parité de la somme des lignes et cellules
        if ((lignes + cellules) % 2 === 0) {
            maCellule.style.backgroundColor = "";   
        } else {
            maCellule.style.backgroundColor = "grey";
        }

        // Ajout des pions noirs sur la première ligne
        if (lignes === 1 && cellules > 0 && cellules <= 8) {
            let pawnDiv = document.createElement("div");
            pawnDiv.className = "pawn black";

            let pawnImg = document.createElement("img");
            switch (cellules) {
                case 1:
                    pawnImg.src = `../assets/img/tour-noir.png`;
                    break;
                case 2:
                    pawnImg.src = `../assets/img/cavalier-noir.png`;
                    break;
                case 3:
                    pawnImg.src = `../assets/img/fou-noir.png`;
                    break;
                case 4:
                    pawnImg.src = `../assets/img/reine-noir.png`;
                    break;
                case 5:
                    pawnImg.src = `../assets/img/roi-noir.png`;
                    break;
                case 6:
                    pawnImg.src = `../assets/img/fou-noir.png`;
                    break;
                case 7:
                    pawnImg.src = `../assets/img/cavalier-noir.png`;
                    break;
                case 8:
                    pawnImg.src = `../assets/img/tour-noir.png`;
                    break;
                default:
                    break;
            }

            pawnImg.alt = "Pion";
            pawnDiv.appendChild(pawnImg);
            maCellule.appendChild(pawnDiv);
        }

        // Ajout des pions blancs sur la dernière ligne
        if (lignes === 8 && cellules > 0 && cellules <= 8) {
            let pawnDiv = document.createElement("div");
            pawnDiv.className = "pawn white";

            let pawnImg = document.createElement("img");
            switch (cellules) {
                case 1:
                    pawnImg.src = `../assets/img/tour-blanc.png`;
                    // Inversion de la couleur pour la première tour blanche de la dernière ligne
                    if (cellules === 1) {
                        maCellule.style.backgroundColor = "grey";
                    } else {
                        if ((lignes + cellules) % 2 === 0) {
                            maCellule.style.backgroundColor = "grey";
                        } else {
                            maCellule.style.backgroundColor = "white";
                        }
                    }
                    break;
                case 2:
                    pawnImg.src = `../assets/img/cavalier-blanc.png`;
                    break;
                case 3:
                    pawnImg.src = `../assets/img/fou-blanc.png`;
                    break;
                case 4:
                    pawnImg.src = `../assets/img/reine-blanc.png`;
                    break;
                case 5:
                    pawnImg.src = `../assets/img/roi-blanc.png`;
                    break;
                case 6:
                    pawnImg.src = `../assets/img/fou-blanc.png`;
                    break;
                case 7:
                    pawnImg.src = `../assets/img/cavalier-blanc.png`;
                    break;
                case 8:
                    pawnImg.src = `../assets/img/tour-blanc.png`;
                    break;
                default:
                    break;
            }

            pawnImg.alt = "Pion";
            pawnDiv.appendChild(pawnImg);
            maCellule.appendChild(pawnDiv);
        }

        // Ajout de la cellule à la ligne
        maligne.appendChild(maCellule);

        // Ajouter une ligne de pions noirs en dessous des pions noirs de la première ligne
        if (lignes === 2 && cellules > 0 && cellules <= 8) {
            let simplePawnDiv = document.createElement("div");
            simplePawnDiv.className = "pawn black";

            let simplePawnImg = document.createElement("img");
            simplePawnImg.src = `../assets/img/pion-noir.png`;
            simplePawnImg.alt = "Pion";
            simplePawnDiv.appendChild(simplePawnImg);
            maCellule.appendChild(simplePawnDiv);
        }

        // Ajouter une ligne de pions blancs simples au-dessus des pions blancs existants
        if (lignes === 7 && cellules > 0 && cellules <= 8) {
            let simpleWhitePawnDiv = document.createElement("div");
            simpleWhitePawnDiv.className = "pawn white";

            let simpleWhitePawnImg = document.createElement("img");
            simpleWhitePawnImg.src = `../assets/img/pion-blanc.png`;
            simpleWhitePawnImg.alt = "Pion";
            simpleWhitePawnDiv.appendChild(simpleWhitePawnImg);
            maCellule.appendChild(simpleWhitePawnDiv);
        }

        // Ajouter du texte dans les cellules vides
        if (lignes > 2 && lignes < 7 && cellules > 0 && cellules <= 8) {
            maCellule.innerHTML = "&nbsp;"; // Utilisation de la balise &nbsp; pour un espace non rompu
            maCellule.classList.add("empty-cell");
        }
    }
}