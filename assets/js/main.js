let buttonPioche = document.getElementById('pioche');
let buttonStop = document.getElementById('stop');
let buttonNouvellePartie = document.getElementById('nouvelle-partie');
let boxbutton = document.getElementById('box-button');
let divJoueur1 = document.getElementById('joueur1');
let divOrdinateur = document.getElementById('ordinateur');
let textJ1 = document.getElementById('textJ1');
let textIA = document.getElementById('textIA');
let hiddenCard = document.getElementById('hiddenCard');
let scoreIA = document.getElementById('scoreIA');
let login = document.getElementById('login');
let formlogin = document.getElementById('form-login');
let croixlogin = document.getElementById('croix-login');
let identifiant = document.getElementById('identifiant');
let password = document.getElementById('password');
let newAccount = document.getElementById('nouveau-compte');
let formNewAccount = document.getElementById('form-newAccount');
let croixNewAccount = document.getElementById('croix-new-Account');
let identifiantNewAccount = document.getElementById('newIdentifiant');
let passwordNewAccount = document.getElementById('newPassword');
let passwordNewAccount2 = document.getElementById('newPassword2');
let mailNewAccount = document.getElementById('newMail');
let table = document.getElementById('table');
let paquet;

let joueur1 = new Joueur('Joe', 'J1');

buttonNouvellePartie.addEventListener('click', function() {
	buttonPioche.style.display = 'block';
	buttonStop.style.display = 'block';
	boxbutton.style.display = "none";
	divJoueur1.style.display = 'block';
	divOrdinateur.style.display = 'block';
	hiddenCard.style.display = 'block';
	table.style.display = 'block';

	
	ordinateur = new Joueur('Ordinateur', 'IA');
	paquet = new Paquet();
	game = new Game(joueur1, ordinateur, paquet);
	game.initGame();	
});

buttonPioche.addEventListener('click', function() {
	game.pioche();
});

buttonStop.addEventListener('click', function() {
	game.stop();
});

login.addEventListener('click', function() {
	boxbutton.style.display = "none";
	formlogin.style.visibility = "visible";
});

croixlogin.addEventListener('click', function() {
	formlogin.style.visibility = "hidden";
	boxbutton.style.display = "inline-flex";
	identifiant.value = '';
	password.value = '';
});

newAccount.addEventListener('click', function() {
	boxbutton.style.display = "none";
	formNewAccount.style.visibility = "visible";
});

croixNewAccount.addEventListener('click', function() {
	formNewAccount.style.visibility = "hidden";
	boxbutton.style.display = "inline-flex";
	identifiantNewAccount.value = '';
	passwordNewAccount.value = '';
	passwordNewAccount2.value = '';
	mailNewAccount.value = '';
});