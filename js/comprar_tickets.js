const valorTicket = 200;

let descuentoEstudiante = 80;

let descuentoTrainee = 50;

let descuentoJunior = 15;

let nombre = document.getElementById("nombre");

let apellido = document.getElementById("apellido");



let mail = document.getElementById("mail");

let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");



// Función para quitar el estilo de error a los elementos del form

const quitarClaseError = () => {


    let x = document.querySelectorAll(".form-control, .form-select");



    for (let i = 0; i < x.length; i++) {

        x[i].classList.remove('is-invalid');

    }

    // Cálculo total a pagar

    const totalAPagar = () => {

        //function total_a_pagar() {

        quitarClaseError();

        if (nombre.value === "") {
            alert("Porfavor escriba su nombre");
        }
    }
}