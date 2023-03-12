function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(dark);
    h1.classList.toggle(dark);
    body.classList.toggle(dark);
    footer.classList.toggle(dark);
}

function changeText() {
    const ligthMode = 'Ligth Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(dark)) {
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    
    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + ' ON'; 
}

const dark = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);