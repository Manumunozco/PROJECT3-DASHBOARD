


const canvasUno = document.getElementById("graficoUno");

let graficoUno;

export const crearGraficoUno = (datosUno = [], datosDos = []) => {
    if (graficoUno) {
        graficoUno.destroy();
    }

    graficoUno = new Chart(canvasUno, {
        type: "line",
        data: {
            labels: datosUno.reverse().map((registro) => registro.fecha),
            labels: datosDos.reverse().map((registro) => registro.fecha),
            datasets: [{
                label: "Valor Uno",
                data: datosUno.map((registro) => registro.valor)
            }, {
                label: "Valor Dos",
                data: datosDos.map((registro) => registro.valor)
            }]
        }
    });
}


// module.exports = crearGraficoUno