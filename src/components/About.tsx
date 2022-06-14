import { Box, Typography } from "@mui/material";
import React, { FC } from "react"
import { useAppSelector } from "../app/hooks";
import { selectHeroDescription } from "../features/hero/heroSlice";

const About: FC = () => {
    const description = useAppSelector(selectHeroDescription);

    return (
        <Box>
            <Typography fontFamily="Montserrat">
                <span dangerouslySetInnerHTML={{__html: description }} />
            </Typography>
            
        </Box>
    )
}

export default About;