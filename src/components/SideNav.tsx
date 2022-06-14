import { Link } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useAppSelector } from "../app/hooks";
import { selectSideNav } from "../features/sideNav/sideNavSlice";

interface SideNavProps {
    isMobile: boolean;
}

const SideNav: FC<SideNavProps> = (props) => {
    const menu = useAppSelector(selectSideNav);
    const direction = props.isMobile ? 'column' : 'row';


        return (
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: `${direction}`}}>
                {menu.map((item, index) => (
                    <Link key={index}>{item}</Link>
                ))}
            </Box>
        )
}

export default SideNav;