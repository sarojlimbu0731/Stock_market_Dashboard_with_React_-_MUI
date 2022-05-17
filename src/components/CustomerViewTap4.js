import React from 'react';
import { Box, Grid, Button, ButtonGroup, Toolbar, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import { List, ListItem, ListItemText } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





function CustomerViewTap4() {
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
            <Grid container>
                <Grid item xs={6}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                            <strong>CVM Registration</strong>
                        </Typography>
                    </Toolbar>

                </Grid>

                <Grid item xs={6} >
                    <div align="right">
                        <ButtonGroup variant="contained">
                            <Button color="success" onClick={handleClickOpen}>Approve</Button>
                            <Button color='error' onClick={handleClickOpen1}>Flag</Button>
                        </ButtonGroup>

                    </div>
                </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={7}>
                    <Paper square elevation={0} sx={{

                        borderBottom: "none",
                        fontSize: "12px",
                        lineHeight: '2px',
                        fontWeight: 'light',
                        paddingLeft: '24px'
                    }}>
                        <List sx={{ flexGrow: 1 }}>
                            <ListItem disablePadding>
                                <ListItemText primary="Type of Action" />
                                <Input sx={{ flexGrow: 1 }}></Input>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Identification" />
                                <Input sx={{ flexGrow: 1 }}></Input>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Bank Information" />
                                <Input sx={{ flexGrow: 1 }}></Input>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="NUIT" />
                                <Input sx={{ flexGrow: 1 }}></Input>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={5}>
                    <Paper square elevation={0}>
                    </Paper>
                </Grid>
            </Grid>
            <Paper elevation={0} sx={{ fontSize: '13px', fontWeight: 'light', lineHeight: '5px' }}>

                <Grid container>
                    <Grid item xs={12}>
                        <Toolbar variant="dense">
                            <CheckBoxOutlinedIcon sx={{ fontSize: 20 }} />
                            <p><b>I accept</b></p>
                        </Toolbar>

                    </Grid>
                </Grid>

            </Paper>

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

export default CustomerViewTap4;