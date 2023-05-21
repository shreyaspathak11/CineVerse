import React from 'react'
import { AppBar, Toolbar, IconButton, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)'); 
  const theme = useTheme();
  const isAuthenticated = false;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
          color="inherit"
          edge="start"
          style={{ outline: "none" }}
          onClick={() => {}}
          className={classes.menuButton}>

            <Menu /> 
          </IconButton>
          )}
          <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
         </IconButton>
         {!isMobile && "Search... "}
         <div>
            {!isAuthenticated ? (
              <Button onClick={()=>{}} color="inherit">
              Login &nbsp; <AccountCircle />
              </Button>
            ): (
                <Button onClick={()=>{}} color="inherit" component={Link} to={`/profile/:id`} 
                className={classes.linkButton}>
                {isMobile && <>My Movies &nbsp; </> }
                <Avatar
                alt="Profile"
                src="https://avatars.githubusercontent.com/u/58823014?v=4"
                />
                
                </Button> 
              )}
         </div>
         {isMobile && "Search... "}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar