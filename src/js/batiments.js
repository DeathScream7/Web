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


// Une fois la page chargée
window.addEventListener("load", function() {
    getCookies();
    ajouterProd();
});

//Avant de quitter la page
window.addEventListener("beforeunload", function (event) {
    setCookie("userGolds", golds, 10); // 10 jours de validité du cookie
    setCookie("userGants", gants, 10); // 10 jours de validité du cookie
    setCookie("userPioches", pioches, 10); // 10 jours de validité du cookie
    setCookie("userTracteurs", tracteurs, 10); // 10 jours de validité du cookie
    setCookie("userFermes", fermes, 10); // 10 jours de validité du cookie
    setCookie("userVillages", villages, 10); // 10 jours de validité du cookie
    setCookie("userVilles", villes, 10); // 10 jours de validité du cookie
    setCookie("userEnfants", enfants, 10); // 10 jours de validité du cookie
    setCookie("userGrandsmeres", grandmeres, 10); // 10 jours de validité du cookie
    setCookie("userEsclaves", esclaves, 10); // 10 jours de validité du cookie
    setCookie("userTravailleurs", travailleurs, 10); // 10 jours de validité du cookie
    setCookie("userGoats", goats, 10); // 10 jours de validité du cookie
});

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

    prixGants = 10 + gants;
    prixPioches = 100 + 2*pioches;
    prixTracteurs = 1000 + 4*tracteurs;
    prixFermes = 10000 + 80*fermes;
    prixVillages = 100000 + 1600*villages;
    prixVilles = 1000000 + 32000*villes;

    prixEnfants = 1000 + 100*enfants;
    prixGrandmeres = 2000 + 200*grandmeres;
    prixEsclaves = 10000 + 800*esclaves;
    prixTravailleurs = 100000 + 8000*travailleurs;
    prixGoats = 1000000 + 16000*goats;

//test
    document.getElementById('gants').innerText = gants;
    document.getElementById('prixGants').innerText = prixGants;
    document.getElementById('pioches').innerText = pioches;
    document.getElementById('prixPioches').innerText = prixPioches;
    document.getElementById('tracteurs').innerText = tracteurs;
    document.getElementById('prixTracteurs').innerText = prixTracteurs;
    document.getElementById('fermes').innerText = fermes;
    document.getElementById('prixFermes').innerText = prixFermes;
    document.getElementById('villages').innerText = villages;
    document.getElementById('prixVillages').innerText = prixVillages;
    document.getElementById('villes').innerText = villes;
    document.getElementById('prixVilles').innerText = prixVilles;

    document.getElementById('enfants').innerText = enfants;
    document.getElementById('prixEnfants').innerText = prixEnfants;
    document.getElementById('grandmeres').innerText = grandmeres;
    document.getElementById('prixGrandmeres').innerText = prixGrandmeres;
    document.getElementById('esclaves').innerText = esclaves;
    document.getElementById('prixEsclaves').innerText = prixEsclaves;
    document.getElementById('travailleurs').innerText = travailleurs;
    document.getElementById('prixTravailleurs').innerText = prixTravailleurs;
    document.getElementById('goats').innerText = goats;
    document.getElementById('prixGoats').innerText = prixGoats;

    document.getElementById('golds').innerText = golds;
    document.getElementById('prod').innerText = prod;

    // Stocker le score dans les cookies



}

// Fonction pour ajouter un point et mettre à jour l'affichage
function ajouterGold() {
    golds = golds + 1 + gants + pioches * 2 + tracteurs * 4 + fermes * 8 + villages * 16 + villes * 32;
    actualiserEcran();
}

// Acheter gant
function acheterGant() {
    if (golds >= prixGants) {
        golds = golds - prixGants
        gants++;
    }
    actualiserEcran();
}

// Acheter pioche
function acheterPioche() {
    if (golds >= prixPioches) {
        golds=golds-prixPioches
        pioches++;
    }
    actualiserEcran();
}

// Acheter tracteur
function acheterTracteur() {
    if (golds >= prixTracteurs) {
        golds=golds-prixTracteurs
        tracteurs++;
    }
    actualiserEcran();
}

// Acheter ferme
function acheterFerme() {
    if (golds >= prixFermes) {
        golds=golds-prixFermes
        fermes++;
    }
    actualiserEcran();
}

