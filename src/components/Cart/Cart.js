import React from 'react';

const Cart = (props) => {
  let total = 0;
  for (let person of props.cart){
total += person.worth;
  }
  return (
    <div className="cart-div bg-light text-black">
      <h3 className="fas fa-cart-arrow-down">Add to cart </h3>
      <h4>Total added:{props.cart.length}</h4>
      <h4>Total Charge:${total}</h4>
      
 <ul>
   <Name cart={props.cart} ></Name>
 </ul>
    </div>
  );
};
function Name({cart}){

return(
  

  cart.map(user=><li><h3>{user.name}</h3></li>)

  
)

}
export default Cart;