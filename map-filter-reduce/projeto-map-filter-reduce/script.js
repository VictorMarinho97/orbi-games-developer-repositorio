/*Fazendo função map com o argumento this. Lembre-se que o map cria outra função mas não deleta a original.

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg) { 
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg); //callback
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca)); // 1 * 2 e 2 * 2 //Lembre-se que o map vai fazer a função em cada array.

console.log('this -> laranja', mapComThis(nums, laranja)); // 1 * 3 e 2 * 3*/

/*Map sem this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    });
}

const nums2 = [2, 4, 6, 8, 10]

console.log(mapSemThis(nums2)); //Se não desse o primeiro return, aqui ficaria undefined.

console.log(nums2); //Veja que o array original se manteve. Ele criou outro com o nums e o map.*/

/*Filter

function filtraPares(arr) { //Também temos aqui uma array como parâmetro
    return arr.filter(callback) //Função de baixo 
}

function callback(item) { //Você também poderia colocar essa função dentro da de cima.
    return item % 2 === 0 //Verificar os números pares.
}

const meuArray = [1, 23, 55, 67, 30, 2, 4]

console.log(filtraPares(meuArray));*/

/*Reduce 

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) { //Valores mais conhecidos do reduce - previous e current.
        console.log({prev}); //Previous também é chamado de acumulador.
        console.log({current});
        return prev + current
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));*/

//Reduce - Exercício 2 - Verificar o saldo disponível depois de pagar todos os produtps de uma lista.

const lista = [ //Você pode declarar listas assim. Com chaves dentro do colchete principal e colocando 'variáveis' iguais para cada tipo de produto.
    {
        name: 'Sabão em pó',
        preco: 15
    },

    {
        name: 'Toalha',
        preco: 30 
    },

    {
        name: 'Cereal',
        preco: 12
    }
];

const saldoDisponível = 100

function calculaSaldo(saldoDisponível, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('Rodada', index + 1)
        console.log({prev}) //O prev sempre vai se atualizando de acordo com os cálculos.
        console.log({current})
        return prev - current.preco; //Callback function. O anterior menos o atual, partindo do saldo disponível. Não se esqueça de apontar o valor que vai ser diminuído no current.
    }, saldoDisponível); //Você também pode iniciar um reduce com um valor inicial, que nesse caso é o saldo disponível.
}

console.log(calculaSaldo(saldoDisponível, lista))