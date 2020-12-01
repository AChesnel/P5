<?php

class Game {
	
	public function showGame()
	{
		$myView = new View('game');
		$myView->render();

	}

	public function login()
	{
		if ($_POST['identifiant'] && $_POST['password']) {

			$identifiant = $_POST['identifiant'];
			$password    =	$_POST['password'];

			$manager = new UserManager();
			

			if($user = $manager->getUserByUsername($identifiant)) {
	 
				if (password_verify($password, $user['password'])) {
					$_SESSION['logged'] = true;
					$_SESSION['username'] = $user['username'];
					header('location:http://localhost/js-bj/index.php'); 
				} else {
					echo "error1";
				}
			} else {
					echo "error2";

			}
		}
	}

	public function logOff() 
	{
		session_unset();
		header("location: index.php");
	}

	public function newAccount()
	{
		$manager = new UserManager();

		$isPostValid = $manager->newAccountPostDataCheck($_POST);

		if($isPostValid == 1){
			$identifiant = ($_POST['identifiant']);
			$password    = password_hash($_POST['password'], PASSWORD_BCRYPT);
			$email       = ($_POST['email']);

			$compte = $manager->newAccount($identifiant, $password, $email);
			header('location:http://localhost/js-bj/index.php');
		} else {
			header('location:http://localhost/js-bj/index.php'); 
		}
	}
}