import React, {  useState } from 'react';
import AllDancers from '../AllDancers/AllDancers';
import Cart from '../Cart/Cart';
import './New.css';



const New = () => {
  const [selectedUsers,setSelectedUsers]= useState([])
  const handleAddToCart=(user)=>{
    const newUsers = [...selectedUsers,user]
    setSelectedUsers(newUsers)

   }
   console.log(selectedUsers);
  return (
    <div className="new-div">
     <AllDancers eventHandler={handleAddToCart}></AllDancers>
     <Cart cart={selectedUsers}></Cart>
    </div>
    

    
  );
};

export default New;