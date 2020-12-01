class Paquet {
    constructor() {
        this.cartes = [];    
        this.creationDuPaquet();
        this.melanger();
    }
                       
    creationDuPaquet() {
    	let suites = ['C', 'D', 'H', 'S'];
    	let noms = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    	let valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
      

   		for (let i = 0; i < suites.length; i++) {
       		for (let x = 0; x < noms.length; x++) {
            	this.cartes.push(new Carte(suites[i], noms[x], valeurs[x]));
        	}
   		}
	}

	melanger(){
		const { cartes } = this;
		let m = cartes.length, i;

   		while(m){
      		i = Math.floor(Math.random() * m--);

    		[cartes[m], cartes[i]] = [cartes[i], cartes[m]];
    	}

    return this;
  }

   piocher(){
    return this.cartes.pop();
  }
}
