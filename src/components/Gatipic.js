import React, { useEffect, useState } from 'react';
import {GetGati, GetGatiGiff} from '../service/index';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'



const useStyle = makeStyles({
  caja: {
    width: '330px',
    height: '430px',
    borderRadius: '8px',
    border: '2px solid',
    boxShadow: '0px 6px 16px gray',
    overFlow: 'hidden',
    margin: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343838',
  },
  boton: {
    width: '120px',
    height: '90px',
    borderRadius: '40%',
    display: 'block',
    position: 'relative',
    margin: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 6px 16px gray',
  }
})


const Gatipic = () => {

  const classes = useStyle();

  const [GatiUrl, setGatiUrl] = useState();
  const [ GiffUrl, setGiffUrl ] = useState();

  
  const handleGati = async () => {
    //aca va el swich del useState
    let newUrl = await GetGati();
    setGatiUrl(newUrl);
  
  }

  const handleGatiGiff = async () => {
    //aca va el swich del useState
    let newUrlGiff = await GetGatiGiff();
    setGiffUrl(newUrlGiff);
  
  }

  useEffect(() => {
    handleGati();
    handleGatiGiff();
  },[]);

   

  return(
    <>
      <div className="caja">

        <Box component="span" m={1}>
          <img
            id={1}
            className="imagen"
            src={GatiUrl}
          />
          <img
            id={1}
            className="imagen"
            src={GiffUrl}
          />
        </Box>
        
        <Button
          variant="contained" 
          color="secondary"
          className={classes.boton}
          onClick={handleGati}  
          >
            Next
        </Button>

        <Button
          variant="contained" 
          color="primary"
          className={classes.boton}
          onClick={handleGatiGiff}  
          >
            GIFF
        </Button>

      </div>
    </>
  )
}
export default Gatipic;
