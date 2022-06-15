import { Box, Grid, Link, Typography } from "@mui/material";
import React, { FC } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: FC = () => {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        height: "4em",
        background: "#242321",
        width: "100%",
        color: "white",
      }}
      sx={{ pl: 5, pt: 2.5 }}
    >
      <Grid container>
        <Grid item sx={{ display: "flex", flexGrow: 1 }}>
          <CopyrightIcon />

          <Typography>2022 Josh Kroslowitz</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
            <Link href='https://msng.link/o/?@CitizenSnipz=tg' color='inherit'>
                <TelegramIcon />
            </Link>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
            <Link href='https://github.com/citizensnipz' color='inherit'>
                <GitHubIcon />
            </Link>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
          <Link href="https://www.linkedin.com/in/joshkros/" color="inherit">
                <LinkedInIcon />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
