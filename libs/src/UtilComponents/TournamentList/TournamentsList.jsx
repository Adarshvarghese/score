import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const TournamentsList = () => {
  return (
<Paper sx={{height:70, backgroundColor:'#caabca' ,display:'flex' ,justifyContent:'space-between'}}>
<Box sx={{justifyContent:'center',display:'flex',flexDirection:'row',width:800}}>
<Typography variant='h5' >Tournament</Typography>
</Box>
<Box>
    <Button startIcon={<DeleteForeverIcon/>}></Button>
    <Button startIcon={<EditIcon/>}></Button>
</Box>
</Paper>
  )
}

export default TournamentsList;