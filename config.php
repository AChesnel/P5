<?php

ini_set('display_errors', 'on');
error_reporting(E_ALL);

class ClassAutoload
{
	public static function startConfig()
	{

		session_start();

		spl_autoload_register(array(__CLASS__, 'autoload'));

		$root = $_SERVER['DOCUMENT_ROOT'];
		$host = $_SERVER['HTTP_HOST'];

		define('HOST', 'http://'.$host.'/JS-bj/');
		define('ROOT', $root.'/JS-bj/');

		define('CONTROLLER', ROOT.'controller/'); 
		define('MODEL', ROOT.'model/');
		define('VIEW', ROOT.'view/');
		define('CLASSES', ROOT.'classes/');

		define('JS', HOST.'assets/js');
		define('IMAGES', HOST.'assets/img');
		define('CSS', HOST.'assets/css');

		define('DB_HOST', 'localhost');
		define('DB_NAME', 'bj');
		define('DB_USER', 'root');
		define('DB_PASSWORD', '');
	}

	public static function autoload($class)
	{
		if(file_exists(CONTROLLER.$class.'.php')) {
			include_once(CONTROLLER.$class.'.php');
		} else if(file_exists(MODEL.$class.'.php')) {
			include_once(MODEL.$class.'.php');
		} else if(file_exists(CLASSES.$class.'.php')) {
			include_once(CLASSES.$class.'.php');
		}
	}
}