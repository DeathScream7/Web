
let golds = 0; // Variable pour stocker les golds
let gants = 0;
let prixGants = 10;
let pioches = 0;
let prixPioches = 100;
let tracteurs = 0;
let prixTracteurs = 1000;
let fermes = 0;
let prixFermes = 10000;
let villages = 0;
let prixVillages = 100000;
let villes = 0;
let prixVilles = 1000000;

// Fonction pour ajouter un point et mettre à jour l'affichage
function actualiserEcran() {
    coefGolds = 1000000;
    // coefGolds = 1;
    let communistBand = document.getElementById("communistBand");
    if (98.8-golds/coefGolds>8) {
        communistBand.style.height = golds / coefGolds + "%";
        communistBand.style.top = 98.8 - golds / coefGolds + "%";
    }else{
        communistBand.style.height = 90+"%";
        communistBand.style.top = 8.8+"%";
    }

    coefProd = 1000000;
    // coefProd = 1;
    let communistLogo = document.getElementById("communistLogo");
    if (98.8-golds/coefProd>-20) {
        communistLogo.style.height = golds/coefProd+"%";
        communistLogo.style.top = 98.8 - golds / coefProd + "%";
    }else{
        communistLogo.style.height = 98.8+"%";
        communistLogo.style.top = -10+"%";
    }


    document.getElementById('gants').innerText = gants;
    // document.getElementById('prixGants').innerText = prixGants;
    document.getElementById('pioches').innerText = pioches;
    // document.getElementById('prixPioches').innerText = prixPioches;
    document.getElementById('tracteurs').innerText = tracteurs;
    // document.getElementById('prixTracteurs').innerText = prixTracteurs;
    document.getElementById('fermes').innerText = fermes;
    // document.getElementById('prixFermes').innerText = prixFermes;
    document.getElementById('villages').innerText = villages;
    // document.getElementById('prixVillages').innerText = prixVillages;
    document.getElementById('villes').innerText = villes;
    // document.getElementById('prixVilles').innerText = prixVilles;

    document.getElementById('enfants').innerText = enfants;
    // document.getElementById('prixEnfants').innerText = prixEnfants;
    document.getElementById('grandmeres').innerText = grandmeres;
    // document.getElementById('prixGrandmeres').innerText = prixGrandmeres;
    document.getElementById('esclaves').innerText = esclaves;
    // document.getElementById('prixEsclaves').innerText = prixEsclaves;
    document.getElementById('travailleurs').innerText = travailleurs;
    // document.getElementById('prixTravailleurs').innerText = prixTravailleurs;
    document.getElementById('goats').innerText = goats;
    // document.getElementById('prixGoats').innerText = prixGoats;

    document.getElementById('golds').innerText = golds;
    document.getElementById('prod').innerText = prod;
}

// Fonction pour ajouter un point et mettre à jour l'affichage
function ajouterGold() {
    golds=golds+1+gants+pioches*2+tracteurs*4+fermes*8+villages*16+villes*32;
    actualiserEcran();
}

// Acheter gant
function acheterGant() {
    if (golds >= prixGants) {
        golds = golds - prixGants
        gants++;
    }
    prixGants = 10 + gants;
    actualiserEcran();
}

// Acheter pioche
function acheterPioche() {
    if (golds >= prixPioches) {
        golds=golds-prixPioches
        pioches++;
    }
    prixPioches = 100 + 2*pioches;
    actualiserEcran();
}

// Acheter tracteur
function acheterTracteur() {
    if (golds >= prixTracteurs) {
        golds=golds-prixTracteurs
        tracteurs++;
    }
    prixTracteurs = 1000 + 4*tracteurs;
    actualiserEcran();
}

// Acheter ferme
function acheterFerme() {
    if (golds >= prixFermes) {
        golds=golds-prixFermes
        fermes++;
    }
    prixFermes = 10000 + 8*fermes;
    actualiserEcran();
}

// Acheter village
function acheterVillage() {
    if (golds >= prixVillages) {
        golds=golds-prixVillages
        villages++;
    }
    prixVillages = 100000 + 16*villages;
    actualiserEcran();
}
// Acheter ville
function acheterVille() {
    if (golds >= prixVilles) {
        golds=golds-prixVilles
        villes++;
    }
    prixVilles = 1000000 + 32*villes;
    actualiserEcran()
}

// Ajout d'un événement au clic sur le bouton
document.getElementById('mainButton').addEventListener('click', ajouterGold);
document.getElementById('gantDiv').addEventListener('click', acheterGant);
document.getElementById('piocheDiv').addEventListener('click', acheterPioche);
document.getElementById('tracteurDiv').addEventListener('click', acheterTracteur);
document.getElementById('fermeDiv').addEventListener('click', acheterFerme);
document.getElementById('villageDiv').addEventListener('click', acheterVillage);
document.getElementById('villeDiv').addEventListener('click', acheterVille);






let prod = 0;
let enfants = 0;
let prixEnfants = 0;
let grandmeres = 0;
let prixGrandmeres = 0;
let esclaves = 0;
let prixEsclaves = 0;
let travailleurs = 0;
let prixTravailleurs = 0;
let goats = 0;
let prixGoats = 0;

// Fonction pour ajouter un point et mettre à jour l'affichage
function production() {
    golds=golds+prod;
    actualiserEcran();
}

// Fonction pour ajouter un point et mettre à jour l'affichage
function ajouterProd() {
    prod=enfants*100+grandmeres*200+esclaves*500+travailleurs*1000+goats*10000;
    actualiserEcran();
}

// Acheter enfants
function acheterEnfant() {
    prixEnfants = 1000 + 100*enfants;
    if (golds >= prixEnfants) {
        golds = golds - prixEnfants
        enfants++;
        ajouterProd();
    }
}

// Acheter grandmeres
function acheterGrandmere() {
    prixGrandmeres = 2000 + 200*grandmeres;
    if (golds >= prixGrandmeres) {
        golds=golds-prixGrandmeres
        grandmeres++;
        ajouterProd();
    }
}

// Acheter esclaves
function acheterEsclave() {
    prixEsclaves = 10000 + 800*esclaves;
    if (golds >= prixEsclaves) {
        golds=golds-prixEsclaves
        esclaves++;
        ajouterProd();
    }
}

// Acheter travailleurs
function acheterTravailleur() {
    prixTravailleurs = 100000 + 8000*travailleurs;
    if (golds >= prixTravailleurs) {
        golds=golds-prixTravailleurs
        travailleurs++;
        ajouterProd();
    }
}

// Acheter goats
function acheterGoat() {
    prixGoats = 1000000 + 16000*goats;
    if (golds >= prixGoats) {
        golds=golds-prixGoats
        goats++;
        ajouterProd();
    }
}


// Ajout d'un événement au clic sur le bouton
setInterval(production, 1000); // Exécute maFonction toutes les 1000 millisecondes (1 seconde)
document.getElementById('enfantsDiv').addEventListener('click', acheterEnfant);
document.getElementById('grandmerseDiv').addEventListener('click', acheterGrandmere);
document.getElementById('escalvesDiv').addEventListener('click', acheterEsclave);
document.getElementById('travailleursDiv').addEventListener('click', acheterTravailleur);
document.getElementById('goatsDiv').addEventListener('click', acheterGoat);



acheterGant();
acheterPioche();
acheterTracteur();
acheterFerme();
acheterVillage();
acheterVille();

acheterEnfant();
acheterGrandmere();
acheterEsclave();
acheterTravailleur();
acheterGoat();