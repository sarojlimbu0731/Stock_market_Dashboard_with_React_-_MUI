import { Box, Container, Button, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Toolbar } from '@mui/material';
import { TextField } from '@mui/material';




//this is for styling the table head and contents
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


//a function to get the items needed for the table data and save the items in the list rows below
function createData(ID, Name, PhoneNumber, Email, CreatedAt, AMLStatus, ContractStatus, SOIStatus, CVMStatus, Action) {
  return { ID, Name, PhoneNumber, Email, CreatedAt, AMLStatus, ContractStatus, SOIStatus, CVMStatus, Action };
}

const rows = [
  createData(1, 'James', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(2, 'Brat', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(3, 'James', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(4, 'James', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(5, 'Brat', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(6, 'James', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(7, 'James', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(8, 'Brat', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(9, 'James', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),
  createData(10, 'Brat', '9812345678', 'james@gmail.com', '2021-02-02', 'VERIFIED', 'VERIFIED', 'UNVERIFIED', 'UNVERIFIED'),


];


const CustomerProfile = () => {
 
  return (
    <Box flex={8} sx={{ marginTop: "6rem" }}>

      <Container>
        <Box sx={{marginBottom: "30px" }}>

          <Grid container spacing={2} square>
            <Grid item xs={8}>
              <Toolbar variant="dense">
                <Typography variant="h5" color="inherit" component="div">
                  <strong>All Customers</strong>
                </Typography>
              </Toolbar>
            
            </Grid>
            <Grid item xs={4}>
              <Toolbar variant="dense">
                 <TextField id="outlined-basic" label="Search" variant="outlined" size="small"/>
                 <Button variant="contained">Search</Button>
              </Toolbar>
             
              
            </Grid>

          </Grid>
        </Box>


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Phone Number</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Created At</StyledTableCell>
                <StyledTableCell align="center">AML Status</StyledTableCell>
                <StyledTableCell align="center">Contract Status</StyledTableCell>
                <StyledTableCell align="center">SOI Status</StyledTableCell>
                <StyledTableCell align="center">CVM Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell component="th" scope="row">
                    {row.ID}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.PhoneNumber}</StyledTableCell>
                  <StyledTableCell align="center">{row.Email}</StyledTableCell>
                  <StyledTableCell align="center">{row.CreatedAt}</StyledTableCell>
                  <StyledTableCell align="center">{row.AMLStatus}</StyledTableCell>
                  <StyledTableCell align="center">{row.ContractStatus}</StyledTableCell>
                  <StyledTableCell align="center">{row.SOIStatus}</StyledTableCell>
                  <StyledTableCell align="center">{row.CVMStatus}</StyledTableCell>
                  <StyledTableCell align="center"><Button variant="contained" size="small" href="/layout/cview">View</Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>



      </Container>

    </Box>
  )
}

export default CustomerProfile;