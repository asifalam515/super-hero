import React from 'react';

const AllDancers = (props) => {
  console.log(props.user);

  const {name,age,country,job,worth,img}=props.user
  return (
    <div className="dancers-container" >
     <div class="row  g-4 ">
  <div class="col-md-4">
    <div class="card ">
      <img src={img} class="card-img-top center" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Name:{name}</h5>
        <p class="card-text">Age:{age}</p>
        <p class="card-text">Country:{country}</p>
        <p class="card-text">Job:{job}</p>
        <p class="card-text">Net Worth:{worth}</p>
        
      </div>
    </div>
  </div>
  
  
  
</div>
    </div>
  );
};

export default AllDancers;