import React, { useEffect, useState } from 'react';
import AllDancers from '../AllDancers/AllDancers';
import Cart from '../Cart/Cart';
import './New.css'

const New = () => {
  
  return (
    <div className="new-div">
     <AllDancers></AllDancers>
     <Cart></Cart>
    </div>
    

    
  );
};

export default New;