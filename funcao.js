var logica = false;
function home ()
{
	document.querySelector('#primeira').className="visivel";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="hidden";
}
function botaoum ()
{
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="visivel";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="hidden";
}
function cadastro()
{
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="visivel";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="hidden";
}
function registrar()
{
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="visivel";
	document.querySelector('#feed').className="hidden";

}
function feed()
{
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="visivel";
}
function mapa()
{
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="visivel";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="hidden";
}
function cadastrar() /* aqui é onde as informações do cadastro são colocadas nas inputs */
{	
	var nome = document.getElementById('nome').value
	var emailCadastro = document.getElementById('emailCadastro').value
	var numero = +document.getElementById('numero').value
	var senhaCadastro = document.getElementById('senhaCadastro').value
	if(nome != " " && emailCadastro != " " && numero != " " && senhaCadastro != " ") 
	{
		var pessoa = new Cad(nome, emailCadastro, numero, senhaCadastro, senha, email);
  		var bd = new Banco('cad');
  		bd.inserir(pessoa);
  		document.querySelector('#primeira').className="hidden";
		document.querySelector('#login').className="visivel";
		document.querySelector('#cadastro').className="hidden";
		document.querySelector('#mapa').className="hidden";
		document.querySelector('#registro').className="hidden";
		document.querySelector('#feed').className="hidden";
  	}
  	else
  	{
  		document.getElementById("spamP").innerHTML = "Preencha todos os campos !";
		setTimeout(function(){
		document.getElementById("spamP").innerHTML = " "}, 1000);
  	}
 }
function entrar()
{
	var bd = new Banco('cad');
	bd.login(email, senha);
}
 function registro(){
 	var caixa = document.getElementById('caixa').value;
 	var info = new Informacoes(caixa);	
  	var bada = new Bancodois('informacoes');
  	bada.inserir(info);
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="visivel";
  	var vetor = bada.listar()
  	var texto;
  	texto = document.getElementById('desc');
  	texto.innerHTML ="";
  	for(var i=0;i<vetor.length;i++)
  	{
    	texto.innerHTML += "<p>CADASTRO MORADOR: "+vetor[i].caixa+"</p>";
  	}	
} 
function sair()
{
	logica = false;
	document.querySelector('#primeira').className="visivel";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="hidden";
}
function abrir(){
  menu.className = "active";  
  menuBar.style.marginLeft = "20vw";
  menuBar.style.width = "60vw";
}

function fechar(){
  menu.className = "hidden";
  menuBar.style.marginLeft = "0";
  menuBar.style.width = "100vw";
}  
    
var menu = document.querySelector('nav'); 
var menuBar = document.querySelector('#menu-bar'); 
var btnAbrirMenu = document.querySelector('#btn');
var btnFecharMenu = document.querySelector('#close');

btnAbrirMenu.addEventListener('click', function(evt){
  menu.className === 'hidden'? abrir() : fechar(); 
});

btnFecharMenu.addEventListener('click', fechar); 
