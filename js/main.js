// Configuracion del buscador con fetch desde api.json, aqui busca todos los productos que se tienen a la venta
const buscador = document.querySelector('#buscador');
const botonB = document.querySelector('#botonB');
const resultado = document.querySelector('#resultado');

fetch('/json/api.json')
    .then( buscar => buscar.json() )
    .then( data => {

        const filtrar = () => {
            
        resultado.innerHTML = '';
        console.log(data);
            const texto = buscador.value.toLowerCase();
            
            for (let find of data){
                let nombre = find.nombre.toLowerCase();
                if(nombre.indexOf(texto) !== -1){
                resultado.innerHTML +=  `
                <a href=""><li>${find.nombre}</li></a> 
                `
                
                }
            }
        
        if (resultado.innerHTML === ''){
            //console.log(resultado.value);
            resultado.innerHTML +=`
            <li>Producto no encontrado...</li>
            `
        }
        
    }
        botonB.addEventListener('click', filtrar)
        buscador.addEventListener('keyup', filtrar)
})
