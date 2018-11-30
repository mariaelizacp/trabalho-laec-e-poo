class Cad{
	constructor(nome, emailCadastro, numero, senhaCadastro, email, senha)
	{
		this.nome = nome;
		this.emailCadastro = emailCadastro;
		this.numero = numero;
		this.senhaCadastro = senhaCadastro;
		this.email = email;
		this.senha = senha;
	}
	guardar()
	{
		this.nome = document.getElementBy('nome').value;
		this.emailCadastro = document.getElementBy('emailCadastro').value;
		this.numero = document.getElementBy('numero').value;
		this.senhaCadastro = document.getElementBy('senhaCadastro').value;
		this.email = document.getElementBy('email').value;
		this.senha = document.getElementBy('senha').value;
	}

}
