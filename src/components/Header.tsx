import { Card } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

const Header = () => {
  return (
    <Card raised sx={{ marginTop: '1em'}}>
      <Typography variant='h1' align='center' >
        im the header
      </Typography>
    </Card>
  )
}

export default Header