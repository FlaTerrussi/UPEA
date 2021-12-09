document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const error = document.getElementById("error");
const success = document.getElementById("success");

const errorName = document.querySelector("#errorName");
const errorLastname = document.querySelector("#errorLastname");
const errorTel = document.querySelector("#errorTel");
const errorEmail = document.querySelector("#errorEmail");


const validationForm = (e) => {
    switch (e.target.name) {
        case "name":
            if(expresiones.nombre.test(e.target.value)){
                nombre.classList.remove('input-error');
                errorName.classList.add('hidden');

            } else {
                nombre.classList.add('input-error');
                errorName.classList.remove('hidden');
                
            }
           
        break;
        case "lastname":
            if(expresiones.apellido.test(e.target.value)){
                lastName.classList.remove('input-error');
                errorLastname.classList.add('hidden');

            } else {
                lastName.classList.add('input-error');
                errorLastname.classList.remove('hidden');
                
            }
           
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                email.classList.remove('input-error');
                errorEmail.classList.add('hidden');

            } else {
                email.classList.add('input-error');
                errorEmail.classList.remove('hidden');   
            }
           
        break;
        case "tel":
            if(expresiones.telefono.test(e.target.value)){
                tel.classList.remove('input-error');
                errorTel.classList.add('hidden');

            } else {
                tel.classList.add('input-error');
                errorTel.classList.remove('hidden');   
            }
           
        break;
    }
}





nombre.addEventListener('keyup', validationForm);
nombre.addEventListener('blur', validationForm);
lastName.addEventListener('keyup', validationForm);
lastName.addEventListener('blur', validationForm);
email.addEventListener('keyup', validationForm);
email.addEventListener('blur', validationForm);
tel.addEventListener('keyup', validationForm);
tel.addEventListener('blur', validationForm);




});

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}