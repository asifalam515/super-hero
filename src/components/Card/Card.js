import React from 'react';

const Card = (props) => {
  const {name,age,img,country,worth}=props.user
  return (
// card form bootstrap

<div className="card m-3 bg-light text-dark" >
  <img src={img} className="card-img-top m-2 img-fluid" alt=''/>
  <div className="card-body">
    <h5 className="card-title">Name:{name}</h5>
    <p className="card-text">Age:{age}</p>
    <p className="card-text">Country:{country}</p>
    <p className="card-text">Charge:{worth}</p>
    <p className="card-text">Age:{age}</p> <br />
    <h3 className="fab fa-twitter"> </h3>
    <br />
    <button onClick={()=>props.eventHandler(props.user)} className="btn btn-primary ">Add to club</button>
    
  </div>
</div>




   
  );
};

export default Card;