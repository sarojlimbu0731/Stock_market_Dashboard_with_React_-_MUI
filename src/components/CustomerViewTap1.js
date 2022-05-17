import React from 'react';
import { Box, Grid, Button, ButtonGroup} from '@mui/material'
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableRow, TableCell, tableCellClasses } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





function CustomerViewTap1() {
    //this is for approve alert box

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //this is for flag alert box

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };


    return (
        <Box>
            <Box >
                <div align="right" style={{ marginBottom: "10px" }}>
                    <ButtonGroup variant="contained">
                        <Button color="success" onClick={handleClickOpen}>Approve</Button>
                        <Button color='error' onClick={handleClickOpen1}>Flag</Button>
                    </ButtonGroup>

                </div>
            </Box>

            <Grid container >
                <Grid item xs={4}>
                    <Paper square elevation={0}>
                        <h4 style={{ paddingLeft: '15px' }}>Personal Information</h4>

                        <Table sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none",
                                fontSize: "14px",
                                lineHeight: '2px',
                                fontWeight: 'light'
                            }
                        }}>
                            <TableBody >
                                <TableRow borderBottom="none">
                                    <TableCell align="left"><b>Full Name:</b></TableCell>
                                    <TableCell align="left">James Rodrigue</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="left"><b>DOB:</b></TableCell>
                                    <TableCell align="left">02-07-1997</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Work Number:</b></TableCell>
                                    <TableCell align="left">12314123</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Nationality:</b></TableCell>
                                    <TableCell align="left">Nepali</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Fax-Num:</b></TableCell>
                                    <TableCell align="left">121423</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Mobile-Number:</b></TableCell>
                                    <TableCell align="left">9843562345</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>E-mail Address:</b></TableCell>
                                    <TableCell align="left">james@gmail.com</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper square elevation={0}>
                        <h4 style={{ paddingLeft: '15px' }}>Address Information</h4>
                        <Table sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none",
                                fontSize: "14px",
                                lineHeight: '15px',
                                fontWeight: 'light'
                            }
                        }}>
                            <TableBody>
                                <TableRow >
                                    <TableCell align="left"><b>Address1:</b></TableCell>
                                    <TableCell align="left">Avenue Agostinho Neto, No. 960. Maputo</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="left"><b>Address2:</b></TableCell>
                                    <TableCell align="left">Caixa Postal 656,Maputo,Mozambique</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Resident Address:</b></TableCell>
                                    <TableCell align="left">Caixa Postal 656,Maputo,Mozambique</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Attached Files(Address):</b></TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <i style={{ fontSize: "50px" }} class="fas fa-file-word"></i><br />
                                        <b>Address file1.docx</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <i style={{ fontSize: "50px" }} class="fas fa-file-word"></i><br />
                                        <b>Address file1.pdf</b>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>


                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper square elevation={0}>
                        <h4 style={{ paddingLeft: '15px' }}>Documents</h4>
                        <Table sx={{
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none",
                                fontSize: "14px",
                                lineHeight: '15px',
                                fontWeight: 'light'
                            }
                        }}>
                            <TableBody>
                                <TableRow >
                                    <TableCell align="left"><b>ID Document Passport:</b></TableCell>
                                    <TableCell align="left">12341244523</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="left"><b>Text Certificate:</b></TableCell>
                                    <TableCell align="left">Tax Certificate</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><b>Attached Files(Documents):</b></TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                        <i style={{ fontSize: "50px" }} class="fas fa-file-word"></i><br />
                                        <b>Address file1.docx</b>
                                    </TableCell>
                                    <TableCell align="left">
                                        <i style={{ fontSize: "50px" }} class="fas fa-file-word"></i><br />
                                        <b>Address file1.pdf</b>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>


                    </Paper>
                </Grid>
            </Grid>
            {/* this is codesection for approve alert */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">
                    <div align="center">Alert</div>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do You Want to Approve this?
                    </DialogContentText>
                </DialogContent>

                <DialogActions >
                    <Grid container spacing={2}>
                        <Grid item lg={6} >
                            <Button fullWidth="true" color="inherit" variant="contained" onClick={handleClose} >No</Button>
                        </Grid>
                        <Grid item lg={6}>
                            <Button fullWidth="true" color="info" variant="contained" onClick={handleClose}>Yes</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>

            {/* this is codesection for flag alert */}
            <Dialog
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">
                    <div align="center">Alert</div>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div align="center">Flag Remarks</div>
                    </DialogContentText>
                </DialogContent>
                <div style={{ paddingLeft: '25px', paddingRight: '25px' }}>
                    <textarea rows={4} cols={45}></textarea>
                </div>


                <DialogActions >
                    <Grid container spacing={2}>
                        <Grid item lg={6} >
                            <Button fullWidth="true" color="inherit" variant="contained" onClick={handleClose1} >Cancel</Button>
                        </Grid>
                        <Grid item lg={6}>
                            <Button fullWidth="true" color="info" variant="contained" onClick={handleClose1}>Flag</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>

        </Box>
    );
}

export default CustomerViewTap1;