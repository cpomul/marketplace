    import * as React from 'react';
    import Box from '@mui/material/Box';
    import BottomNavigation from '@mui/material/BottomNavigation';
    import BottomNavigationAction from '@mui/material/BottomNavigationAction';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import Typography from "@mui/material/Typography";

    export default function SimpleBottomNavigation() {
        const handleGithubLink = () => {
            window.location.href = "https://github.com/cpomul/marketplace-interface";
        }
        return (
            <Box sx={{ width: 300 }} className="bottom-nav">
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label="Github" icon={<GitHubIcon />} onClick={handleGithubLink}/>
                    <Typography variant="body2" align="center" color="textSecondary" className="footer-text">
                        Copyright © 2024 cpomul
                    </Typography>
                </BottomNavigation>
            </Box>
        );
    }