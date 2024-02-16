import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";

import LKIconYellow from "../../../assets/LKIconYellow.svg";
import YGraphicTriangle from "../../../assets/YGraphicTriangle.svg";
import BGraphicTriangle from "../../../assets/BGraphicTriangle.svg";

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //Sends a react toast notifcation in the middle of the screen
    toast.success("User has successfully been registered in our systems!", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    //Register form with some graphics, we can store the values in a usestate and display the data somewhere
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={YGraphicTriangle}
            alt="Y Graphic Triangle"
            style={{
              position: "absolute",
              top: -330,
              width: "25%",
              height: "800px",
              right: 0,
              zIndex: -10,
            }}
          />

          <img
            src={BGraphicTriangle}
            alt="B Graphic Triangle"
            style={{
              position: "absolute",
              top: -330,
              width: "25%",
              height: "800px",
              left: 0,
              zIndex: -10,
            }}
          />
          <img
            src={LKIconYellow}
            alt="LKICon"
            style={{ width: 50, marginBottom: 10 }}
          />

          <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
            Invite a user
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  sx={{ mt: 2, mb: 1 }}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I have read and agreed to Lyd Konsepts Terms of service and Privacy Policy."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "var(--lk-yellow)",
                fontWeight: "bold",
                color: "black",
                textShadow: "none",
                mt: 2,
                mb: 2,
                "&:hover": {
                  backgroundColor: "var(--lk-byellow)",
                },
                display: "block",
              }}
            >
              Invite User
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ mb: 20 }} />
      </Container>
    </ThemeProvider>
  );
}
