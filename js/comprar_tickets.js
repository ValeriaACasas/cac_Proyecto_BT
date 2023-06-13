document.addEventListener("DOMContentLoaded", function () {
    const valorTicket = 200;

    let descuentoEstudiante = 80;
    let descuentoTrainee = 50;
    let descuentoJunior = 15;

    function mostrarErrores() {
        const nombreInput = document.getElementById("nombre");
        const apellidoInput = document.getElementById("apellido");
        const mailInput = document.getElementById("mail");
        const cantidadTicketsInput = document.getElementById("cantidadTickets");
        const categoriaSelect = document.getElementById("categoriaSelect");
        const errorNombre = document.getElementById("errorNombre");
        const errorApe = document.getElementById("errorApe");
        const errorMail = document.getElementById("errorMail");
        const errorCantidad = document.getElementById("errorCantidad");
        const errorCate = document.getElementById("errorCate");

        const validarEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        let hayErrores = false;

        if (nombreInput.value === "") {
            errorNombre.style.display = "block";
            hayErrores = true;
        } else {
            errorNombre.style.display = "none";
        }

        if (apellidoInput.value === "") {
            errorApe.style.display = "block";
            hayErrores = true;
        } else {
            errorApe.style.display = "none";
        }

        if ((mailInput.value === "") || !validarEmail(mailInput.value)) {
            errorMail.style.display = "block";
            hayErrores = true;
        } else {
            errorMail.style.display = "none";
        }

        if (cantidadTicketsInput.value === "") {
            errorCantidad.style.display = "block";
            hayErrores = true;
        } else {
            errorCantidad.style.display = "none";
        }

        if (categoriaSelect.value === "") {
            errorCate.style.display = "block";
            hayErrores = true;
        } else {
            errorCate.style.display = "none";
        }

        if (!hayErrores) {
            calcularTotal();
        }
    }


    const calcularTotal = () => {

        let cantidadTickets = document.getElementById("cantidadTickets");
        let categoria = document.getElementById("categoriaSelect");
        let totalPago = document.getElementById("totalPago");

        let totalTickets = cantidadTickets.value * valorTicket;

        switch (parseInt(categoria.value)) {
            case 1:
                totalTickets = totalTickets - (descuentoEstudiante / 100 * totalTickets);
                break;
            case 2:
                totalTickets = totalTickets - (descuentoTrainee / 100 * totalTickets);
                break;
            case 3:
                totalTickets = totalTickets - (descuentoJunior / 100 * totalTickets);
                break;
        }
        totalPago.innerText = totalTickets.toFixed(2);
    };

    const btnResumen = document.getElementById("btnResumen");
    if (btnResumen) {
        btnResumen.addEventListener('click', mostrarErrores);
    }

    const btnBorrar = document.getElementById("btnBorrar");
    if (btnBorrar) {
        btnBorrar.addEventListener('click', () => {
            document.getElementById("totalPago").innerText = "";
        });
    }
});

