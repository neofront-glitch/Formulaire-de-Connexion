const boutonInscription = document.getElementById('inscription');
const boutonConnexion = document.getElementById('connexion');
const conteneur = document.getElementById('conteneur');

// boutons visibles en responsive pour basculer entre vues
const allerInscription = document.getElementById('aller-inscription');
const allerConnexion = document.getElementById('aller-connexion');

boutonInscription.addEventListener('click', () => {
	conteneur.classList.add("panneau-droit-actif");
});

boutonConnexion.addEventListener('click', () => {
	conteneur.classList.remove("panneau-droit-actif");
});

if (allerInscription) {
	allerInscription.addEventListener('click', () => {
		conteneur.classList.add('vue-inscription');
		conteneur.classList.remove('panneau-droit-actif');
	});
}

if (allerConnexion) {
	allerConnexion.addEventListener('click', () => {
		conteneur.classList.remove('vue-inscription');
		conteneur.classList.remove('panneau-droit-actif');
	});
}