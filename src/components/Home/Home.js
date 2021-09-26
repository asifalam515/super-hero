import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import AllDancers from '../AllDancers/AllDancers';

import './Home.css'

const Home = () => {
  const [users,setUsers]=useState([]);
  console.log(users);

  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[]);
  return (
    <div>
      {/* bootstrap */}
      <div className="row">
        <div className="col-md-9 left-side">
          {/* ekhane Dancer rakbo rakbo */}
          
          <div className="row">
            {
              users.map((user)=> (
                <AllDancers key={user.key} user={user}></AllDancers>
              ))
            }
          </div>
          </div>
       

        <div className="col-md-3">
          {/* ekhane cart krbo */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;