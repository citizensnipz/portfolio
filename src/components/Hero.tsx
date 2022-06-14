import { Box } from "@mui/material";
import React, { FC, Fragment } from "react"
import { useAppSelector } from "../app/hooks";
import { selectHeroCurrent, selectHeroDescription, selectHeroTitle } from "../features/hero/heroSlice";

const Hero: FC = () => {
    const current = useAppSelector(selectHeroCurrent);
    const title = useAppSelector(selectHeroTitle);
    const description = useAppSelector(selectHeroDescription);

    return (
        <Box>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: description }} />
                
            
            

        </Box>
    )
}

export default Hero;