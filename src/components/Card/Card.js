import React from 'react';

const Card = (props) => {
  console.log(props.user);
  const {name,age,img,country,worth}=props.user
  return (
    <div>
      <h3>name:{name}</h3>
      <h3>age:{age}</h3>
      <h3>image:{img}</h3>
      <h3>country:{country}</h3>
      <h3>worth:{worth}</h3>
     
    </div>
  );
};

export default Card;