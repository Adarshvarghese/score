import React from 'react'
import TournamentsList from './TournamentsList'
import { Box, InputLabel, MenuItem, Select } from '@mui/material'
import FormControl from '@mui/material/FormControl';


const SearchFilter = () => {
  return (
  <Box sx={{width:'100%',display:'flex',gap:2,flexDirection:'column'}}>
 

<TournamentsList/>
<TournamentsList/>
<TournamentsList/>
<TournamentsList/>
<TournamentsList/>
<TournamentsList/>

  </Box>
  )
}

export default SearchFilter