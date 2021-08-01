import React, { Component, useEffect, useState } from 'react';
import GetGati from '../service/index';


const Gatipic = () => {

  const [GatiUrl, setGatiUrl] = useState();

  
  const handleGati = async () => {
    //aca va el swich del useState
    let newUrl = await GetGati;
    setGatiUrl(newUrl);
  }

  useEffect(() => {
    handleGati();
  },[]);

  console.log(handleGati());
   

  return(
    <div>
      <img
        id={1}
        className="imagen"
        src={GatiUrl}
      />
      <button
        className="boton"
        onClick={() => handleGati()}
      >
      Next
      </button>
    </div>
  )
}
export default Gatipic;
