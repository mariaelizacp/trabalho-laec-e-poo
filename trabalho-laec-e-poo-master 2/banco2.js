class Bancodois{
	constructor(caixa)
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
	
}