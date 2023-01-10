// variables 

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
const listaProductos = document.querySelector("#lista-cursos")


// listeners 
cargaListeners()
function cargaListeners(){
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito)
    listaProductos.addEventListener("click", obtenerElemento)
    
}


// funciones

function obtenerElemento(e){
    
    e.preventDefault()
    if(e.target.classList.contains("agregar-carrito")){
        console.log(e.target.parentElement.parentElement)
        construirObjetoProducto(e.target.parentElement.parentElement)
        // let nombreProducto = e.target.parentElement.parentElement.querySelector("h4")
        
    }
    
}

function construirObjetoProducto(producto){
    let nombreProducto = producto.querySelector("h4")

    const objCurso ={

    }
    console.log(nombreProducto)
    console.log(producto, "producto")
    
}

function vaciarCarrito(){
    console.log("vaciando el carrito")
}
