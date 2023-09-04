const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    console.log(Inome.value)
});