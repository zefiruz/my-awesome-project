//получаем форму по id
const form = document.getElementById('ContactForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


//валидация в реальном времени
//на событие ввода input будет вызываться функция validEmail
emailInput.addEventListener('input', validateEmail);

//функция валидации email
function validateEmail(){
    //[A-Za-z0-9_\.]{3,10}@[a-z0-9_\.]{1,15}.[a-z]{2-3}
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (emailRegex.test(emailInput.value)){ //проверяем выражение с регулярным выражением
        hideError(emailInput);
        return true;
    }
    else{//не совпадают
        showError(emailInput, "email должен состоять ")
    }
}

function showError(input, message){
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error') || document.createElement('div');
    errorControl.className = 'error';
    errorControl.textContent = message;
    formControl.appendChild(errorControl);
    input.style.borderColor = 'red';
}

function hideError(input){
    const formControl = input.parentElement;
    const errorControl = formControl.querySelector('.error');
    if(errorControl){
        formControl.removeChild(errorControl);
    }
    input.style.borderColor = 'green';
}