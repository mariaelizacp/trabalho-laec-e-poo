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
function entrar()
{
	var emailCadastro= document.getElementById('emailCadastro').value;
	var senhaCadastro= document.getElementById('senhaCadastro').value
	var email= document.getElementById('email').value
	var senha= document.getElementById('senha').value
	if(email == emailCadastro && senha == senhaCadastro)
	{
		document.querySelector('#primeira').className="hidden";
		document.querySelector('#login').className="hidden";
		document.querySelector('#cadastro').className="hidden";
		document.querySelector('#mapa').className="visivel";
		document.querySelector('#registro').className="hidden";
		document.querySelector('#feed').className="hidden";
	}
	else if(email == emailCadastro && senha == senhaCadastro)
	{
		alert("erro")
	}
}
function cadastrar() /* aqui é onde as informações do cadastro são colocadas nas inputs */
{	
	var nome = document.getElementById('nome').value
	var email = document.getElementById('emailCadastro').value
	var numero = +document.getElementById('numero').value
	var senha = document.getElementById('senhaCadastro').value
	var pessoa = new Cad(nome, email, numero, senha);
  	var bd = new Banco('cad');
  	bd.inserir(pessoa);
  	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="visivel";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="hidden";
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
    	texto.innerHTML += "<p>Cadastro Morador: "+vetor[i].caixa+"</p>";
  	}	
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
