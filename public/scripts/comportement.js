

function maj_departement() {
    config.departement_actuel = config.departements_aleatoire[config.compteur]
    document.getElementById('departement').innerText = config.departement_actuel.nom;
    config.compteur = config.compteur + 1;
}


// Premire execution
maj_departement()

