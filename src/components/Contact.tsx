import { Box, Link } from "@mui/material";
import React, { FC } from "react"
import { useAppSelector } from "../app/hooks";
import { selectHeroContact } from "../features/hero/heroSlice";
import Socials from '../components/Socials';

const Contact: FC = () => {
    const currentMenu = useAppSelector(selectHeroContact);

    return (
        <Box>
            {currentMenu == 'email' ? 
                <Link href="mailto:" color='inherit'>jkroslowitz@gmail.com</Link>    :
                <Socials />
            }
        </Box>
    )
}

export default Contact;