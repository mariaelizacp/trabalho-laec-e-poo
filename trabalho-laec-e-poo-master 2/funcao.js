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
function entrar()
{
	document.querySelector('#primeira').className="hidden";
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="hidden";
	document.querySelector('#registro').className="hidden";
	document.querySelector('#feed').className="visivel";
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
	document.querySelector('#login').className="hidden";
	document.querySelector('#cadastro').className="hidden";
	document.querySelector('#mapa').className="visivel";
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
 }