import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
// import SearchFilter from '../TournamentList/SearchFilter'
import Scoring from '../Scoring/Scoring'

const Dash = () => {
  return (
    
<Paper sx={{width:'95vw', height:'95vh' ,margin:'auto' ,backgroundColor:'cornsilk'}}>
<Grid container spacing={2}>
    <Grid item xs={12} md={2} >
        <Box className="sidenav" sx={{backgroundColor:'white',height:{xs:'30vh',md:'90vh'} ,width:{md:'100%'}}}>
            <Sidebar/>
        </Box>
    </Grid>
    <Grid item xs={12} md={10} >
        <Paper sx={{height:'90vh',backgroundColor:'white'}}>
<Scoring/>
        </Paper>
    </Grid>

</Grid>
</Paper>
  )
}

export default Dash