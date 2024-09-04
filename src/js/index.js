const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.char');

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {

        deselectButton();
        deselectChar();

        button.classList.add("selected");
        characters[i].classList.add("selected");
        
    });
});

function deselectChar() {
    const selectedChar = document.querySelector(".char.selected");
    selectedChar.classList.remove("selected");
}

function deselectButton() {
    const selectedButton = document.querySelector(".button.selected");
    selectedButton.classList.remove("selected");
}
