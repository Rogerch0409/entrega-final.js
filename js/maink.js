// configuracion productos y carrito de compras de pagina kids
let stockProductosKids = [
    {id: 18, nombre: "chamarra nike niña", tipo: "chamarra", cantidad: 1, desc: "chamarra nike rompe vientos", precio: 1500, talla: "L", img:'/img/ninos/chamarranikeromevientosniña.png'},
    {id: 19, nombre: "conjunto adidas", tipo: "conjunto", cantidad: 1, desc: "conjunto aeroready 3 franjas", precio: 1100, talla: "M", img:'/img/ninos/conjuntotresfranjasadidasniño.png'},
    {id: 20, nombre: "nike air playera niña", tipo: "playera", cantidad: 1, desc: "nike air playera niña", precio: 1200, talla: "L", img:'/img/ninos/nikeairplayeraniña.png'},
    {id: 21, nombre: "nike dri-fit academy shorts", tipo: "shorts", cantidad: 1, desc: "nike dri-fit shorts", precio: 1100, talla: "M", img:'/img/ninos/nikedri-fitacademyshorts.png'},
    {id: 22, nombre: "playera nike dri-fit academy", tipo: "playera", cantidad: 1, desc: "playera nike dri-fit", precio: 1200, talla: "L", img:'/img/ninos/nikedri-fitacademy.png'},
    {id: 23, nombre: "chamarra nike sportswear niña", tipo: "chamarra", cantidad: 1, desc: "nike sportswear chamarra niña", precio: 1100, talla: "M", img:'/img/ninos/nikesportswearchamarraniña.png'},
    {id: 24, nombre: "nike sportswear conjunto niña", tipo: "conjunto", cantidad: 1, desc: "nike sportswear conjunto niña", precio: 1200, talla: "L", img:'/img/ninos/nikesportswearconjuntoniña.png'},
    {id: 25, nombre: "sudadera nike sportswear", tipo: "sudadera", cantidad: 1, desc: "nike sportswear sudadera", precio: 1100, talla: "M", img:'/img/ninos/nikesportswearsudadera.png'},
    {id: 26, nombre: "pans de tejido knit de futbol", tipo: "pans", cantidad: 1, desc: "pans de tejido knit de futbol", precio: 900, talla: "L", img:'/img/ninos/pansdetejidoknitdefutbol.png'},
    {id: 27, nombre: "playera girl power estampada", tipo: "playera", cantidad: 1, desc: "playera girl power estampada", precio: 800, talla: "M", img:'/img/ninos/playeragirlpowerestampada.png'},
    {id: 28, nombre: "sudadera con gorro puma negra", tipo: "sudadera", cantidad: 1, desc: "sudadera con gorro juvenil", precio: 1500, talla: "L", img:'/img/ninos/sudaderacongorrojuvenilpumanegra.png'},
    {id: 29, nombre: "sudadera con gorro puma gris", tipo: "sudadera", cantidad: 1, desc: "sudadera con gorro puma", precio: 1100, talla: "M", img:'/img/ninos/sudaderacongorrojuvenilpuma.png'},
    {id: 30, nombre: "sudadera con gorro naranja adidas", tipo: "sudadera", cantidad: 1, desc: "sudadera con gorro naranja", precio: 1800, talla: "L", img:'/img/ninos/sudaderacongorronaranjaadidas.png'},
    {id: 31, nombre: "sudadera corta con gorro flower", tipo: "sudadera", cantidad: 1, desc: "sudadera con gorro flower", precio: 1900, talla: "M", img:'/img/ninos/sudaderacortacongorroflower.png'},
    {id: 32, nombre: "sudadera fadom puma", tipo: "sudadera", cantidad: 1, desc: "sudadera fadom puma", precio: 1500, talla: "L", img:'/img/ninos/sudaderafadompuma.png'},
]

const contenedorProductosK = document.getElementById('contenedor-productosk')
const contenedorCarritoK = document.getElementById('carrito-contenedork')
const botonVaciarK = document.getElementById('vaciar-carritok')
const contadorCarritoK = document.getElementById('contadorCarritok')
const cantidadK = document.getElementById('cantidadk')
const precioTotalK = document.getElementById('precioTotalk')
const cantidadTotalK = document.getElementById('cantidadTotalk')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciarK.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductosKids.forEach((producto) => {
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
    contenedorProductosK.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
  
    boton.addEventListener('click', () => {
      
        agregarAlCarritoK(producto.id)
    
    })
})
const agregarAlCarritoK = (prodId) => {

    
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductosKids.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito() 
}

const eliminarDelCarritoK = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarritoK.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoencarritoK')
        div.innerHTML = `
        <img src=${prod.img} alt= "">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidadk">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarritoK (${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `
        contenedorCarritoK.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        

    })
  
    contadorCarritoK.innerText = carrito.length
    console.log(carrito)
    // IVA MEXICO 16%
    precioTotalK.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio + (prod.precio * 0.16), 0)
    
}
