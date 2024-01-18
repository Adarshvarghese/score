import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
<AppBar sx={{width:{md:'100%'}}}>
            
    
<Toolbar sx={{gap:2}}>

<Button variant='outlined'color='inherit'>Home</Button>
<Button variant='outlined' color='inherit'>Tournaments</Button>
<Button variant='outlined'color='inherit'>Results</Button>


</Toolbar>



</AppBar>
    )
}

export default Navbar