import { Contenedor } from "./contenedor.js";

const exampleInfo = [                                                                                                                                                     
    {                                                                                                                                                    
      title: 'Goku',                                                                                                                                 
      price: 123.45,                                                                                                                                     
      thumbnail: 'https://m.media-amazon.com/images/I/61ba2KjkC1L._AC_SY879_.jpg'                                                                                                                                          
    },     
    {                                                                                                                                                    
        title: 'Vegeta',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://m.media-amazon.com/images/I/713Y6rg9sKL._AC_SX522_.jpg'                                                                                                                                          
      },                                                                                                                                                                                                                                                                                                 
  ] 


const Productos = new Contenedor("products.txt");

const saveData = await Productos.save(exampleInfo);
console.log(saveData)

const getByID = await Productos.getByID(2);
console.log(getByID)

await Productos.getAll();
console.log(getAll)

await Productos.deleteById(2);

await Productos.deleteAll();





