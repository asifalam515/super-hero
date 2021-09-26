import React, { useState,useEffect } from 'react';
import Card from '../Card/Card';
import './AllDancers.css'


const AllDancers = () => {
 const [users,setUsers]=useState([])
  
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[]);
  const handleAddToCart=()=>{
    console.log('yes its touch');
  }
  return (
    <div className="dancers-container" >
      {
      users.map((user)=> <Card user={user} ></Card>)
    }
    
    </div>
  );
};

export default AllDancers;