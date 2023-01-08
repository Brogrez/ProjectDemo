// // Matriz para almacenar los productos del carrito
// let cart = [];

// // Clase para representar un producto
// class Item {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// // Función para agregar un producto al carrito
// function addToCart(name, price) {
//   for (let i in cart) {
//     if (cart[i].name === name) {
//       cart[i].qty++;
//       return;
//     }
//   }
//   let item = new Item(name, price);
//   item.qty = 1;
//   cart.push(item);
// }

// // Función para mostrar el contenido del carrito
// function showCart() {
//   let cartTable = document.getElementById("cart");
//   let grandTotal = 0;
//   for (let i in cart) {
//     let row = `<tr><td>${cart[i].name}</td><td>${cart[i].price}</td></tr>`;
//     cartTable.innerHTML += row;
//     grandTotal += cart[i].price * cart[i].qty;
//   }
//   cartTable.innerHTML += `<tr><td>Total</td><td>${grandTotal}</td></tr>`;
// }

// console.log(showCart)

// // Ejemplo de uso
// addToCart("Camisa", 20);
// addToCart("Pantalón", 30);
// showCart();

// function miEdad(BornYear,YearActual){
//   let edad = YearActual - BornYear
//   return edad
// }

// function presentacion(nombre){
//   let texto = `hola, mi nombre es ${nombre} y mi edad es ${miEdad(1998,2023)}`
//   return texto
// }
// console.log(presentacion('nicolas', 24))

// console.log(miEdad(1998,2023))

// function numero(numero1){
//   let final = []
//   for(let i = 1; i <= numero1; i++) {
//     if(i <= numero1){
//       final.push(i)
//     }
//   }
//   return final
// }
// numero(5)
// console.log(numero(5))

// function numero(numero1){
//   let numero2 = []
//   numero2.length = numero1
//   // console.log(numero2)
//    numero2.fill("  ")
//    const arrayFinal = numero2.map((element,index) => index)
//   console.log(arrayFinal)

// }

// numero(10)

const baseDeDatos = [
  { id: 1, nombre: "🥔", precio: 1, imagen: "patata.jpg" },
  { id: 2, nombre: "🧅", precio: 1.2, imagen: "cebolla.jpg" },
  { id: 3, nombre: "🎃", precio: 2.1, imagen: "calabacin.jpg" },
  { id: 4, nombre: "🍑", precio: 0.6, imagen: "fresas.jpg" },
];

// Decalación de la fx con "for"
function iterandoConFor(Array) {
  let nuevoArreglo = [];
  for (i = 0; i < Array.length; i++) {
    console.log(Array[i].nombre);
    if (i < Array.length) {
      nuevoArreglo.push(Array[i].nombre);
    }
  }
  console.log(nuevoArreglo);
  return nuevoArreglo
}
// Llammado de la fx con "for"
console.log(iterandoConFor(baseDeDatos), 'con for normal')
 // REFACTOR: La fx DEBE retornar la respuesta, ojito con eso

// --------------------------------------------------------------------------------------------//

// Decalación de la fx con "forEach"
function iterandoConForeach(arreglo) {
  const arrayFinal = []
  // proceso donde itero mi array (arreglo) y contruyo el arrai nuevo
  arreglo.forEach(element => arrayFinal.push(element.nombre));
  return arrayFinal
}
// Llammado de la fx con "forEach"
console.log(iterandoConForeach(baseDeDatos), 'con forich')



// --------------------------------------------------------------------------------------------//
// Decalación de la fx con "map"
function iterandoConMap(arreglo) {
  return arreglo.map(element => element.nombre);
}

// Llammado de la fx con "map"
console.log(iterandoConMap(baseDeDatos), 'con map')