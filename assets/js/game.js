class Game {
	constructor(joueur1, ordinateur, paquet) {
		this.joueur1 = joueur1;
		this.ordinateur = ordinateur;
		this.currentPlayer = this.joueur1;
		this.paquet = paquet;
	}
	initGame(){ 
		this.joueur1.initGame(this.paquet, 0);
		this.ordinateur.initGame(this.paquet, 1);
	}
	pioche() {
		let carte = this.paquet.piocher();
		this.currentPlayer.addCarte(carte);
		this.currentPlayer.score.innerHTML = this.currentPlayer.totalPoints;
		if(this.joueur1.totalPoints >= 21) {
			this.finDePartie();
		}
		console.log(joueur1.main);
	}
	stop() {
			this.currentPlayer = this.ordinateur;
			textIA.style.fontWeight = 'bold';
			buttonPioche.style.display = 'none';
			buttonStop.style.display = 'none';
			hiddenCard.style.display = 'none';
			scoreIA.style.display = 'block';
			this.autoPlay();
		}

	autoPlay() {
		console.log('Ordinateur joue');

		let go = this.playOrNot();
		if(go == 1) {
			this.pioche();
			setTimeout(this.autoPlay.bind(this),  3000);
		} else {
			this.finDePartie();
		}

	}

	playOrNot() {
		if (this.currentPlayer.totalPoints < this.joueur1.totalPoints || this.currentPlayer.totalPoints == this.joueur1.totalPoints && this.currentPlayer.totalPoints < 16 ) {
			return 1;
		} else {
			return 0;
		}
	}

	finDePartie(){
		if(this.joueur1.totalPoints === 21) {
			this.playerWins();//score en param pour sauvegarder les scores.
			this.joueur1.score.innerHTML = this.joueur1.totalPoints + ' ' + 'Blackjack !';
		} else if(this.ordinateur.totalPoints === 21) {
			this.playerLoses();
			this.ordinateur.score.innerHTML = this.ordinateur.totalPoints + ' ' + 'Blackjack !';
		} else if(this.joueur1.totalPoints > 21) {
			this.playerLoses();
		} else if(this.ordinateur.totalPoints > 21) {
			this.playerWins();
		} else if(this.joueur1.totalPoints < this.ordinateur.totalPoints) {
			this.playerLoses();
		} else if(this.joueur1.totalPoints > this.ordinateur.totalPoints) {
			this.playerLoses();
		} else if(this.joueur1.totalPoints == this.ordinateur.totalPoints) {
			this.draw();
		}
	}

	playerLoses() {
		this.joueur1.score.innerHTML = this.joueur1.totalPoints + ' ' + 'Perdu';
		this.ordinateur.score.innerHTML = this.ordinateur.totalPoints + ' ' + 'Gagné';
		buttonPioche.style.display = 'none';
		buttonStop.style.display = 'none';
	}

	playerWins() {
		this.joueur1.score.innerHTML = this.joueur1.totalPoints + ' ' + 'Gagné';
		this.ordinateur.score.innerHTML = this.ordinateur.totalPoints + ' ' + 'Perdu';
		buttonPioche.style.display = 'none';
		buttonStop.style.display = 'none';
	}

	draw() {
		this.joueur1.score.innerHTML = this.joueur1.totalPoints + ' ' + 'Égalité';
		this.ordinateur.score.innerHTML = this.ordinateur.totalPoints + ' ' + 'Égalité';
		buttonPioche.style.display = 'none';
		buttonStop.style.display = 'none';
	}
}