import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper } from '@mui/material'
import React from 'react'

const ScoreForm = () => {
  return (
<Box className="score-container" sx={{backgroundColor:'white',marginTop:2 ,display:'flex',flexDirection:'column',justifyContent:'center',gap:2} }>
<FormGroup sx={{display:'flex',flexDirection:'row' ,justifyContent:'center'}}>
  <FormControlLabel control={<Checkbox  />} label="Wide" />
  <FormControlLabel  control={<Checkbox />} label="No ball" />
  <FormControlLabel  control={<Checkbox />} label="Byes" />
  <FormControlLabel  control={<Checkbox />} label="Leg Byes" />
  <FormControlLabel  control={<Checkbox />} label="Wicket" />
</FormGroup>
<Box sx={{display:'flex',justifyContent:'center',gap:5}}>
<Button variant='outlined'>swap batsman</Button>
<Button variant='outlined'>Retire</Button>

</Box>
<Box sx={{display:'flex',justifyContent:'center',gap:5}} >
<Paper >
<Button  variant="contained" sx={{borderRadius:15}}>0</Button>
<Button  variant="contained" sx={{borderRadius:15}}>1</Button>
<Button variant="contained" sx={{borderRadius:10}}>2</Button>
<Button variant="contained" sx={{borderRadius:10}}>3</Button>
<Button variant="contained" sx={{borderRadius:10}}>4</Button>
<Button variant="contained" sx={{borderRadius:10}}>5</Button>
<Button variant="contained" sx={{borderRadius:10}}>6</Button>



</Paper>
</Box>
</Box>
    )
}

export default ScoreForm