import {
  Button,
  Grid,
  List,
  ListItemText,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { colors } from "../../styles/theme/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  const content = (
    <Grid
      container
      spacing={2}
      rowGap="2rem"
      sx={{
        backgroundColor: colors.dark,
        color: "white",
        py: "4rem",
        width: "100%",
        px: "1rem",
        mx: 0,
      }}
    >
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="body1">about us</FooterTitle>
        <Typography variant="cation2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel
          aspernatur placeat error facilis excepturi nesciunt vitae iste
          officia, velit magnam voluptatem repellat fugit quidem illum beatae
          qui, itaque blanditiis.
        </Typography>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            visibility: { xs: "visible", md: "hidden" },
          }}
        />
      </Grid>

      <Grid
        item
        md={2}
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="body1">information</FooterTitle>
        <List
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <ListItemText sx={{ marginTop: 0 }}>
            <Typography variant="cation2">About us</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="cation2">Order Tracking</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="cation2">Privacy &amp; Policy</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="cation2">Terms &amp; Conditions</Typography>
          </ListItemText>
        </List>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            visibility: { xs: "visible", md: "hidden" },
          }}
        />
      </Grid>

      <Grid
        item
        md={2}
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="body1">my account</FooterTitle>
        <List
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <ListItemText sx={{ marginTop: 0 }}>
            <Typography variant="cation2">Login</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="cation2">My cart</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="cation2">My account</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="cation2">wish list</Typography>
          </ListItemText>
        </List>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            visibility: { xs: "visible", md: "hidden" },
          }}
        />
      </Grid>

      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="body1">newsletter</FooterTitle>
        <SubscribeTf label="Email address" variant="standard" fullWidth />
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          startIcon={<SendIcon />}
        >
          SUBSCRIBE
        </Button>
      </Grid>
    </Grid>
  );
  return content;
};

export default Footer;
