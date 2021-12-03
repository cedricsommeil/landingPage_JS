function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");//qui represente en html la modale
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");





/*fermer la fenetre de la modale*/
const closebutton = document.querySelector(".close");//la croix

const radio = document.querySelectorAll("input[type='radio']");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//lig 21:ceci est une boucle sur tous les boutons à laquelle on a mis un ecouteur d'evenement 
//pour detecter un click, des qu'un bouton sera effectuer il va lancer la fonction launch modal



// donc apres la lign 21: on peut expliquer la launch modal , elle rend la modale en display block alors qu'auparavant elle etait en display none*/
// launch modal form
function launchModal() {
modalbg.style.display = "block";
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
//lig31, 32: c'est le faite de remettre l'écran en haut , d'avoir un scroll automatique,
}

//apres lig31, 32 c'est fermer la modale, on ajoute un ecouteur d'evenement
// close modal event
closebutton.addEventListener("click", closeModal);//c'est le click qui va appeller la close modal

// close modal function 
function closeModal() {
modalbg.style.display = "none";
}



 
/* Ceci concerne la Modal2 message de félicitation sont ouverture et sa fermeture avec la modal1*/

const closebutton2 = document.getElementById("close");//c'est le bouton close avec la croix lign 226 en html
const modalbg2 = document.getElementById('bground2');

function launchModal2() {
  modalbg.style.display ="none";
  modalbg2.style.display = "block";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// close modal2 event
closebutton2.addEventListener("click", closeModal2);

// close modal1 et 2 function 
function closeModal2() {
modalbg2.style.display = "none";
modalbg.style.display = "none";
}

// rajout du troisième bouton
const closebutton3 = document.getElementById('close2');//c'est le bouton close lign 229 en html 
//il est facultatif dans le formulaire on a juste besoin de la croix , soit tu peux fermer par la croix ou le bouton sa lancera la fonction la closemodale2 */

// close modal3 event
closebutton3.addEventListener("click" , closeModal2);





/*Validation de submit*/

document.getElementById("inscription").addEventListener("submit", function(e){
  e.preventDefault();//preventDefault ...c'est pour arreter l'attitude par defaut d'une soumission de formulaire
//de part ce biais on garde les donnés du formumlaire rempli par l'utilisateur parce que PreventDefault empeche le rechargement de la page*/

// j'ai tout d'abord déclaré mes const en les ciblant par leurs ID
 const prenom = document.getElementById('first');
 const nom = document.getElementById('last');
 const date = document.getElementById('birthdate');
 const email = document.getElementById('email');
 const concour = document.getElementById ('quantity');
 const condition = document.getElementById ('checkbox1');

//j'ai declaré une variable erreur a FALSE , pour partir du principe qu'il n'y a aucune erreur
var erreur = false;

//ensuite j'ai mis des conditions pour chaque champs, pour verifier est ce que c'est vide ou que les éléments 
// attendu sont correctes
if (prenom.value.length < 2 || prenom.value === ""){
    document.getElementById('prenom_erreur').innerHTML='Veuillez mettre le prénom avec deux caractères minimun';
    erreur =true;
}else{
    document.getElementById('prenom_erreur').innerHTML="";
  }

if (nom.value.length < 2 || nom.value === ""){
      document.getElementById('nom_erreur').innerHTML='Veuillez mettre le nom avec deux caractères minimun';
      erreur =true;
  }else{
      document.getElementById('nom_erreur').innerHTML="";
    }

if (!ValidateEmail(email) || email.value === ""){
      document.getElementById('email_erreur').innerHTML='Veuillez entrer un email valide';
      erreur =true;
  }else{
    document.getElementById('email_erreur').innerHTML="";
 }

if (date.value  === ""){
  document.getElementById('date_erreur').innerHTML= 'Veuillez entrer une date de naissance';
  erreur =true;
  }else{
  document.getElementById('date_erreur').innerHTML="";
}

//Isinterger(chiffre en anglais) verifie uniquement qu'on rentre bien un nombre
if ((concour.value).isInteger || concour.value === ""){
  document.getElementById('concour_erreur').innerHTML='Veuillez mettre un nombre entier';
  erreur =true;
}else{
document.getElementById('concour_erreur').innerHTML="";
}

if (checkRadioButton() == false){
    document.getElementById('ville_erreur').innerHTML='Veuillez choisir une ville';
    erreur =true;
}else{
document.getElementById('ville_erreur').innerHTML="";
}

if (!condition.checked){
    document.getElementById('condition_erreur').innerHTML= 'la case doit etre cochée';
    erreur =true;
}else{
document.getElementById('condition_erreur').innerHTML="";
}


console.log(erreur);
if(erreur == false){
  launchModal2();
//Si le formulaire est correct sa lancera la fonction launchModal2 qui répresente le message de félicitation
} 
});




//Validation du mail
function ValidateEmail(input) {
//j'ai copié ce regex sur internet qui verifie que le mail correspond au standard
  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  if (input.value.match(validRegex)) {
 
    return true;

  } else {

    return false;
  }
}



//selection du bouton radio, et d'une case condition coché
function checkRadioButton(){

 var radioCheck = false;
  const j = radio.length;

  for (let i=0; i<j; i++){
 
    if(radio[i].checked === true){

     radioCheck = true;
    break;
    }
  }
  
  return radioCheck;

}


