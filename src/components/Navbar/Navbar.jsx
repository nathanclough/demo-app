import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar style={{alignItems:'flex-start'}}position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DemoApp
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                    <Button color="inherit" onClick={() => navigate("/profile")}>Profile</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Navbar