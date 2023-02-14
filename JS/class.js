//class constructora
class Libro {
    constructor(id, autor, titulo, precio, imagen){
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio, 
        this.imagen = imagen

    }
    //métodos
    mostrarInfoLibro(){
        console.log(`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1,"12x 1lt","Cerveza Salta", 2400, "cerveza.jpg")

const libro2 = new Libro(2,"6x 1ltr","Fernet Branca", 4500, "fernet branca.jpg")

const libro3 = new Libro(3,"20 x1ltr", "Vino Toro", 2500, "vinotoro.jpg")

const libro4 = new Libro(4,"1ltr","Absolute Vodka", 6500, "VODKA.jpg")

const libro5 = new Libro(5,"11tr", "Habanas Club RON", 2100, "ron.jpg")

const libro6 = new Libro(6, "750cc", "Jhony Walker Red Labbel", 12400, "whisky.jpg")

localStorage.clear()
//crear un array de objetos: 
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
console.log(estanteria)