/*
Desafio
Em 2015 um novo record foi alcançado na competição de Coxinhas de Bueno de Andrada, onde Mônica mandou pra dentro 43 coxinhas em apenas 10 minutos, passando se antecessor que conseguiu comer, no mesmo tempo, 38 coxinhas em 2014.

O restaurante especializado em coxinhas do pequeno distrito de Bueno de Andrada, interior de São Paulo, organiza essa competição todos os anos, mas nunca conseguiram entrar para o livro dos recordes, o Guinness Book. Para isso, o restaurante precisa preencher informações sobre a competição, como o número de coxinhas consumidas pelos competidores durante o evento. 

Porém, como jó foi informado, a especialidade deles é coxinha, não matemática, então será que você pode ajudá-los? Com base no número total de coxinhas consumidas e o número de participantes na competição, o dono do restaurante precisa que você desenvolva um programa para saber a quantidade média de coxinha que os participantes da competição conseguem devorar.

Ah, lembre que, em troca da sua ajuda, você poderá comer quantas coxinhas conseguir.

Entrada
A entrada consiste de uma única linha que contém dois inteiros H e P (1 ≤ H, P ≤ 1000) indicando respectivamente o número total de coxinhas consumidas e o número total de participantes na competição.

Saída
Seu programa deve produzir uma única linha com um número racional representando o número médio de coxinhas consumidas pelos participantes. O resultado deve ser escrito como um número racional com exatamente dois dígitos após o ponto decimal, arredondado se necessário.

 
*/



//TODO: Complete o código com uma solução possível

//Essa é uma técnica para escrever mais de uma sentença em uma linha só e dividir elas depois em variáveis distintas. Nós usamos o split para anunciar que faremos essa partilha e depois colcoamos dentro dele o que utilizaremos para dividir os valores que, nesse caso, é o espaço.

let line = gets().split(" ");

let H = parseFloat(line.shift()); //Depois, criamos as cariáveis para cada valor que nesse caso são dois e convertemos, se preciso.
let P = parseFloat(line.shift());

let media = H / P;

print("A média de coxinhas será de: " + media.toFixed(2)); //Essa função permite que você limite o número de casas decimais depois da principal e até arredonde o resultado, dependendo.
