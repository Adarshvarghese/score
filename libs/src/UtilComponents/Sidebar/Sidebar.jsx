import { Box, Button } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
<Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',gap:2,color:'black'}}>
<Button variant='outlined' color='success' sx={{fontWeight:'4'}}>Main menu</Button>
<Button variant='outlined' color='success' sx={{fontWeight:'4'}}>sub menu</Button>
<Button variant='outlined' color='success' sx={{fontWeight:'4'}}>mini menu</Button>
<Button variant='outlined'  color='success' sx={{fontWeight:'4'}}>x menu</Button>

</Box>
    )
}

export default Sidebar