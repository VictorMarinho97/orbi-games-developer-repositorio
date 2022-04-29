function changeMode() { //Criamos essa função para colocar as outras em um compilado. Criamos funções diferentes para cada coisa, para uma função só não ficar muito grande e amontoada.
    changeClasses();
    changeText();
}

function changeClasses() { //função que permite o clique
    button.classList.toggle(darkModeClass); //classList - Função para chamar os estilos css para o js.
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const darkMode = 'Dark Mode'; //Funções de apoio para aparecer tais strings.
    const lightMode = 'Light Mode';

    if(button.classList.contains(darkModeClass)) { //Esse if verifica se o botão tiver a classe dark mode, ele vai indicar que o dark mode está ligado quando você acionar o evento de clique.
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        
        return;
    }

    button.innerHTML = darkMode; //Esse é o estado inicial do site.
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode' //função para substituir o nome dark-mode. Porém, a classe ainda será ativada.
const button = document.getElementById('mode-selector'); //Essas foram as funções que escrevemos no início. Os getelements precisam ser colocamos aqui para iniciarmos os ids e classes.
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //Esse índice é preciso para não chamarmos todos os nós das arrays.
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode); //Esse evento ativa a função changeMode, que ativa todas as outras. Esse event ativa o toggle.