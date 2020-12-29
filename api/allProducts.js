const cars = require("./cars.js");
const motorcycles = require("./motorcycles.js");
const vehicles=[];


const allProductsArr = () =>{

//Uno todos los productos en un solo array y ordeno segun requerimiento. Chequeo los length para decidir como ordenarlos.
if(cars.length>=motorcycles.length){ 
cars.map((e,index)=>{
  vehicles.push(e)
if(motorcycles.length>index){
vehicles.push(motorcycles[index])
}
})
}

if(cars.length<motorcycles.length){ 
motorcycles.map((e,index)=>{
  vehicles.push(e)
if(cars.length>index){
vehicles.push(cars[index])
}
})
}
return vehicles;
}
module.exports = allProductsArr