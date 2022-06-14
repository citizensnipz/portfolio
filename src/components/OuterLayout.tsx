import { Box, Grid, useMediaQuery, useTheme, } from "@mui/material";
import { Children, FC, useEffect } from "react";
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
                    <Grid item xs={12} md={2} >
                        <SideNav isMobile={matches}/> 
                    </Grid>
                    <Grid item xs={12} md={10} >
                        <p>Here's some more stuff</p>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default OuterLayout;