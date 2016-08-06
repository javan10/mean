var express = require('express');

//var home = require('../app/routes/home');

var load = require('express-load');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	//home(app);

	/*
	express-load : 
		carregamento de nossos models,
		controllers e routes, diminuindo 
		drasticamente o uso da função require
	*/
	/*
	O parâmetro {cwd: ‘app’} foi necessário para mudar
	 diretório padrão, pois a função procura as pastas
	 no diretório raiz contatooh e precisamos que ela
	 considere a pasta contatooh/app
	*/

	load('models', {cwd:'app'}) 
		.then('controllers')
		.then('routes')
		.into(app);
	return app;
};
