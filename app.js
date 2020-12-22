//# Exo-97-JS-setTimeout-et-setInterval

//1. Définissez un timeout qui s'exécute toutes les 2 secondes la fonction passée en paramètre du timeout devra:
//     - Se déclencher lors du clic sur le bouton #timeout
//     - Créer un div
//     - Appliquer un style au choix à ce div
//     - Ajouter le div à l'élément #timeout-div
//     - Insérer le texte "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !" au div

let result = document.getElementById("timeout-div");
let button = document.getElementById("timeout");

button.addEventListener("click",function (){
    setTimeout(function (){
        let div1 = document.createElement("div");
        result.append(div1);
        result.style.backgroundColor = "chocolate";
        result.style.color = "white";
        result.style.padding = "2px 2px";
        result.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
    },2000)
})

//2. Définissez un intervalle qui s'exécute toutes les 60 secondes, la fonction passée en paramètre devra:
//     - Se déclencher lors du clic sur le bouton #interval-start.
//     - S'arrêter lors du clic sur le bouton #interval-stop.
//     - Incrémenter une variable de 60 ( toutes les 60 secondes du coups )
//     - A chaque fois mettre à jour le contenu du div #interval-div avec la nouvelle valeur de la variable incrémentée.

let result1 = document.getElementById("interval-div");
let button1 = document.getElementById("interval-start");
let button2 = document.getElementById("interval-stop");
let compteur = 0;
let intervalID = 0;

button1.addEventListener("click",function (){
    intervalID = setInterval(function (){
        if(compteur <=60){
        let div2 = document.createElement("div");
        result1.append(div2);
        result1.style.backgroundColor = "#CCCCFF";
        result1.innerHTML = "Le compteur est en marche "+compteur;
        compteur++;
        }
    }, 1000);
})

button2.addEventListener("click", function (){
    if(intervalID !== 0){
        clearInterval(intervalID);
        intervalID = 0;
    }
})


