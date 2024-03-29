import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';

import { Outlet, NavLink } from "react-router-dom";


export default function Appbar() {
  return (
    <div className='login-container'>

            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    flexGrow: 1,
                    }}
                >
                    Metro Event
                </Typography>


                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Metro Event
                </Typography> */}
                <NavLink to="/">Login</NavLink>
                <NavLink to="register">Register</NavLink>
                <NavLink to="event">List</NavLink>
                </Toolbar>
            </AppBar>
            </Box>
            <main>
                <Outlet/>
            </main>
    </div>
  );
}
