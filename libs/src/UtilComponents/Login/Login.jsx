import React from 'react'
import {Box, Button, Link, TextField, Typography} from '@mui/material'
import Logo from './images/logo.jpeg'
const Login = () => {
  return (
    <Box className="container" sx={{width:400,height:500,backgroundColor:'beige',marginLeft:'auto',marginRight:'auto', marginTop:"15vh", display:'flex', justifyContent:'flex-start',flexDirection:'column'}}>
        <Box className="logo-container" sx={{display:'flex', justifyContent:"center"}} > 
        <Box className="logo" sx={{height:60,width:60,borderRadius:10,backgroundImage:{Logo}}}>
            <img src={Logo} alt="" srcset="" style={{borderRadius:'10em',width:"80px",height:"80px"}}/>
            </Box> 

    
        </Box>
        <Box className="form-container" sx={{display:'flex',justifyContent:'center',flexBasis:4,flexDirection:'column',gap:5,marginLeft:'auto' ,marginRight:'auto'}}>
            <Typography variant='h4'sx={{textAlign:'center'}}>Login</Typography>
            
            <TextField id="standard-basic" placeholder="Email" sx={{width:300}} variant="standard"  />
            <TextField id="standard-basic" placeholder="password" sx={{width:300}} variant="standard" />
            <Button variant="contained"  >Login</Button>
        </Box>
        <Box className="other-links-container" sx={{display:'flex', alignItems:"center",flexDirection:'column', marginTop:5,gap:2}}>
            <Link>Forgot password</Link>
            <Link>Create an Account</Link>
        </Box>
    </Box>
  )
}

export default Login