import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Works from './pages/Works'
import Teams from './pages/Teams'

import Header from './Header'
import Menu from './Menu'

export default props => {
  return (
    <Router>
      <Header title="Home"/>
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
  )
}
