<?php

class userManager extends bddManager {

	public function getUserByUsername($identifiant) {

		$db = $this->db;

	    $req = $db->prepare('SELECT * FROM users WHERE username = :username');
	    $req->execute(array(':username' => $identifiant));

	    $datas = $req->fetch(PDO::FETCH_ASSOC); 

	    return $datas;
	}

	public function newAccount($identifiant, $password, $email)
	{
		$db = $this->db;

		$req = $db->prepare("INSERT INTO users (id, username, password, email) VALUES (NULL, ?, ?, ?);");
		$req->execute(array($identifiant, $password, $email));
		return true;
	}

	public function isUsernameTaken($identifiant)
	{
		$db = $this->db;

		$req = $db->prepare("SELECT * FROM users WHERE username = :username");
		$req->execute(array(':username' => $identifiant));
		
		$datas = $req->fetch(PDO::FETCH_ASSOC); 

	    return $datas;
	}

	public function isEmailTaken($email)
	{
		$db = $this->db;

		$req = $db->prepare("SELECT * FROM users WHERE email = :email");
		$req->execute(array(':email' => $email));
		
		$datas = $req->fetch(PDO::FETCH_ASSOC); 

	    return $datas;
	}

	public function newAccountPostDataCheck($values)
	{

		$user = $this->isUsernameTaken($values['identifiant']);
		if($user){
			$message = "Nom d'utilisateur déjà existant";
		}

		$user = $this->isEmailTaken($values['email']);
		if($user){
			$message = "Un compte est déjà associé à cet e-mail";
		}

		if($values['password'] != $values['password2']) {
			$message = "Les mots de passes ne sont pas identiques";
		}

		if(isset($message)){
			return false;
		} else {
			return true;
		}
		echo $user;
	}


}