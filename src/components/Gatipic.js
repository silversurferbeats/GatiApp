import React, { useEffect, useState } from 'react';
import GetGati from '../service/index';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';




const Gatipic = () => {

  const [GatiUrl, setGatiUrl] = useState();

  
  const handleGati = async () => {
    //aca va el swich del useState
    let newUrl = await GetGati();
    setGatiUrl(newUrl);
  
  }

  useEffect(() => {
    handleGati();
  },[]);

   

  return(
    <div className="container">

      <Box component="span" m={1}>
        <img
          id={1}
          className="imagen"
          src={GatiUrl}
        />
      </Box>


      
      
      <Button
        variant="contained" 
        color="secondary"
        className="boton"
        onClick={handleGati}  
        >Next
      </Button>

    </div>
  )
}
export default Gatipic;
