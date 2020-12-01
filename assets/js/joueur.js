class Joueur {
	constructor(nom, divJoueur) {
    	this.nom = nom;
    	this.main = [];
    	this.id = divJoueur;
    	this.totalPoints = 0;
    	this.divJoueur = document.getElementById('main' + divJoueur);
    	this.score = document.getElementById('score' + divJoueur);
    	document.getElementById('text' + divJoueur).innerHTML = nom;
 	}
	addCarte(carte, mask) {
		this.main.push(carte);
		this.totalPoints += carte.valeur;
		this.divJoueur.innerHTML += ' ' + carte.imgName;
		if(this.id != 'IA'){
			let nbcarte = this.main.length;
			let margin = nbcarte * 15;
			let newCarte = this.divJoueur.lastChild;
			newCarte.style.marginBottom = margin + 'px';
		}
	}
	initGame(paquet, mask) {
		for (let i = 0; i < 2; i++) {
			let carte = paquet.piocher();
			this.addCarte(carte, mask);
			//masquer 2ème carte
		}
		this.score.innerHTML = this.totalPoints;
	}
	stop(){
		buttonPioche.style.display = 'none';
		buttonStop.style.display = 'none';
	}
}