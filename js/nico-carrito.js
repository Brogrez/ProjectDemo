// variables 

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
const listaProductos = document.querySelector("#lista-cursos")
let carrito = []
const listaCarrito  = document.querySelector("#lista-carrito tbody")
const carritoContenedor = document.querySelector("#lista-carrito")

// listeners 
cargaListeners()
function cargaListeners(){
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito)
    listaProductos.addEventListener("click", obtenerElemento)
    carritoContenedor.addEventListener("click", eliminarCurso)

    
}


// funciones

function obtenerElemento(e){
    
    e.preventDefault()
    if(e.target.classList.contains("agregar-carrito")){
        // console.log(e.target.parentElement.parentElement)
        construirObjetoProducto(e.target.parentElement.parentElement)
    }
}

function construirObjetoProducto(producto){
    // let nombreProducto = producto.querySelector("h4")
    // let imagenProducto = producto.querySelector(".imagen-curso")
    // let precioProducto = producto.querySelector(".precio")
    
    const objCurso = {
        imagen: producto.querySelector(".imagen-curso").src,
        nombre: producto.querySelector("h4").textContent,
        precio: producto.querySelector(".precio span").textContent,
        id: producto.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    let repetido = carrito.filter(e => e.id === objCurso.id)
    if(repetido.length !== 0){
        // repetido[0].cantidad++
        // console.log(repetido)
        // // repetido = [...repetido,carrito]
        // carrito = [...repetido, carrito]
        carrito = carrito.map(e => {
            if(e.id === objCurso.id){
                e.cantidad++
                return e
            }else{
                return e
            } 
        })
        
        // carrito = resultado

    }else{
        carrito = [...carrito, objCurso]
    }

    console.log(repetido, "psuh")
    // console.log(carrito,"inicio")
    // if(carrito.length === 0){
    //     carrito.push(objCurso)
        
    // }

    // carrito.forEach(e => {
    //     if(e.id === objCurso.id){
    //         objCurso.cantidad++
    //     }else{
    //         carrito = [...carrito, objCurso]
    //     }
    // })
    // console.log(carrito,"final")
    
    

    // console.log(carrito)
    console.log(carrito,"carrito")
    plasmarCarrito(carrito)

    // console.log(objCurso)
    // console.log(producto, "producto")
}

function plasmarCarrito(carrito){

    vaciarCarrito()

    carrito.forEach(e => {
        let elementTr = document.createElement("tr")

        elementTr.innerHTML = `
            <td> <img src="${e.imagen}"> </td>        
            <td> ${e.nombre} </td>        
            <td> ${e.precio} </td>        
            <td> ${e.cantidad} </td>        
            <td> <a class="borrar-curso" data-id="${e.id}"> X </a> </td>        
        `
        listaCarrito.appendChild(elementTr)

        // elementTr.addEventListener("click", (e) => {

        //     if(e.target.querySelector("a").getAttribute("data-id")){
        //         carrito = carrito.filter(

        //         )
        //     }
        // })
    });
    // console.log(carrito)
}
function eliminarCurso(evento){
    if(evento.target.classList.contains("borrar-curso")){
        const dataId = evento.target.getAttribute("data-id")
        console.log(carrito, "inicio")
        carrito = carrito.filter(curso => curso.id !== dataId )
        console.log(carrito, "final")

        plasmarCarrito(carrito)

        console.log(dataId)
    }

}




function vaciarCarrito(){

    listaCarrito.innerHTML = ``

    // console.log("vaciando el carrito")
}

