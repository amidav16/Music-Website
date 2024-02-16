import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

import LKIconYellow from "../../../assets/LKIconYellow.svg";

const logoStyle = {
  marginLeft: 15,
  width: "40px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="#">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            px: 4, // Add padding to ensure content doesn't touch the edges
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box sx={{ ml: "-15px" }}>
                <img
                  src={LKIconYellow}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Box>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{
                  color: "white",
                  fontFamily: "IBM Plex Mono",
                  fontSize: 16,
                }}
                gutterBottom
              >
                Newsletter
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
                sx={{ color: "white" }}
              >
                Subscribe to our newsletter for weekly updates and promotions.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    flexShrink: 0,
                    backgroundColor: "var(--lk-yellow)",
                    fontWeight: "bold",
                    color: "black",
                    textShadow: "none",
                    width: "135px",
                    "&:hover": {
                      backgroundColor: "var(--lk-byellow)",
                    },
                    display: "block",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ color: "white", fontFamily: "IBM Plex Mono", fontSize: 16 }}
            >
              Product
            </Typography>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Features
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Testimonials
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Highlights
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Pricing
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ color: "white", fontFamily: "IBM Plex Mono", fontSize: 16 }}
            >
              Company
            </Typography>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              About us
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Careers
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ color: "white", fontFamily: "IBM Plex Mono", fontSize: 16 }}
            >
              Legal
            </Typography>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Terms
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Privacy
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Contact
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Privacy Policy
            </Link>
            <Typography
              display="inline"
              sx={{ mx: 0.5, opacity: 0.5, color: "white" }}
            >
              &nbsp;•&nbsp;
            </Typography>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
              Terms of Service
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com/"
              aria-label="X"
              sx={{ alignSelf: "center" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
