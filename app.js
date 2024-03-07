// Variables para cada elemento del formulario
let nombreCompleto = document.getElementById("NombreCompleto");
let numeroDeIdentificacion = document.getElementById("NumerodeIdentificacion");
let fechaDeIngreso = document.getElementById("FechaDeIngreso");
let puesto = document.getElementById("Puesto");
let departamento = document.getElementById("Departamento");
let AntecedentesLaborales = document.getElementById("AntecedentesLaborales");
let referenciasLaborales = document.getElementById("ReferenciasLaborales");
let fechaDeNacimiento = document.getElementById("FechaDeNacimiento");
let estadoCivil = document.getElementById("EstadoCivil");
let direccion = document.getElementById("Direccion");
let telefono = document.getElementById("TelefonoDeContacto");
let correo = document.getElementById("CorreoElectronico");
let copiaCedula = document.getElementById("CopiaCedula");
let certificadosEstudio = document.getElementById("CopiaCertificadoEstudios");
let certificadosCapacitacion = document.getElementById("CopiaCertificadoCapacitacion");
let sacionesReconocimientos = document.getElementById("SancionesOReconocimientos");
let detallesBeneficios = document.getElementById("Detalles");
let firma = document.getElementById("firma");

// Función para guardar los datos del formulario en el almacenamiento local
function guardar() {
    // Obtener todos los elementos de entrada del formulario
    const inputs = document.querySelectorAll('input, select, textarea');

    // Iterar sobre cada elemento y guardar su valor en localStorage
    inputs.forEach(input => {
        localStorage.setItem(input.id, input.value);
    });

    // Notificar al usuario que los datos han sido guardados
    alert("Los datos han sido guardados en el almacenamiento local");
    limpiarCampo();
}

// Función para recuperar los datos del almacenamiento local y rellenar el formulario
function recuperar() {
    if (!!localStorage.getItem("NombreCompleto")) {
        nombreCompleto.value = localStorage.getItem("NombreCompleto");
        numeroDeIdentificacion.value = localStorage.getItem("NumerodeIdentificacion");
        fechaDeIngreso.value = localStorage.getItem("FechaDeIngreso");
        puesto.value = localStorage.getItem("Puesto");
        departamento.value = localStorage.getItem("Departamento");
        AntecedentesLaborales.value = localStorage.getItem("AntecedentesLaborales");
        referenciasLaborales.value = localStorage.getItem("ReferenciasLaborales");
        fechaDeNacimiento.value = localStorage.getItem("FechaDeNacimiento");
        estadoCivil.value = localStorage.getItem("EstadoCivil");
        direccion.value = localStorage.getItem("Direccion");
        telefono.value = localStorage.getItem("TelefonoDeContacto");
        correo.value = localStorage.getItem("CorreoElectronico");
        copiaCedula.value = localStorage.getItem("CopiaCedula");
        certificadosEstudio.value = localStorage.getItem("CopiaCertificadoEstudios");
        certificadosCapacitacion.value = localStorage.getItem("CopiaCertificadoCapacitacion");
        sacionesReconocimientos.value = localStorage.getItem("SancionesOReconocimientos");
        detallesBeneficios.value = localStorage.getItem("Detalles");
        firma.value = localStorage.getItem("firma");
    } else {
        alert("No hay datos almacenados");
    }
}

// Función para limpiar todos los campos del formulario y el almacenamiento local
function limpiar() {
    alert("Se han limpiado los campos");
    localStorage.clear();
    limpiarCampo();
}

// Función para limpiar todos los campos del formulario
function limpiarCampo() {
    nombreCompleto.value = "";
    numeroDeIdentificacion.value = "";
    fechaDeIngreso.value = "";
    puesto.value = "";
    departamento.value = "";
    AntecedentesLaborales.value = "";
    referenciasLaborales.value = "";
    fechaDeNacimiento.value = "";
    estadoCivil.value = "";
    direccion.value = "";
    telefono.value = "";
    correo.value = "";
    copiaCedula.value = "";
    certificadosEstudio.value = "";
    certificadosCapacitacion.value = "";
    sacionesReconocimientos.value = "";
    detallesBeneficios.value = "";
    firma.value = "";
}


