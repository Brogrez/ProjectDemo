
  // Matriz para almacenar los productos del carrito
  let cart = [];
  
  // Clase para representar un producto
  class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  // Función para agregar un producto al carrito
  function addToCart(name, price) {
    for (let i in cart) {
      if (cart[i].name === name) {
        cart[i].qty++;
        return;
      }
    }
    let item = new Item(name, price);
    item.qty = 1;
    cart.push(item);
  }
  
  // Función para mostrar el contenido del carrito
  function showCart() {
    let cartTable = document.getElementById("cart");
    let grandTotal = 0;
    for (let i in cart) {
      let row = `<tr><td>${cart[i].name}</td><td>${cart[i].price}</td></tr>`;
      cartTable.innerHTML += row;
      grandTotal += cart[i].price * cart[i].qty;
    }
    cartTable.innerHTML += `<tr><td>Total</td><td>${grandTotal}</td></tr>`;
  }
 

  console.log(showCart)

  // Ejemplo de uso
  addToCart("Camisa", 20);
  addToCart("Pantalón", 30);
  showCart();