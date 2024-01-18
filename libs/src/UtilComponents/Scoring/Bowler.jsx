import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import { tableCellClasses }  from '@mui/material/TableCell'

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
  
  
  const Bowler = () => {
    return (
        <Box sx={{marginTop:2}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Bowler</StyledTableCell>
                <StyledTableCell >Over</StyledTableCell>
                <StyledTableCell >Maiden</StyledTableCell>
                <StyledTableCell >Runs</StyledTableCell>
                <StyledTableCell >Wickets</StyledTableCell>
                <StyledTableCell >ER</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              
                <TableRow >
                  <TableCell component="th" scope="row">
                    Malinga
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
    
    )
  }
  
  export default Bowler
