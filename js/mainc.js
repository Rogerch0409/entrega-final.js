//Mostrar carrito en paginas que no tiene productos.
let stockProductos = []
const contenedorProductosH = document.getElementById('contenedor-productos')
const contenedorCarritoH = document.getElementById('carrito-contenedor')
const botonVaciarH = document.getElementById('vaciar-carrito')
const contadorCarritoH = document.getElementById('contadorCarrito')
const cantidadH = document.getElementById('cantidad')
const precioTotalH = document.getElementById('precioTotal')
const cantidadTotalH = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarritoH()
    }
})
botonVaciarH.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarritoH()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talla: ${producto.talla}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductosH.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
  
    boton.addEventListener('click', () => {
      
        agregarAlCarritoH(producto.id)
    
    })
})
const agregarAlCarritoH = (prodId) => {

    
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carritoH.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarritoH() 
}

const eliminarDelCarritoH = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarritoH() 
    console.log(carrito)
}

const actualizarCarritoH = () => {
    
    contenedorCarritoH.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoencarrito')
        div.innerHTML = `
        <img src=${prod.img} alt= "">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarritoH(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `
        contenedorCarritoH.appendChild(div)
              

    })
  
    contadorCarritoH.innerText = carrito.length
    console.log(carrito)
    // IVA MEXICO 16%
    precioTotalH.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio + (prod.precio * 0.16), 0)
    
}
