import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import { tableCellClasses }  from '@mui/material/TableCell'
import Bowler from './Bowler';
import ScoreForm from './ScoreForm';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const Scoring = () => {
  return (
   <Paper sx={{height:"90vh",backgroundColor:'#a5d6a7',marginLeft:'auto'}} spacing={2}>
    <Box sx={{display:'flex',flexDirection:'row',backgroundColor:'white', color:'black',justifyContent:'center',gap:20 ,fontSize:30}}>
    <Box>
    <Box>sfsdf</Box>
    <Box>sssss</Box>
    </Box>
    <Box>
        <Box>CRR</Box>
        <Box>0.00</Box>
    </Box>
    </Box>
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Batsman</StyledTableCell>
            <StyledTableCell >Runs</StyledTableCell>
            <StyledTableCell >Balls</StyledTableCell>
            <StyledTableCell >Fours</StyledTableCell>
            <StyledTableCell >Sixes</StyledTableCell>
            <StyledTableCell >SR</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell component="th" scope="row">
                Tendulkar
              </TableCell>
              <TableCell >100</TableCell>
              <TableCell >34</TableCell>
              <TableCell >3</TableCell>
              <TableCell >7</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                Tendulkar
              </TableCell>
              <TableCell >100</TableCell>
              <TableCell >34</TableCell>
              <TableCell >3</TableCell>
              <TableCell >7</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <Bowler/>
<ScoreForm/>
   </Paper>

    )
}

export default Scoring