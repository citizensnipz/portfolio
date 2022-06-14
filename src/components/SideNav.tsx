import { Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSideNav } from "../features/sideNav/sideNavSlice";
import { setDescription } from "../features/hero/heroSlice";
import {
    backgroundDesc,
    skillsDesc,
    workHistoryDesc
} from '../constants/descriptions';

interface SideNavProps {
    isMobile: boolean;
}



const SideNav: FC<SideNavProps> = (props) => {
    const [desc, setDesc] = useState("");
    const dispatch = useAppDispatch();
    const menu = useAppSelector(selectSideNav);
    const direction = props.isMobile ? 'column' : 'row';

    const handleClick = (item: string) => {
        switch (item) {
            case "background":
                dispatch(setDescription(backgroundDesc))
                break;
            case "skills":
                dispatch(setDescription(skillsDesc))
                break;
            case "work history":
                dispatch(setDescription(workHistoryDesc))
                break;
        }
        
    }

        return (
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: `${direction}`}}>
                {menu.map((item, index) => (
                    <Button key={index} onClick={() => handleClick(item)}>{item}</Button>
                ))}
            </Box>
        )
}

export default SideNav;