import { Box } from "@mui/material";
import React, { FC } from "react"
import { useAppSelector } from "../app/hooks";
import { selectHeroDescription } from "../features/hero/heroSlice";

const About: FC = () => {
    const description = useAppSelector(selectHeroDescription);

    return (
        <Box>
            <div dangerouslySetInnerHTML={{__html: description }} />
        </Box>
    )
}

export default About;