const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //Variável para escrever requisições de apis

const catBtn = document.getElementById('change-cat') //Você vai vincular essa variável com o id change-cat

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl; //Endereço das fotinhas dos gatinhos.
    }
    catch(e) {
        console.log(e.message)
    }
}

const loadImg = async () => { //Aqui, essa função vai carregar o await getCats
    const catImg = document.getElementById('Cat')
    catImg.src = await getCats();
}

catBtn.addEventListener('Click', loadImg);

loadImg();