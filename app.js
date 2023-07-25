import {crearGraficoUno} from "./crearGrafico.js"

console.log(crearGraficoUno)

    const boton = document.getElementById("boton");
    const botonDos = document.getElementById("botonDos");
    const input = document.getElementById("inputtext");
    const inputDos = document.getElementById("inputtextDos");
    const conector = document.getElementById("conector-selectores");

    const obtenerDivisasDisponibles = async () => {
        const url = "https://mindicador.cl/api/";
        const respuestaApi = await fetch(url);
        const datosApi = await respuestaApi.json();
        return Object.keys(datosApi);
    }
    const crearBotonesDivisas = async () => {
    const divisasDisponibles = await obtenerDivisasDisponibles();
    const contenedorBotones = document.getElementById("contenedorBotones")

divisasDisponibles.forEach(divisa => {
    const botonDivisa = document.createElement("button");
    botonDivisa.innerText = divisa;
    botonDivisa.addEventListener("click", () => {
    input.value = divisa;
    });
    (botonDivisa);
    });
}

crearBotonesDivisas();

    const peticion = async (evento) => {
    evento.preventDefault();
    const url = "https://mindicador.cl/api/";
    const datoInput = input.value;
    const datoInputDos = inputDos.value;
        if (datoInput === datoInputDos){
            alert("Las divisas seleccionadas son iguales, por favor selecciona una divisa diferente.");
            return;
        }
    const respuestaApi = await fetch(url + datoInput);
    let datosApiDos;
        if (datoInputDos !== ""){
            const respuestaApiDos = await fetch(url + datoInputDos);
            datosApiDos = await respuestaApiDos.json();
        }
    const datosApi = await respuestaApi.json();
    console.log(datosApi.serie);
    crearGraficoUno (datosApi?.serie, datosApiDos?.serie)
    }

boton.addEventListener("click", peticion);