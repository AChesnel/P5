class Carte {
    constructor(suite, nom, valeur) {
        this.suite = suite;
        this.nom = nom;
        this.valeur = valeur;

        this.suitText = this.getSuitText(suite);
        this.nameText = this.getNameText(nom);
        this.imgName = '<img src="assets/img/'+ nom + suite +'.jpg">';
    }

    getSuitText(suite) {
    	let suitText = '';
		switch (suite) {
			case 'C':
		    	suitText = 'Trèfle';
		    	break;
			case 'D':
		  		suitText = 'Carreau';
		  		break;
			case 'H':
		    	suitText = 'Coeur';
		    	break;
			case 'S':
		 		suitText = 'Pique';
		 		break;
		  default:
		    console.log('Erreur');
		}
		return suitText;
    }

    getNameText(name){
    	let nametext = '';
    	switch (name) {
    		case 'A':
    			nametext = "As";
    			break;
    		case 'J' :
    			nametext = "Valet";
    			break;
    		case 'Q' :
    			nametext = "Reine";
    			break;
    		case 'K' :
    			nametext = "Roi";
    			break;
    		default:
    			nametext = name;
    	}
    	return nametext;
    }
}