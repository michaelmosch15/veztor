import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../components/CircularProgressBar';
import './styles.css'; 

const IndexPage = () => {
  const ParentComponent = () => {
    const [progress, setProgress] = useState(0);
  

  }
  return (
    <main>
    
    <center><img src="./images/icon.png" className="icon.png" /></center>

    <div className="center-container"> 
          <div classname="titlecontainer">
      </div>
      <div className="circle-container"> 
      <CircularProgressBar progress={47} animate={true} />      </div>
    </div>
    </main>
  );
};


export default IndexPage;