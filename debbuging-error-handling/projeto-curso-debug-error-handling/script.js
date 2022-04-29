function validaArray(arr, num) {

    try {
        if(!arr && !num) {
            throw new ReferenceError('Envie os parâmetros');
        }
    
        if(arr != 'Object') {
            throw new TypeError('Objeto precisa ser do tipo object');
        }
    
        if(num != 'number') {
            throw new TypeError('Num precisa ser do tipo number');
        }
    
        if(arr.lenght != 'number') {
            throw new RangeError('Tamanho inválido');
        }
         return arr;
 }
 catch(e) {
    if(e instanceof ReferenceError) {
        console.log('Este erro é um ReferenceError')
        console.log(e.message)
    } else if(e instanceof TypeError) {
        console.log('Este erro é um TypeError')
        console.log(e.message)
    } else if(e instanceof RangeError) {
        console.log('Este erro é um RangeError')
        console.log(e.message)
    } else {
        console.log('Tipo de erro não esperado:' + e)
    }
}
} //Dentro do bloco try são executadas instruções e caso ocorra algum erro durante o processo, ele será tratado no bloco catch.

console.log(validaArray());