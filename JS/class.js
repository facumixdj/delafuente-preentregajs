//class constructora
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
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const bebida1 = new Bebida(1,"12x 1lt","Cerveza Salta", 2400, "cerveza.jpg")

const bebida2 = new Bebida(2,"6x 1ltr","Fernet Branca", 4500, "fernet branca.jpg")

const bebida3 = new Bebida(3,"20 x1ltr", "Vino Toro", 2500, "vinotoro.jpg")

const bebida4 = new Bebida(4,"1ltr","Absolute Vodka", 6500, "VODKA.jpg")

const bebida5 = new Bebida(5,"11tr", "Habanas Club RON", 2100, "ron.jpg")

const bebida6 = new Bebida(6, "750cc", "Jhony Walker Red Labbel", 12400, "whisky.jpg")

//localStorage.clear()
/* //crear un array de objetos: 
let estanteria = []
//dos posibilidades que en storage exista algo o que no exista
//condicional que evalue si hay algo
if(localStorage.getItem("estanteria")){
    //si existe algo en el storage entra al if
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    //si no existe, entra al else
    console.log("Seteamos por primera vez, entra sólo en la primera vez")
    estanteria.push(libro1, libro2, libro3, libro4, libro5, libro6)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}
console.log(estanteria) */

let stock = []
//dos posibilidades que en storage exista algo o que no exista
//condicional que evalue si hay algo
if(localStorage.getItem("stock")){
    //si existe algo en el storage entra al if
    stock = JSON.parse(localStorage.getItem("stock"))
}else{
    //si no existe, entra al else
    console.log("Seteamos por primera vez, entra sólo en la primera vez")
    stock.push(bebida1, bebida2, bebida3, bebida4, bebida5, bebida6)
    localStorage.setItem("stock", JSON.stringify(stock))
}
console.log(stock)