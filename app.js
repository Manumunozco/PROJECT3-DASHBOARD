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


    const boton = document.getElementById("boton")
    const botonDos = document.getElementById("botonDos")
    const input = document.getElementById("inputtext")
    const inputDos = document.getElementById("inputtextDos")
    const canvasUno = document.getElementById("graficoUno")
    const canvasDos = document.getElementById("graficoUno")
    
    
    const peticion = async (evento) => {
        evento.preventDefault()
        const url = "https://mindicador.cl/api/"
        const datoInput = input.value
        const respuestaApi = await fetch(url + datoInput)
        const datosApi = await respuestaApi.json()
        console.log(datosApi.serie)
        crearGraficoUno(datosApi.serie)
    }
    
    const peticionDos = async (evento) => {
        evento.preventDefault()
        const url = "https://mindicador.cl/api/"
        const datoInputDos = input.value
        const respuestaApiDos = await fetch(url + datoInputDos)
        const datosApiDos = await respuestaApiDos.json()
        console.log(datosApiDos.serie)
        crearGraficoUno(datosApiDos.serie)
    }
    
    boton.addEventListener("click", peticion)
    botonDos.addEventListener("click", peticionDos)
    
    let graficoUno;
    let graficoDos;
    
    const crearGraficoUno = (datos) => {
    if(graficoUno){
        graficoUno.destroy()
    }
    
        graficoUno = new Chart(canvasUno, canvasDos,{
            type: "line",
            data: {
    labels: datos.reverse().map((registro)=>registro.fecha),
    datasets: [{
        label: "valor",
        data: datos.map((registro)=>registro.valor)
    }
    ]
            }
        })
    }
    
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
    
