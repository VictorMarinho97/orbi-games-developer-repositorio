programa
{
	
	funcao inicio()
	{
		inteiro contador = 0
		cadeia cesta[][] = {{"Pera", "100"}, {"Jaca", "200"}, {"Maçã", "900"}, {"Uva", "89"}}

		/*escreva("Produto: ")
		escreva(cesta[1][0])
		escreva(" Qtd: ")
		escreva(cesta[1][1])*/

		

		faca{

			escreva("produto: " + cesta[contador][0] + "Qtd: " + cesta[contador][1] + "\n") //Aqui, colocamos o contador na linha e deixamos a coluna em 0 pois iremos contar com todas as linhas da coluna 0. Logo após, continuamos com o contador na linha só que a coluna em 1, pois iremos contar com todas as linhas da coluna 1. não é difícil de entender.
			contador++
			
	     }enquanto(contador<=3)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 650; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */