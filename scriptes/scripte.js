
document.querySelector(".icone_profil").addEventListener("click", option_connexion);


function option_connexion(event){
	document.querySelector(".icone_profil").classList.toggle("vague");
	document.querySelector(".option_connexion").classList.toggle("visible");
}

document.querySelector(".burger").addEventListener("click", menuBurger);


function menuBurger(event){
	document.querySelector(".burger").classList.toggle("burger_pencher");
	document.querySelector("nav").classList.toggle("nav_cacher");
	document.querySelector("nav").classList.toggle("nav_plus");	
}

 // gestionnaire d'événements au défilement
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
	document.querySelector('nav').classList.add("invisible");
  } else {
	document.querySelector('nav').classList.remove("invisible");
  }
});

document.querySelector(".bouton_filtre").addEventListener("click", affichage_filtre);

function affichage_filtre(event){
	document.querySelector(".card_filtre").classList.toggle("visibleF");
	document.querySelector(".espace_filtre").classList.toggle("visibleF");
}

/* document.querySelector(".voir").addEventListener("click", voir_plus); */

function voir_plus(element){
	console.log("jesus");
	console.log(element);
	element.querySelector(".voir_plus").classList.toggle("suppression");
	element.querySelector(".voir_plus:last-child").classList.toggle("suppression");
	element.previousElementSibling.classList.toggle("afficher_tout");
}


document.querySelector(".box_map>img:nth-child(1)").addEventListener("click", zoom);
document.querySelector(".box_map>img:nth-child(2)").addEventListener("click", zoom);

function zoom(event){
	document.querySelector(".box_map>img:nth-child(1)").classList.toggle("Bzoom");
	document.querySelector(".box_map>img:nth-child(2)").classList.toggle("Bzoom");
	document.querySelector(".box_map>#map").classList.toggle("zoomé");
}

function verifierCompatibilite(checkbox) {
    // Vérifier si la case à cocher a été cochée
    if (checkbox.checked) {
      // Récupérer le nom de la case à cocher
      var nomCheckbox = checkbox.value;

      // Vérifier si la case équivalente dans l'autre catégorie est cochée
      var autreCategorieCheckbox = document.getElementById('N' + nomCheckbox);
      
      if (autreCategorieCheckbox.checked) {
        // Si c'est le cas, décocher la case dans l'autre catégorie
        autreCategorieCheckbox.checked = false;
      }
    }
}

function verifierInCompatibilite(checkbox) {
// Vérifier si la case à cocher a été cochée
	if (checkbox.checked) {
	// Récupérer le nom de la case à cocher
	var nomCheckbox = checkbox.value;

	var NonCompatiblecheckbox = '';

	  for (let i = 1; i < nomCheckbox.length; i++) {
		NonCompatiblecheckbox += nomCheckbox[i];
	  }

	// Vérifier si la case équivalente dans l'autre catégorie est cochée
	var autreCategorieCheckbox = document.getElementById(NonCompatiblecheckbox);

	
		if (autreCategorieCheckbox.checked) {
		// Si c'est le cas, décocher la case dans l'autre catégorie
		autreCategorieCheckbox.checked = false;
		}
	}
}

console.log(document.querySelector("main>div").className);
if (document.querySelector("main>div").className === "card modif_compte") {
	document.querySelector("body").className = "fond_jaune";
}

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	
}).addTo(map);