// Acheter village
function acheterVillage() {
    if (golds >= prixVillages) {
        golds=golds-prixVillages
        villages++;
    }
    actualiserEcran();
}
// Acheter ville
function acheterVille() {
    if (golds >= prixVilles) {
        golds=golds-prixVilles
        villes++;
    }
    actualiserEcran()
}











// Ajout d'un événement au clic sur le bouton
document.getElementById('mainButton').addEventListener('click', ajouterGold);


var intervalId;
var timer = 100;

addEventListener("mouseup", function() {
    clearInterval(intervalId);
});
document.getElementById('gantDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterGant();
    }, timer);
});
document.getElementById('gantDiv').addEventListener("touchstart", function() {
    intervalId = setInterval(function() {
        acheterGant();
    }, timer);
});
document.getElementById('piocheDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterPioche();
    }, timer);
});
document.getElementById('piocheDiv').addEventListener("touchstart", function() {
    intervalId = setInterval(function() {
        acheterPioche();
    }, timer);
});
document.getElementById('tracteurDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterTracteur();
    }, timer);
});
document.getElementById('tracteurDiv').addEventListener("touchstart", function() {
    intervalId = setInterval(function() {
        acheterTracteur();
    }, timer);
});
document.getElementById('fermeDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterFerme();
    }, timer);
});
document.getElementById('fermeDiv').addEventListener("touchstart", function() {
    intervalId = setInterval(function() {
        acheterFerme();
    }, timer);
});
document.getElementById('villageDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterVillage();
    }, timer);
});
document.getElementById('villageDiv').addEventListener("touchstart", function() {
    intervalId = setInterval(function() {
        acheterVillage();
    }, timer);
});
document.getElementById('villeDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterVille();
    }, timer);
});
document.getElementById('villeDiv').addEventListener("touchstart", function() {
    intervalId = setInterval(function() {
        acheterVille();
    }, timer);
});

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
    prod=enfants*10+grandmeres*20+esclaves*50+travailleurs*100+goats*1000;
    actualiserEcran();
}

// Acheter enfants
function acheterEnfant() {
    if (golds >= prixEnfants) {
        golds = golds - prixEnfants
        enfants++;
        ajouterProd();
    }
}

// Acheter grandmeres
function acheterGrandmere() {
    if (golds >= prixGrandmeres) {
        golds=golds-prixGrandmeres
        grandmeres++;
        ajouterProd();
    }
}

// Acheter esclaves
function acheterEsclave() {
    if (golds >= prixEsclaves) {
        golds=golds-prixEsclaves
        esclaves++;
        ajouterProd();
    }
}

// Acheter travailleurs
function acheterTravailleur() {
    if (golds >= prixTravailleurs) {
        golds=golds-prixTravailleurs
        travailleurs++;
        ajouterProd();
    }
}

// Acheter goats
function acheterGoat() {
    if (golds >= prixGoats) {
        golds=golds-prixGoats
        goats++;
        ajouterProd();
    }
}


// Ajout d'un événement au clic sur le bouton
setInterval(production, 1000); // Exécute maFonction toutes les 1000 millisecondes (1 seconde)

document.getElementById('enfantsDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterEnfant();
    }, timer);
});
document.getElementById('grandmerseDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterGrandmere();
    }, timer);
});
document.getElementById('escalvesDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterEsclave();
    }, timer);
});
document.getElementById('travailleursDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterTravailleur();
    }, timer);
});
document.getElementById('goatsDiv').addEventListener("mousedown", function() {
    intervalId = setInterval(function() {
        acheterGoat();
    }, timer);
});
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



















// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}




// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return 0;
}


function getCookies(){
    golds = parseInt(getCookie("userGolds"));
    gants = parseInt(getCookie("userGants"));
    pioches = parseInt(getCookie("userPioches"));
    tracteurs = parseInt(getCookie("userTracteurs"));
    fermes = parseInt(getCookie("userFermes"));
    villages = parseInt(getCookie("userVillages"));
    villes = parseInt(getCookie("userVilles"));
    enfants = parseInt(getCookie("userEnfants"));
    grandmeres = parseInt(getCookie("userGrandsmeres"));
    esclaves = parseInt(getCookie("userEsclaves"));
    travailleurs = parseInt(getCookie("userTravailleurs"));
    goats = parseInt(getCookie("userGoats"));
}



