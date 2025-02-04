const input_name = document.getElementById('name');
const input_email = document.getElementById('email');
const input_dni = document.getElementById('dni');
const input_phone = document.getElementById('phone');
const input_nivel = document.getElementById('form_nivel');
const check_terminos = document.getElementById('form_terminos');
const name_error = document.querySelector('.name_error');
const email_error = document.querySelector('.email_error');
const dni_error = document.querySelector('.dni_error');
const phone_error = document.querySelector('.phone_error');
const nivel_error = document.querySelector('.nivel_error');
const check_error = document.querySelector('.check_error');
const form = document.getElementById('form');

/* form.addEventListener('submit', (event)=>{
    if (input_name.value === "") {
        input_name.classList.add('error');
        name_error.classList.remove('form_error_oculto');
        name_error.classList.add('active_error')
    } else if (input_email.value === "") {
        input_email.classList.add('error');
        email_error.classList.remove('form_error_oculto');
        email_error.classList.add('active_error')
    } else if (input_dni.value === "") {
        input_dni.classList.add('error');
        dni_error.classList.remove('form_error_oculto');
        dni_error.classList.add('active_error')
    } else if (input_phone.value === "") {
        input_phone.classList.add('error');
        phone_error.classList.remove('form_error_oculto');
        phone_error.classList.add('active_error')
    } else if (input_nivel.value === "seleccion") {
        input_nivel.classList.add('error', 'error_nivel');
        nivel_error.classList.remove('form_error_oculto');
        nivel_error.classList.add('active_error')
    } else if (check_terminos.checked === false) {
        check_terminos.classList.add('error', 'error_nivel');
        check_error.classList.remove('form_error_oculto');
        check_error.classList.add('active_error')
    }
}); */

input_name.addEventListener('keydown', (e)=>{
    if (e.key.match(/[0-9]/)) {
        e.preventDefault();
    }
});

input_name.addEventListener('input', ()=>{
    if (input_name.value === "") {
        input_name.classList.add('error');
        name_error.classList.remove('form_error_oculto');
        name_error.classList.add('active_error')
    } else {
        input_name.classList.remove('error');
        name_error.classList.add('form_error_oculto');
        name_error.classList.remove('active_error')
    }
})

input_email.addEventListener('keyup', function() {
    const correo = this.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(correo)) {
        input_email.classList.add('error');
        email_error.classList.remove('form_error_oculto');
        email_error.classList.add('active_error')

    } else {
        input_email.classList.remove('error');
        email_error.classList.add('form_error_oculto');
        email_error.classList.remove('active_error')
    }
});

input_dni.addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key) || this.value.length === 8) {
        e.preventDefault();
    }
});

input_dni.addEventListener('input', ()=>{
    if (input_dni.value.length < 8) {
        input_dni.classList.add('error');
        dni_error.classList.remove('form_error_oculto');
        dni_error.classList.add('active_error')
    } else {
        input_dni.classList.remove('error');
        dni_error.classList.add('form_error_oculto');
        dni_error.classList.remove('active_error')
    }
})

input_phone.addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key) || this.value.length === 9) {
        e.preventDefault();
    }
});

input_phone.addEventListener('input', ()=>{
    if (input_phone.value.length < 7) {
        input_phone.classList.add('error');
        phone_error.classList.remove('form_error_oculto');
        phone_error.classList.add('active_error')
    } else {
        input_phone.classList.remove('error');
        phone_error.classList.add('form_error_oculto');
        phone_error.classList.remove('active_error')
    }
})

input_nivel.addEventListener('input', function(e){
    const valor_nivel = this.value;
    if (valor_nivel === 'seleccion') {
        input_nivel.classList.add('error', 'error_nivel');
        nivel_error.classList.remove('form_error_oculto');
        nivel_error.classList.add('active_error')
    } else {
        input_nivel.classList.remove('error', 'error_nivel');
        nivel_error.classList.add('form_error_oculto');
        nivel_error.classList.remove('active_error')
    }
});

check_terminos.addEventListener('input', function(e){
    const valor_check = this.checked;
    if (valor_check === false) {
        check_terminos.classList.add('error', 'error_nivel');
        check_error.classList.remove('form_error_oculto');
        check_error.classList.add('active_error')
    } else {
        check_terminos.classList.remove('error', 'error_nivel');
        check_error.classList.add('form_error_oculto');
        check_error.classList.remove('active_error')
    }
});