import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {

  }
}))

export default props => {
  const classes = useStyles()
  return (
    <div className={ classes.root }>
      <h2>Welcome to IBTA-HANARE HOME PAGE</h2>
      <ul>
        <li><p></p></li>
        <li><p></p></li>
      </ul>
      
    </div>
  )
}
