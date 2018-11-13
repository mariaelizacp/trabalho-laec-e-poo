class Cad{
	constructor(nome, email, numero, senha)
	{
		this.nome = nome;
		this.email = email;
		this.numero = numero;
		this.senha = senha;
	}
	guardar()
	{
		this.nome = document.getElementBy('nome').value;
		this.email = document.getElementBy('email').value;
		this.numero = document.getElementBy('numero').value;
		this.senha = document.getElementBy('senha').value;
	}

}
