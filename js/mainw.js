// configuracion productos y carrito de compras de pagina Women

let stockProductosWomen = [
    {id: 1, nombre: "pans verde", tipo: "pans", cantidad: 1, desc: "3 franjas verde", precio: 1200, talla: "L", img:'/img/mujeres/3franjasverde.png'},
    {id: 2, nombre: "chamarra beckenbauer", tipo: "chamarra", cantidad: 1, desc: "chamarra beckenbauer", precio: 1100, talla: "M", img:'/img/mujeres/chamarrabeckenbauer.png'},
    {id: 3, nombre: "Leggings nike", tipo: "Leggings", cantidad: 1, desc: "Leggings", precio: 1200, talla: "L", img:'/img/mujeres/Leggings.png'},
    {id: 4, nombre: "Leggings de running", tipo: "Leggings", cantidad: 1, desc: "Leggings de running", precio: 800, talla: "M", img:'/img/mujeres/Leggingsderunning.png'},
    {id: 5, nombre: "Leggings de tiro medio", tipo: "Leggings de tiro", cantidad: 1, desc: "Leggings de tiro", precio: 1000, talla: "L", img:'/img/mujeres/Leggingsdetiromedio.png'},
    {id: 6, nombre: "mallas thebe adidas", tipo: "mallas thebe", cantidad: 1, desc: "mallas thebe adidas", precio: 900, talla: "M", img:'/img/mujeres/mallasthebeadidas.png'},
    {id: 7, nombre: "pans con sudadera adidas wts", tipo: "pans", cantidad: 1, desc: "pans con sudadera adidas wts", precio: 1200, talla: "L", img:'/img/mujeres/pansconsudaderaadidaswts.png'},
    {id: 8, nombre: "pants puma inland negro", tipo: "pants", cantidad: 1, desc: "pants puma inland negro", precio: 1500, talla: "M", img:'/img/mujeres/pantspumainlandnegro.png'},
    {id: 9, nombre: "playera adi color blanca", tipo: "playera", cantidad: 1, desc: "playera adi color blanca", precio: 700, talla: "L", img:'/img/mujeres/playeraadicolorblanca.png'},
    {id: 10, nombre: "shorts negros nike", tipo: "shorts", cantidad: 1, desc: "shorts negros", precio: 1400, talla: "M", img:'/img/mujeres/shorts.png'},
    {id: 11, nombre: "sudadera con gorro puma negra", tipo: "sudadera", cantidad: 1, desc: "sudadera con gorro", precio: 1200, talla: "L", img:'/img/mujeres/sudaderacongorropumanegra.png'},
    {id: 12, nombre: "sudadera con gorro puma rosa", tipo: "sudadera", cantidad: 1, desc: "sudadera con gorro puma rosa", precio: 1100, talla: "M", img:'/img/mujeres/sudaderacongorropumarosa.png'},
    {id: 13, nombre: "sudadera con gorro puma amarilla", tipo: "sudadera con gorro", cantidad: 1, desc: "sudadera con gorro puma", precio: 1350, talla: "L", img:'/img/mujeres/sudaderacongorropuma.png'},
    {id: 14, nombre: "pans de entrenamiento", tipo: "pans", cantidad: 1, desc: "pans de entrenamiento", precio: 1800, talla: "M", img:'/img/mujeres/pansdeentrenamiento.png'},
    {id: 15, nombre: "pans puma inland", tipo: "pans", cantidad: 1, desc: "pans puma inland", precio: 1150, talla: "L", img:'/img/mujeres/pantspumainland.png'},
]

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductosWomen.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talla: ${producto.talla}</p>
    <p class="precioProductoM">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
  
    boton.addEventListener('click', () => {
      
        agregarAlCarrito(producto.id)
    
    })
})
const agregarAlCarrito = (prodId) => {

    
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductosWomen.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoencarrito')
        div.innerHTML = `
        <img src=${prod.img} alt= "">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        

    })
  
    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    // IVA MEXICO 16%
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio + (prod.precio * 0.16), 0)
    
}
