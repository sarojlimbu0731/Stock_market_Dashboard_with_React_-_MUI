import React from 'react';
import { Box, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





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
function createData(ID, Security, CurrentBalance, PreviousClosingPrice, ValueofPreviousClosingPrice) {
  return { ID, Security, CurrentBalance, PreviousClosingPrice, ValueofPreviousClosingPrice };
}

const rows = [
  createData(1, 'CDM', '300', '42', '12600'),
  createData(2, 'BAYPORT', '2019', '52000'),
  createData(3, 'EMOSE', '600', '20', '12000'),
  createData(4, 'CDM', '300', '42', '12600'),
  createData(5, 'BAYPORT', '2019', '52000'),
  createData(6, 'EMOSE', '600', '20', '12000'),
  createData(7, 'CDM', '300', '42', '12600'),
  createData(8, 'BAYPORT', '2019', '52000'),
  createData('', '', '', 'Total', '502002'),

];


function CustomerViewTap5() {

  //this is for alert box

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box >
        <div align="left" style={{ marginBottom: "10px" }}>
          <Button variant='contained' onClick={handleClickOpen}>Add Portfolio</Button>
        </div>
      </Box>

      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Security</StyledTableCell>
                <StyledTableCell align="center">Current Balance</StyledTableCell>
                <StyledTableCell align="center">Previous Closing Price</StyledTableCell>
                <StyledTableCell align="center">Value of Previous Closing Price</StyledTableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell component="th" scope="row">
                    {row.ID}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.Security}</StyledTableCell>
                  <StyledTableCell align="center">{row.CurrentBalance}</StyledTableCell>
                  <StyledTableCell align="center">{row.PreviousClosingPrice}</StyledTableCell>
                  <StyledTableCell align="center">{row.ValueofPreviousClosingPrice}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* this is codesection for approve alert */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"  

      >
        <DialogTitle id="alert-dialog-title">
          <div align="center">Add Portfolio</div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <label for="fname">Name Of Security*</label>
            <p></p>
            <input type="text" id="fname" name="firstname" placeholder="CDM*"/>
            <p></p>
            <label for="lname">Balance(MZN)*</label>
            <p></p>
            <input type="text" id="lname" name="lastname" placeholder="1000*" />
            <Button fullWidth="true" color="info" variant="contained" sx={{marginTop:"15px"}}>Add</Button>

          </DialogContentText>
        </DialogContent>
      </Dialog>


    </Box>
  );
}

export default CustomerViewTap5;