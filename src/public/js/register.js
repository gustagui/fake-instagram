const inputName = document.querySelector('#name');
const inputNickname = document.querySelector('#nick');
const inputPassword = document.querySelector('#password');
const inputConfirmPassword = document.querySelector('#ConfirmPassword');


// exerc 1
inputName.onkeydown = (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57){
        event.preventDefault();
    }
};

inputNickname.onkeydown = (event) => {
    const blocks = [50, 52, 53, 32];
    if (blocks.includes(event.keyCode)){
        event.preventDefault();
    }
};

inputConfirmPassword.onkeyup = (event) => {
    const password = inputPassword.value;
    const targetPassword = inputConfirmPassword.value;

    if (password == targetPassword){
        inputPassword.style.borderColor = 'green';
        inputConfirmPassword.style.borderColor = 'green';
        return;
    }

    inputPassword.style.borderColor = 'red';
    inputConfirmPassword.style.borderColor = 'red';
};

