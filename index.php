<?php 
include_once('config.php');

ClassAutoload::startConfig();

if(isset($_GET['action'])) {
	$request = $_GET['action'];
} else {
	$request = 'game';
}



$routeur = new Routeur($request);
$routeur->renderController();


