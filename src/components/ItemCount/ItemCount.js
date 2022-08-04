import { useState } from "react";
import React from "react";

 function ItemCount(props) {
   console.log(props.stock, props.initial);

   const [clicks, setClicks] = useState(1);

   const handleIncrement = () => {
        setClicks(clicks + 1);
   };

   const handleDecrement = () => {
     setClicks(clicks - 1);
   };

   const onAdd = () => {
     alert(`Agregaste ${clicks} productos`)
   };

   return (
     <>
       <h3>Item Counter</h3>
       <button onClick={handleDecrement}>restar</button>
       <button onClick={handleIncrement}>sumar</button>
       <button onClick={onAdd}>Finalizar Compra</button>
       <h3>Productos : {clicks} </h3>
     </>
   );
 }
  
 export default ItemCount;

