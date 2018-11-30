class Banco{
	constructor(nome)
	{
		this.nome_banco = nome;
		this.dados = JSON.parse(localStorage.getItem(this.nome_banco)) || [];
	}
	tamanho()//Retorna a quantidade de keys do banco
	{
		return localStorage.length;
	}
	inserir(obj)//Método responsável por inserir um elemento no banco
	{
		this.dados.push(obj);
		localStorage.setItem(this.nome_banco,  JSON.stringify(this.dados));
	}
	pegar_posicao(nome, atrib)
	{
		this.dados = JSON.parse(localStorage.getItem(this.nome_banco));
		for(var i =0; i< this.dados.length;i++)
		{
			if(this.dados[i][atrib].localeCompare(nome) == 0)
			{
				return i;
			}
		}
	}
	atualizar(posicao, obj)
	{
		this.dados[posicao] = obj;
		localStorage.setItem(this.nome_banco,  JSON.stringify(this.dados));
	}
	login(email, senha)
	{
		var achei = false
		var i = 0
		for(i; i<this.dados.length; i++)
		{
			if(this.dados[i].emailCadastro == email.value && this.dados[i].senhaCadastro == senha.value)
			{
				achei = true;
				document.querySelector('#primeira').className="hidden";
				document.querySelector('#login').className="hidden";
				document.querySelector('#cadastro').className="hidden";
				document.querySelector('#mapa').className="visivel";
				document.querySelector('#registro').className="hidden";
				document.querySelector('#feed').className="hidden";
			}
		}
		if(achei)
		{
			logica = true;
			document.querySelector('#menu-icon').className = "visivel";
			document.querySelector('#login').className = "hidden";
			document.querySelector('#mapa').className = "visivel";
		}
		else
		{
			document.getElementById("spamP3").innerHTML = "Usuario não cadastrado!";
			setTimeout(function(){
			document.getElementById("spamP3").innerHTML = " "}, 1000);
		}
	}
}













