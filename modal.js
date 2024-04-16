// Nav responsive
function editNav() {
	var x = document.getElementById("home");
	if (x.className === "header-mh") {
	x.className += " responsive";
	} else {
	x.className = "header-mh";
	}
}

function markActive(element) {
	const navElt = document.querySelectorAll(".projects-mh-nav__text");
	navElt.forEach(function(nav) {
		nav.classList.remove("active");
	})
	element.classList.add("active");
}

// DOM Elements
const filtreAll = document.getElementById("all-projects");
const filtreGraphicDesign = document.getElementById("graphic-design");
const filtreIllustration = document.getElementById("illustration");
const filtreDevWeb = document.getElementById("dev-web");
const filtre3d = document.getElementById("troisD");
const filtrePhoto = document.getElementById("photo");
const projetsIllustration = document.querySelectorAll(".projects-mh-section__link_illustration");
const projetsGraphicDesign = document.querySelectorAll(".projects-mh-section__link_graphic-design");
const projets3d = document.querySelectorAll(".projects-mh-section__link_troisD");
const projetsDevWeb = document.querySelectorAll(".projects-mh-section__link_dev-web");
const projetsPhoto = document.querySelectorAll(".projects-mh-section__link_photo");

//Filtres
filtreAll.addEventListener("click", function(afficherAll) {
	projetsIllustration.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsGraphicDesign.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projets3d.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsDevWeb.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsPhoto.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	markActive(this);
});

filtreIllustration.addEventListener("click", function(afficherIllustration) {
	projetsPhoto.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsIllustration.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsGraphicDesign.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projets3d.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsDevWeb.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	markActive(this);
});

filtreGraphicDesign.addEventListener("click", function(afficherGraphicDesign) {
	projetsPhoto.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsGraphicDesign.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsIllustration.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projets3d.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsDevWeb.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	markActive(this);
});

filtreDevWeb.addEventListener("click", function(afficherDevWeb) {
	projetsPhoto.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsDevWeb.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsIllustration.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projets3d.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsGraphicDesign.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	markActive(this);
});

filtre3d.addEventListener("click", function(afficher3d) {
	projetsPhoto.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projets3d.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projetsIllustration.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsDevWeb.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsGraphicDesign.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	markActive(this);
});

filtrePhoto.addEventListener("click", function(afficherPhoto) {
	projetsPhoto.forEach(function(everyClass){
		everyClass.style.display = "block";
	})
	projets3d.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsIllustration.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsDevWeb.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	projetsGraphicDesign.forEach(function(everyClass){
		everyClass.style.display = "none";
	})
	markActive(this);
});