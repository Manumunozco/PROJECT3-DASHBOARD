// const boton = document.getElementById("boton")
// const botonDos = document.getElementById("botonDos")
// const input = document.getElementById("inputtext")
// const inputDos = document.getElementById("inputtextDos")
// const canvasUno = document.getElementById("graficoUno")
// const canvasDos = document.getElementById("graficoDos")


// const peticion = async (evento) => {
//     evento.preventDefault()
//     const url = "https://mindicador.cl/api/"
//     const datoInput = input.value
//     const respuestaApi = await fetch(url + datoInput)
//     const datosApi = await respuestaApi.json()
//     console.log(datosApi.serie)
//     crearGraficoUno(datosApi.serie)
// }

// const peticionDos = async (evento) => {
//     evento.preventDefault()
//     const url = "https://mindicador.cl/api/"
//     const datoInputDos = input.value
//     const respuestaApiDos = await fetch(url + datoInputDos)
//     const datosApiDos = await respuestaApiDos.json()
//     console.log(datosApiDos.serie)
//     crearGraficoDos(datosApiDos.serie)
// }

// boton.addEventListener("click", peticion)
// botonDos.addEventListener("click", peticionDos)

// let graficoUno;
// let graficoDos;

// const crearGraficoUno = (datos) => {
// if(graficoUno){
//     graficoUno.destroy()
// }

//     graficoUno = new Chart(canvasUno, {
//         type: "line",
//         data: {
// labels: datos.reverse().map((registro)=>registro.fecha),
// datasets: [{
//     label: "valor",
//     data: datos.map((registro)=>registro.valor)
// }
// ]
//         }
//     })
// }

// const crearGraficoDos = (datos) => {
//     if(graficoDos){
//         graficoDos.destroy()
//     }
    
//         graficoDos = new Chart(canvasDos, {
//             type: "line",
//             data: {
//     labels: datos.reverse().map((registro)=>registro.fecha),
//     datasets: [{
//         label: "valor",
//         data: datos.map((registro)=>registro.valor)
//     }
//     ]
//             }
//         })
//     }


//     const boton = document.getElementById("boton")
//     const botonDos = document.getElementById("botonDos")
//     const input = document.getElementById("inputtext")
//     const inputDos = document.getElementById("inputtextDos")
//     const canvas = document.getElementById("graficoUno")
//     const canvasDos = document.getElementById("graficoUno")
    
    
//     const peticion = async (evento) => {
//         evento.preventDefault()
//         const url = "https://mindicador.cl/api/"
//         const datoInput = input.value
//         const datoInputDos = inputDos.value
//         const respuestaApi = await fetch(url + datoInput)
//         const respuestaApiDos = await fetch(url + datoInputDos)
//         const datosApi = await respuestaApi.json()
//         const datosApiDos = await respuestaApiDos.json()
//         console.log(datosApi.serie)
//         console.log(datosApiDos.serie)
//         const datosMix = unirDatos(datosApi.serie, datosApiDos.serie)
//         crearGraficoUno(datosMix)
//     }
    
//     const peticionDos = async (evento) => {
//         evento.preventDefault()
//         const url = "https://mindicador.cl/api/"
//         const datoInputDos = input.value
//         const respuestaApiDos = await fetch(url + datoInputDos)
//         const datosApiDos = await respuestaApiDos.json()
//         console.log(datosApiDos.serie)
//         crearGraficoUno(datosApiDos.serie)
//     }
    
//     boton.addEventListener("click", peticion)
//     botonDos.addEventListener("click", peticionDos)
    
//     let graficoUno;
//     let graficoDos;
    
//     const unirDatos = (datosUno, datosDos) => {
//         const datosMix = []
//         datosUno.forEach((dato, index) => {
//             const datoUnido = {
//                 fecha: dato.fecha,
//                 valorUno: dato.valor,
//                 valorDos: datosDos[index].valor
//             }
//             datosMix.push(datoUnido)
//         })
//         return datosMix
//     }
    
//     const crearGraficoUno = (datos) => {
//     if(graficoUno){
//         graficoUno.destroy()
//     }
    
//         graficoUno = new Chart(canvasUno, {
//             type: "line",
//             data: {
//     labels: datos.reverse().map((registro)=>registro.fecha),
//     datasets: [{
//         label: "valor Uno",
//         data: datos.map((registro)=>registro.valorUno)
//     },
//     {
//         label: "valor dos",
//         data: datos.map((registro) => registro.valorDos)
//     }
//     ]
//             }
//         })
//     }
    
//     const crearGraficoDos = (datos) => {
//         if(graficoDos){
//             graficoDos.destroy()
//         }
        
//             graficoDos = new Chart(canvasDos, {
//                 type: "line",
//                 data: {
//         labels: datos.reverse().map((registro)=>registro.fecha),
//         datasets: [{
//             label: "valor",
//             data: datos.map((registro)=>registro.valor)
//         }
//         ]
//                 }
//             })
//         }
    
alert("hola mundo")
    const boton = document.getElementById("boton");
    const botonDos = document.getElementById("botonDos");
    const input = document.getElementById("inputtext");
    const inputDos = document.getElementById("inputtextDos");
    const canvasUno = document.getElementById("graficoUno");
    
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
            document.body.appendChild(botonDivisa);
        });
    }
    
    crearBotonesDivisas();

    const peticion = async (evento) => {
        evento.preventDefault();
        const url = "https://mindicador.cl/api/";
        const datoInput = input.value;
        const datoInputDos = inputDos.value;
        const respuestaApi = await fetch(url + datoInput);
        const respuestaApiDos = await fetch(url + datoInputDos);
        const datosApi = await respuestaApi.json();
        const datosApiDos = await respuestaApiDos.json();
        console.log(datosApi.serie);
        console.log(datosApiDos.serie);
        const datosUnidos = unirDatos(datosApi.serie, datosApiDos.serie);
        if (datosUnidos.length > 0) {
        crearGraficoUno(datosUnidos);

    } else {
        console.log("No se encontraron datos para las divisas seleccionadas")
    }
}
    boton.addEventListener("click", peticion);
    
    let graficoUno;
    
    const unirDatos = (datosUno, datosDos) => {
        const datosUnidos = [];
        if (datosUno && datosDos && datosUno.length === datosDos.lenght) {
        const minLength = datosUno.lenght;
        for (let i = 0; i < minLength; i++) {
            const datoUnido = {
                fecha: datosUno[i].fecha,
                valorUno: datosUno[i].valor,
                valorDos: datosDos[i].valor
            };
            datosUnidos.push(datoUnido);
        }
    }
        return datosUnidos;
    }
    
    const crearGraficoUno = (datos) => {
        if (graficoUno) {
            graficoUno.destroy();
        }
    
        graficoUno = new Chart(canvasUno, {
            type: "line",
            data: {
                labels: datos.reverse().map((registro) => registro.fecha),
                datasets: [{
                    label: "Valor Uno",
                    data: datos.map((registro) => registro.valorUno)
                }, {
                    label: "Valor Dos",
                    data: datos.map((registro) => registro.valorDos)
                }]
            }
        });
    }
    
