
//----------------------------------------------------------------------------------------
//PROYECTO CON DOM:

let librosDiv = document.getElementById("libros")
let verCatalogoBtn = document.getElementById("verCatalogo")
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
let guardarLibroBtn = document.getElementById("guardarLibroBtn")
let inputBuscador = document.querySelector("#buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
//FUNCTIONS PROYECTO DOM
//imprimiendo los objetos en el DOM
function verCatalogo(array){
    //antes que se vuelva a imprimir, resear el div
    librosDiv.innerHTML = ""

    for(let libro of array){
    //código para imprimir el array
        //CARD
        let nuevoLibroDiv = document.createElement("div")
        nuevoLibroDiv.className = "col-12 col-md-6 col-lg-4 my-3"
        nuevoLibroDiv.innerHTML = `
        <div id="${libro.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
            <div class="card-body">
                <h4 class="card-title">${libro.titulo}</h4>
                <p>Autor: ${libro.autor}</p>
                <p class="">Precio: ${libro.precio}</p>
                <button id="agregarBtn${libro.id}" class="btn btn-outline-success">Agregar al carrito</button>
            </div>
        </div> 
        `
        librosDiv.appendChild(nuevoLibroDiv)
        let agregarBtn = document.getElementById(`agregarBtn${libro.id}`)
        console.log(agregarBtn)
        agregarBtn.onclick = ()=>{
            
            agregarAlCarrito(libro)
        }
    }
}

let productosEnCarrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)
}

function agregarAlCarrito(libro){
    // console.log(libro)
    console.log(`El producto ${libro.titulo} de ${libro.autor} ha sido agregado al carrito y vale ${libro.precio}`)
    //sumarlo a productosEnCarrito
    productosEnCarrito.push(libro)
    //setearlo en storage
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    console.log(productosEnCarrito)
    //evaluar si ya existe o no el producto
}

function cargarLibro(array){
    let inputAutor = document.getElementById("autorInput")
    let inputTitulo = document.getElementById("tituloInput")
    let inputPrecio = document.getElementById("precioInput")
    
    //hacerlo con la function constructora
    const nuevoLibro = new Libro(array.length+1, inputAutor.value, inputTitulo.value,parseInt(inputPrecio.value), "libroNuevo.jpg")
    console.log(nuevoLibro)
 
    //pushearlo o sumarlo al array
    array.push(nuevoLibro)
    //guardar en storage:
    localStorage.setItem("estanteria", JSON.stringify(array))
    verCatalogo(array)
    let formAgregarLibro = document.getElementById("formAgregarLibro")
    formAgregarLibro.reset()
 }


function buscarInfo(buscado, array){
        //condición compuesta || &&
        //coincidencia total, ej:
        // libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
        // quiero una coincidencia parcial: método includes
    let busquedaArray = array.filter(
            (libro) => libro.autor.toLowerCase().includes(buscado.toLowerCase()) || libro.titulo.toLowerCase().includes(buscado.toLowerCase())
        )
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`
        verCatalogo(busquedaArray)
    }else{
        coincidencia.innerHTML = ""
        verCatalogo(busquedaArray)
    }
}

//functions ordenar:
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((param1, param2)=> param1.precio - param2.precio)
    verCatalogo(menorMayor)
}

function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    verCatalogo(mayorMenor)
    
}

function ordenarAlfabeticamenteTitulo(array){
        const ordenadoAlfabeticamente = [].concat(array)
        //ordenar algo que tiene un dato string
        //forma de la a-z ascendente
        ordenadoAlfabeticamente.sort((a, b) => {
            if (a.titulo > b.titulo) {
              return 1
            }
            if (a.titulo < b.titulo) {
              return -1
            }
            // a es igual b
            return 0
          })
          verCatalogo(ordenadoAlfabeticamente)
}


 //EVENTOS:
guardarLibroBtn.addEventListener("click", ()=>{
    cargarLibro(estanteria)
})
verCatalogoBtn.onclick = function(){
    verCatalogo(estanteria)
    
}

ocultarCatalogoBtn.addEventListener("dblclick", ()=>{
    librosDiv.innerHTML =""
})

//por cada evento, averiguar su funcionamiento, luego pasarle function con instrucciones a realizar
inputBuscador.addEventListener("input", ()=>{
    buscarInfo(inputBuscador.value, estanteria)
})
//select para ordenar
selectOrden.addEventListener("change", ()=>{
    // console.log(selectOrden.value)
    if(selectOrden.value == "1"){
        ordenarMayorMenor(estanteria)
    }else if(selectOrden.value =="2"){
        ordenarMenorMayor(estanteria)
    }else if(selectOrden.value == "3"){
        ordenarAlfabeticamenteTitulo(estanteria)
    }else{
        verCatalogo(estanteria)
    }
})