class Informacoes{
	constructor(caixa)
	{
		this.caixa = caixa;
	}
	guardar()
	{
		this.caixa = document.getElementBy('caixa').value;
	}

}
