import React from 'react'
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import useStyles from './styles';

import {Actors, MovieInfo, Profile, Movies, NavBar} from './index.js'

const App = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <NavBar />
            <main className={classes.content}>
            <div className={classes.toolbar} />
              <Routes>
                  <Route exact path="/movie/:id" element={ <MovieInfo /> } />
                  <Route exact path="/actors" element={ <Actors /> } />
                  <Route exact path="/profile" element={ <Profile /> } />
                  <Route exact path="/" element={ <Movies /> } />
              </Routes>
            </main>
      </Router>
    </div>
  )
}

export default App 