import React, {FC} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Link } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const Socials: FC = () => {

    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item>
                    <Link href='https://www.facebook.com/josh.kroslowitz' color='inherit'>
                        <FacebookIcon />
                    </Link>
                    
                </Grid>
                <Grid item>
                    <Link href="https://www.linkedin.com/in/joshkros/" color='inherit'>
                        <LinkedInIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='https://github.com/citizensnipz' color='inherit'>
                        <GitHubIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='https://twitter.com/SnipzCitizen' color='inherit'>
                        <TwitterIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='https://www.reddit.com/user/CitizenSn1pz' color='inherit'>
                        <RedditIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='https://msng.link/o/?@CitizenSnipz=tg' color='inherit'>
                        <TelegramIcon />
                    </Link>
                </Grid>

                
            </Grid>
        </Box>
    )
}

export default Socials;