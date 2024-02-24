import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../components/CircularProgressBar';
import ImgSrc from "../images/icon.png";
import './styles.css'; 

const IndexPage = () => {
  const ParentComponent = () => {
    const [progress, setProgress] = useState(0);
  

  }
  return (
    <main>
    
    <center><img src={ImgSrc} className="icon" />
    <pg>
    <h1>Veztor</h1>
    </pg>
    </center>

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