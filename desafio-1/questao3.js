/*
O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

Conter 39 traços horizontais ( - ) na primeira linha;
Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
Repita o procedimento 2 quatro vezes;
Repita o procedimento 1.
No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)
*/

/*
Se você deseja exibir o resultado no console do navegador, vai precisar utilizar uma estrutura de repetição "FOR" 
para gerar cada linha, e dentro de cada linha usar um segundo "FOR" para definir a estrutura da linha. 
Além disso, você vai precisar usar "IFs" para determinar qual o caracter inicial ou final da linha.
*/

/*console.log('---------------------------------------');

console.log("|                                      |");

console.log("|                                      |");

console.log("|                                      |");

console.log("|                                      |");

console.log("|                                      |");

console.log('-----------------------------------------');
*/

//Resolvendo com for

const altura = 39;
const largura = 4; 

let horizontal = ''; //Variável reservada para os desenhos. //Aqui foi let porque iremos atualizar os valores delas em breve.
let vertical = '';

for(let i = 0; i < largura; i++) {
    horizontal += '-';
}

console.log(horizontal);

for(let i = 0; i < altura; i++) {
    vertical =+ '|';
    for(let j = 0; j < largura - 2; j++) { //Esse -2 é para dar os espaços necessários no desenho.
        vertical =+ ' '; 
    }
    vertical += '|'; //Colocando as barrinhas da direita
    console.log(vertical);
}

console.log(horizontal);