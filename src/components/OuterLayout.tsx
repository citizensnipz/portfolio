import { Box, Grid, useMediaQuery, useTheme, } from "@mui/material";
import { Children, FC, useEffect } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import SideNav from "./SideNav";


const OuterLayout: FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box>
            <NavBar />
            <Box sx={{ justifyContent: 'center', flexGrow: 1, display: 'flex' }}>
                <Grid container >
                    <Grid item xs={12} md={2} sx={{pt: 3}}>
                        <SideNav isMobile={matches}/> 
                    </Grid>
                    <Grid item xs={12} md={10} >
                        <Hero />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    )
}

export default OuterLayout;