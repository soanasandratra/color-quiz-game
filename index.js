let colorBox = document.getElementById("color");
let score = document.querySelector("#score span");
let responses = [...document.getElementsByClassName("response")];

let compteurScore = 0;

let colorADeviner;
// generer des entiers aleatoires [0, 255] pour le rgb(  )
const generateIntForRgb = () => {
  return Math.floor(Math.random() * 256); //donner un entier [0, 255]
};

// generer le rgb() en string
const generateRgb = () => {
  let red = generateIntForRgb();
  let green = generateIntForRgb();
  let blue = generateIntForRgb();
  return `rgb(${red}, ${green}, ${blue} )`; //donner rgb(r, g, b)
};

// initialiser le jeu

const init = () => {
  score.innerHTML = compteurScore;
  //   choisir aleatoirement la bonne reponse entres les 4 reponses
  let respCorrect = Math.floor(Math.random() * 4); //donner un chiffre entre 0, 3 pour le choisir

  //on veut que donner une valeur rgb pour chaque reponse
  responses.forEach((response) => {
    response.innerHTML = generateRgb();
  }); //generer une valeur rgb pour chaque response dans le tableau

  //   on stock l un des quatres comme la bonne response
  colorADeviner = responses[respCorrect].innerHTML;
  //   on met ce dernier dans le box de color a deviner
  colorBox.style.background = colorADeviner;
};

init();

// fonction pour verifier si l element clicker est la bonne reponse
const verify = (e) => {
  //recuperons la valeur  qu il a clicker
  let clicked = e.target.innerHTML;
  // verifions si c est la bonne reponse
  if (clicked != colorADeviner) {
    alert(`mauvaise reponse !!!!
        \nla bonne reponse etait ${colorADeviner}`);
    // et on reinitialise le jeu
    compteurScore = 0;
    init();
  } else {
    compteurScore++;
    init();
  }
};

// on inejecte la fonction pour chaque reponses si elle est clickée
responses.forEach((response) => {
  response.addEventListener("click", verify);
});
