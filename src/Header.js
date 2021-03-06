import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Context } from './contexts/Context'

const useStyles = makeStyles(theme => ({
    root: {
          flexGrow: 1,
          marginBottom: 56,
        },
    title: {
          flexGrow: 1,
        },
}));

export default props => {
  const classes = useStyles()
  const { state: {appBarTitle} } = useContext(Context)
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            HANARE - {appBarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
