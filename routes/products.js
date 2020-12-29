const allProductsReq = require("../api/allProducts.js")
const allProducts = allProductsReq()

const showProducts = ()=>{
allProducts.forEach((e) =>{
 
    if (e.hasOwnProperty('Puertas')) {
        console.log(
          "Marca: " +
            e.Marca +
            " // Modelo: " +
            e.Modelo +
            " // Puertas: " +
            e.Puertas +
            " // Precio: $" +
            e.Precio
        );
    }
     if (e.hasOwnProperty('Cilindrada')) {
        console.log(
          "Marca: " +
            e.Marca +
            " // Modelo: " +
            e.Modelo +
            " // Cilindrada: " +
            e.Cilindrada +
            " // Precio: $" +
            e.Precio
        );
        } 
   }

)

}

module.exports = showProducts