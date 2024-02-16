import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import items from "./highlightitems";
import YGraphicTriangle from "../../../assets/YGraphicTriangle.svg";

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <img
          src={YGraphicTriangle}
          alt="Y Graphic Triangle"
          style={{
            position: "absolute",
            top: 0,
            width: "40%",
            height: "450px",
            right: -100,
            zIndex: 1,
          }}
        />

        <img
          src={YGraphicTriangle}
          alt="Y Graphic Triangle"
          style={{
            position: "absolute",
            top: 0,
            width: "40%",
            height: "450px",
            left: -100,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            <span
              style={{
                fontFamily: "IBM Plex Mono",
                fontWeight: "bold",
                color: "var(--lk-byellow)",
              }}
            >
              Our Services
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",

              fontSize: 13,
              fontFamily: "IBM Plex Mono",
            }}
          >
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid sx={{ zIndex: 2 }} item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    <span
                      style={{
                        fontFamily: "IBM Plex Mono",

                        color: "var(--lk-byellow)",
                      }}
                    >
                      {item.title}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
