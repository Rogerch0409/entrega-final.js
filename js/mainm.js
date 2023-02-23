// configuracion productos y carrito de compras de pagina Mens
let stockProductosMens = [
    {id: 16, nombre: "chamarra puma", tipo: "chamarra", cantidad: 1, desc: "chamarra estilo aviador puma", precio: 1500, talla: "L", img:'/img/hombre/chamarraestiloaviadorpuma.png'},
    {id: 17, nombre: "conjunto adidas", tipo: "conjunto", cantidad: 1, desc: "conjunto aeroready 3 franjas", precio: 1100, talla: "M", img:'/img/hombre/conjuntoaeroready3franjas.png'},
    {id: 18, nombre: "pans essentials adidas", tipo: "pans", cantidad: 1, desc: "essentials felpa francesa", precio: 1200, talla: "L", img:'/img/hombre/essentialsfelpafrancesa.png'},
    {id: 19, nombre: "playera puma blanca", tipo: "playera", cantidad: 1, desc: "jersey para hombre puma blanco", precio: 1100, talla: "M", img:'/img/hombre/jerseyparahombrepumablanco.png'},
    {id: 20, nombre: "sudadera jordan 23", tipo: "sudadera", cantidad: 1, desc: "jordan 23 engineered", precio: 1200, talla: "L", img:'/img/hombre/jordan23engineered.png'},
    {id: 21, nombre: "sudadera jordan", tipo: "sudadera", cantidad: 1, desc: "jordan essentials", precio: 1100, talla: "M", img:'/img/hombre/jordanessentials.png'},
    {id: 22, nombre: "pans vino", tipo: "pans", cantidad: 1, desc: "jordan flight mvp", precio: 1200, talla: "L", img:'/img/hombre/jordanflightmvp.png'},
    {id: 23, nombre: "chamarra cafe", tipo: "chamarra", cantidad: 1, desc: "lock-uppaddjk", precio: 1100, talla: "M", img:'/img/hombre/lock-uppaddjk.png'},
    {id: 24, nombre: "playera negra", tipo: "playera", cantidad: 1, desc: "nike sportswear negra", precio: 1200, talla: "L", img:'/img/hombre/nikesportswearnegra.png'},
    {id: 25, nombre: "pans tejido", tipo: "pans", cantidad: 1, desc: "pans de tejido woven", precio: 1100, talla: "M", img:'/img/hombre/pansdetejidowoven.png'},
    {id: 26, nombre: "pans entrenamiento", tipo: "pans", cantidad: 1, desc: "pans entrenamiento condivo 20", precio: 1200, talla: "L", img:'/img/hombre/pansentrenamientocondivo20.png'},
    {id: 27, nombre: "pans puma", tipo: "pans", cantidad: 1, desc: "pants de futbol puma", precio: 1100, talla: "M", img:'/img/hombre/pantsdefutbolpuma.png'},
    {id: 28, nombre: "playera puma", tipo: "playera", cantidad: 1, desc: "playera puma brand love clara", precio: 1200, talla: "L", img:'/img/hombre/playerapumabrandloveclara.png'},
    {id: 29, nombre: "playera", tipo: "playera trifolio", cantidad: 1, desc: "playera trifolio", precio: 900, talla: "M", img:'/img/hombre/playeratrifolio.png'},
    {id: 30, nombre: "sudadera", tipo: "sudadera con gorra", cantidad: 1, desc: "sudadera con gorra azul puma", precio: 1500, talla: "L", img:'/img/hombre/sudaderacongorraazulpuma.png'},
]
const contenedorProductosM = document.getElementById('contenedor-productosm')
const contenedorCarritoM = document.getElementById('carrito-contenedorm')
const botonVaciarM = document.getElementById('vaciar-carritom')
const contadorCarritoM = document.getElementById('contadorCarritom')
const cantidadM = document.getElementById('cantidadm')
const precioTotalM = document.getElementById('precioTotalm')
const cantidadTotalM = document.getElementById('cantidadTotalm')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciarM.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductosMens.forEach((producto) => {
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
    contenedorProductosM.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
  
    boton.addEventListener('click', () => {
      
        agregarAlCarritoM(producto.id)
    
    })
})
const agregarAlCarritoM = (prodId) => {

    
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductosMens.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito() 
}

const eliminarDelCarritoM = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarritoM.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoencarritoM')
        div.innerHTML = `
        <img src=${prod.img} alt= "">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidadm">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarritoM(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `
        contenedorCarritoM.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        

    })
  
    contadorCarritoM.innerText = carrito.length
    console.log(carrito)
    // IVA MEXICO 16%
    precioTotalM.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio + (prod.precio * 0.16), 0)
    
}
