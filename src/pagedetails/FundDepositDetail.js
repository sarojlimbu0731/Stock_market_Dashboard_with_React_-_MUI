import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

////function defination for alert button
const FundDepositDetail = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box flex={8} sx={{ marginTop: "6rem" }}>
      {/* heading and search component of page */}
      <Grid container>
        <Grid item lg={8}>
          <Toolbar>
            <Typography variant='h6'>
              <Button href='/layout/fmanagement'>
                <ArrowBackIcon />{" "}
              </Button>
              <strong>Fund Deposit, James</strong>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item lg={4}>
          <Toolbar>
            <TextField label='search' size='small'></TextField>
            <Button variant='contained'>Search</Button>
          </Toolbar>
        </Grid>
      </Grid>

      <Box sx={{ border: "1px solid #D0C9C0" }}>
        <Grid container>
          {/* customer withdraw detail section */}
          <Grid item lg={6} sx={{ padding: "2rem" }}>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Transaction ID:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                1
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Transaction Type:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                Deposit
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Requested Date-Time:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                2022-03-12
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Amount:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                4500
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Customer Id:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                213
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Customer Name:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                James
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "0.8rem" }}>
              <Grid item lg={6} sx={{ fontSize: "12px" }}>
                Medium:
              </Grid>
              <Grid item ig={6} sx={{ fontSize: "12px" }}>
                Bank Voucher
              </Grid>
            </Grid>
          </Grid>

          {/* cutomer uploaded voucher section */}
          <Grid item lg={6} sx={{ padding: "2rem" }}>
            <Grid container sx={{ paddingBottom: "1rem" }}>
              <Grid item lg={5}>
                <Toolbar sx={{ fontSize: "12px" }}>
                  <strong>Uploaded Voucher:</strong>
                </Toolbar>
              </Grid>
              <Grid item ig={6}>
                <Toolbar>
                  <div>
                    <FilePresentIcon fontSize='large' />
                    <p style={{ fontSize: "10px" }}>Voucher.jpeg</p>
                  </div>
                </Toolbar>
              </Grid>
            </Grid>

            {/* admin remark section */}
            <Grid container>
              <Grid item lg={4}>
                <Toolbar sx={{ fontSize: "12px" }}>
                  <strong>Admin Remarks:</strong>
                </Toolbar>
              </Grid>
              <Grid item ig={8}>
                <TextField fullWidth='true' />
              </Grid>
            </Grid>

            {/* buttons for pending,approve & decline  */}
            <Grid container sx={{ marginTop: "2rem" }}>
              <Grid item sx={{ alignItems: "center" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{
                    color: "white",
                    marginLeft: "4rem",
                    marginRight: "0.5rem",
                  }}
                  variant='contained'
                >
                  Pending
                </Button>
              </Grid>
              <Grid item sx={{ alignItems: "center" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ color: "white", marginRight: "0.5rem" }}
                  variant='contained'
                  color='success'
                >
                  Approve
                </Button>
              </Grid>
              <Grid item sx={{ alignItems: "center" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ color: "white", marginRight: "0.5rem" }}
                  variant='contained'
                  color='error'
                >
                  Decline
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* alert button */}

      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        {/* heading of alert button */}
        <DialogTitle>
          <Typography variant='h6' sx={{ textAlign: "center" }}>
            Alert!!!
          </Typography>
        </DialogTitle>

        {/* content section of  alert button */}
        <DialogContent>
          <DialogContentText>
            Do you want to Change the Status?
          </DialogContentText>
        </DialogContent>

        {/* action section of alert button */}
        <DialogActions>
          <Grid container columnSpacing={1}>
            <Grid item lg='6'>
              <Button
                fullWidth='true'
                variant='contained'
                onClick={handleClose}
              >
                Yes
              </Button>
            </Grid>
            <Grid item lg='6'>
              <Button
                fullWidth='true'
                variant='contained'
                color='error'
                onClick={handleClose}
              >
                No
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FundDepositDetail;
