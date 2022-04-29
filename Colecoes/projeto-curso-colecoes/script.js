//Coleções chaveadas

/*Atividade para maps

function getAdmins(map) {
    let admins = []; //Array auxiliar
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map(); //Mapa de fato

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephanie', 'Admin');
usuarios.set('Jorge', 'Admin');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios)); //Parâmetro de fato. O usuário vai equivaler ao map.
*/

// Atividade 2 - Criar um nova array sem repetir os valores. 

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr)

    return[...mySet] //Spread - Criando um novo array
}

console.log(valoresUnicos(meuArray))