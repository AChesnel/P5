<?php

class Routeur
{

	private $request;

	private $routes = [
						 'game' => ['controller' => 'Game', 'method' => 'showGame'], 
						 'login' => ['controller' => 'Game', 'method' => 'login'],
						 'logOff' => ['controller' => 'Game', 'method' => 'logOff'],
						 'newAccount' => ['controller' => 'Game', 'method' => 'newAccount'],
						 
					];

	public function __construct($request)
	{
		$this->request = $request;
	}

	public function renderController()
	{

		$request = $this->request;

		if(key_exists($request, $this->routes))
		{
			$route = $this->routes[$request];
			$controller = $route['controller'];
			$method = $route['method'];
			$ctrl = new $controller();
			$ctrl->$method();
		} else {
			echo '404';
		}

	}
}