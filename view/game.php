	<div id="game-area">
		<form action="index.php?action=login" method="post" id="form-login">
			<input type="text" name="identifiant" id="identifiant" placeholder="Identifiant" required="required" class="inputlogin">
			<input type="password" name="password" id="password" placeholder="Mot de passe" required="required"class="inputlogin">
			<input type="submit" id="bouton-connexion" class="elementForm boutonEnvoyer"></button>
			<i class="fas fa-times" id="croix-login"></i>
		</form>
		<form action="index.php?action=newAccount" method="post" id="form-newAccount">
			<input type="text" name="identifiant" id="newIdentifiant" placeholder="Identifiant" required="required" class="inputNewAccount">
			<input type="password" name="password" id="newPassword" placeholder="Mot de passe" required="required" class="inputNewAccount">
			<input type="password" name="password2" id="newPassword2" placeholder="Mot de passe" required="required" class="inputNewAccount">
			<input type="email" name="email" id="newMail" placeholder="Email" required="required" class="inputNewAccount">
			<input type="submit" id="bouton-newAccount" class="elementForm boutonEnvoyer"></button>
			<i class="fas fa-times" id="croix-new-Account"></i>
		</form>
		<img src="assets/img/Gray_back.jpg" id='hiddenCard'/>
		<div id="box-button">
			<?php if (isset ($_SESSION['logged'])) :?>
				 Connecté en tant que :
				 <a href="http://localhost/js-bj/index.php?action=logOff" id="log-off" class="menu-buttons">Se déconnecter</a>
			<?php else: ?>
			<button id="login" class="menu-buttons">Se connecter</button>
			<button id="nouveau-compte" class="menu-buttons">Créer un compte</button>
			<?php endif; ?>
			<button id="nouvelle-partie" class="menu-buttons">Nouvelle Partie</button>
		</div>
		<div id="table">
			<div id="joueurs">
				<button id="pioche">Piocher</button>
				<button id="stop">Stop</button>
				<div id="joueur1">
					<span id="textJ1"></span> <br />
					<span id="mainJ1"></span><br />
					<span id="scoreJ1"></span>
		
				</div>
				<div id="center"></div>
				<div id="ordinateur">
					<span id="textIA">Ordinateur</span> <br />
					<span id="mainIA"></span><br />
					<span id="scoreIA"></span>
				</div>
			</div>
		</div>
	</div>