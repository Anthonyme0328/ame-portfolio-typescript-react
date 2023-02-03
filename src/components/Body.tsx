import React from 'react'
import {Card} from '@mui/material';
import About from './About';

const Body = () => {
  return (
    <Card raised sx={{m: 'auto', mt: '1em',  height: 'auto', backgroundColor: '#016FB9', width: '99%', border: 'solid', borderColor: '#EDF2F4' }}>
      <About/>
    </Card>
  )
}

export default Body