class Bebida {
    constructor(id, cantidad, nombre, precio, imagen){
        this.id = id,
        this.cantidad = cantidad,
        this.nombre = nombre,
        this.precio = precio, 
        this.imagen = imagen

    }
    //métodos
    mostrarInfoLibro(){
        console.log(`El titulo es ${this.nombre}, el autor es ${this.cantidad} y su precio es ${this.precio}`)
    }
}

//creo mis objetos iniciales

const bebida1 = new Bebida(1,"12x 1lt","Cerveza Salta", 2400, "cerveza.jpg")

const bebida2 = new Bebida(2,"6x 1ltr","Fernet Branca", 4500, "fernet branca.jpg")

const bebida3 = new Bebida(3,"20 x1ltr", "Vino Toro", 2500, "vinotoro.jpg")

const bebida4 = new Bebida(4,"1ltr","Absolute Vodka", 6500, "VODKA.jpg")

const bebida5 = new Bebida(5,"11tr", "Habanas Club RON", 2100, "ron.jpg")

const bebida6 = new Bebida(6, "750cc", "Jhony Walker Red Labbel", 12400, "whisky.jpg")

let stock = []
//creo el array a guardar en localStorage
//condicional que evalue si hay algo 
if(localStorage.getItem("stock")){
    //si existe algo en el storage entra al if
    stock = JSON.parse(localStorage.getItem("stock"))
}else{
    //se crea si es la primera vez
    console.log("creando mi primer stock")
    stock.push(bebida1, bebida2, bebida3, bebida4, bebida5, bebida6)
    localStorage.setItem("stock", JSON.stringify(stock))
}
//muestro el stock disponible en consola para control
console.log(stock)