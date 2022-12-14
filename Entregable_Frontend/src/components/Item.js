
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import { useState } from "react";

export default function Item( {id, producto, stock,addArticle} ) {

  const [cantidad, setCantidad] = useState(stock);

  function pay() {
    setCantidad(cantidad - 1);
    addArticle();
  }

  return (
    <div className='producto' key={id}>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <h5>En Stock: {cantidad > 0 ? cantidad : <span>Agotado</span>}</h5>
      <button onClick={pay} disabled={cantidad < 1 ? true:false}> {cantidad < 1 ? "No hay Stock": "Comprar"} </button>
    </div>
  );
}



// export default function Item({ id, producto, stock, increment }) {
//   const [cantidad, setCantidad] = useState(stock);

//   const comprar = () => {
//     setCantidad(cantidad - 1);
//     increment();
//   };

//   return (
//     <div className="producto" key={id}>
//       <h3>{producto.nombre}</h3>
//       <p>{producto.descripcion}</p>
//       <h5>En stock: {cantidad > 0 ? cantidad : <span>Agotado</span>}</h5>
//       <button onClick={comprar} disabled={cantidad < 1 ? true : false}>
//         {cantidad < 1 ? 'Sin stock' : 'Comprar'}
//       </button>
//     </div>
//   );
// }
