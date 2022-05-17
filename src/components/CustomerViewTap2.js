import React from 'react';
import { Box, Grid, Button, ButtonGroup, Toolbar, Typography, } from '@mui/material'
import Paper from '@mui/material/Paper';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






function CustomerViewTap2() {
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
                            <strong>Contracts</strong>
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
            <Box sx={{ marginTop: '10px' }}>
                <Paper elevation={0} sx={{ marginLeft: '22px', fontSize: '14px', fontWeight: 'light', lineHeight: '5px' }}>
                    <div>
                        <p> Condições Gerais do Contrato de Intermediação Financeira</p>
                        <p> Entre a Amaramba Capital Broker – Sociedade Corretora, Lda com sede em Maputo – Cidade na Av. 25 </p>
                        <p> de Setembro n.º 1821, registada na Conservatória do Registo das Entidades Legais sob o n.º 100932962, </p>
                        <p>adiante designada por ACB, e o cliente devidamente identificado neste contrato, e adiante designado por </p>
                        <p>Cliente.</p>
                        <p>Considerando que a ACB está autorizada e registada no Banco de Moçambique, na qualidade de</p>
                        <p>regulador do mercado de capitais, para a prestação da actividade de intermediação financeira objecto do</p>
                        <p>presente contrato (ao abrigo do estabelecido pelas disposições conjugadas dos artigos 40, da Lei n.º</p>
                        <p>15/99 de 1 de Novembro, alterada pela Lei n.º 9/2004, de 21 de Julho, Lei das Instituições de Crédito e</p>
                        <p>Sociedades Financeiras e dos artigos 13 e 15 do Decreto n.º 56/2004, de 10 de Dezembro).</p>
                        <p>É celebrado o presente contrato de intermediação financeira, que se rege pelas seguintes cláusulas gerais:</p>
                        <p>Cláusula 1ª – Serviços e actividades de intermediação financeira</p>
                        <p>1. A ACB encontra-se autorizada a prestar, entre outros, os seguintes serviços e actividades de</p>
                        <p>intermediação financeira:</p>
                        <p> a. A recepção e a transmissão de ordens;</p>
                        <p>b. A execução de ordens;</p>
                        <p> c. O registo e o depósito de instrumentos financeiros e, prestação</p>
                    </div>

                </Paper>
                <Paper elevation={0} sx={{ fontSize: '15px', fontWeight: 'light', lineHeight: '5px' }}>

                    <Grid container>
                        <Grid item xs={4}>
                            <Toolbar variant="dense">
                                <CheckBoxOutlinedIcon sx={{ fontSize: 20 }} />
                                <p>I accept and agree</p>
                            </Toolbar>

                        </Grid>

                        <Grid item xs={4} >
                            <Toolbar variant="dense">
                                <p><span><b>Date: </b></span>02/26/2022</p>
                            </Toolbar>
                        </Grid>
                        <Grid item xs={4} >
                            <Toolbar variant="dense">
                                <p fontWeight="light"><span><b>Signed By: </b></span>James</p>
                            </Toolbar>
                        </Grid>
                    </Grid>

                </Paper>

            </Box>
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

export default CustomerViewTap2;