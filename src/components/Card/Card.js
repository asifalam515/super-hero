import React from 'react';

const Card = (props) => {
  console.log(props.user);
  const {name,age,img,country,worth}=props.user
  return (
// card form bootstrap

<div class="card m-5" >
  <img src={img} class="card-img-top m-2 img-fluid"  />
  <div class="card-body">
    <h5 class="card-title">Name:{name}</h5>
    <p class="card-text">Age:{age}</p>
    <p class="card-text">Country:{country}</p>
    <p class="card-text">Charge:{worth}</p>
    <p class="card-text">Age:{age}</p>
    <button className="btn btn-primary">Add to club</button>
    
  </div>
</div>




    // <div className="col-md-4 m-5">
    //   <div className="images">
    //     <img src={img} alt="" />
    //   </div>
    //   <h4>name:{name}</h4>
    //   <h5>age:{age}</h5>
    //   <h5>country:{country}</h5>
    //   <h5>Charge:{worth}</h5>
     
    // </div>
  );
};

export default Card;