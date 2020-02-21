import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'

import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Works from './pages/Works'
import Teams from './pages/Teams'

import Header from './Header'
import Menu from './Menu'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    margin: '56px auto',
  }
}))

export default props => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width: 600px)')
  return (
    <div>
    { matches
      ? <div className={ classes.root }>
          <Typography variant="h5" component="p">
            Please access with mobile.
          </Typography>
        </div>
      : <Router>
          <Header />
          <Menu />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
        </Router>
    }
    </div>
  )
}
