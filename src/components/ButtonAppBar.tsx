import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';



export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute" sx={
                {
                    // Transparent background
                    backgroundColor: 'transparent',
                    display: 'flex',
                    // Remove shadow
                    boxShadow: 'none',
                }
            }>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{
                        flexGrow: 1,
                        color: 'white',
                        fontWeight: 'bold',

                    }}>
                        ICEY MUSIC
                    </Typography>
                    <Button color="inherit" href="/book">
                        Book
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}