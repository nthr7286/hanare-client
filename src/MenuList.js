import React, {
  useReducer,
  useMemo,
  useContext,
  forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

import { Context, RENDERLINK } from './contexts/Context'

const useStyle = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const ListItemLink = ({ primary, to }) => {
  const { dispatch } = useContext(Context)
  const renderLink = useMemo(() => forwardRef(
    (itemProps, ref) => <Link to={ to } ref={ ref } { ...itemProps } />
  ), [to])
  return (
    <ListItem
      button
      component={ renderLink }
      onClick={ () => dispatch({ type: RENDERLINK, title: primary }) }
    >
      <ListItemText primary={ primary } />
    </ListItem>
  )
}

export default props => {
  const classes = useStyle()
  const CONTACTUS = 'CONTACTUS'
  const JOINUS = 'JOINUS'

  const initialState = {
    contactUs: false,
    joinUs: false
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case CONTACTUS:
        return {
          ...state,
          contactUs: !state.contactUs
        }
      case JOINUS:
        return {
          ...state,
          joinUs: !state.joinUs
        }
      default: 
        return state
    }
  } 

  const [expand, dispatch] = useReducer(reducer, initialState)

  return (
    <List>

      <ListItemLink to="/home" primary="Home" />
      <ListItemLink to="/about" primary="About" />
      <ListItemLink to="/activities" primary="Activities" />
      <ListItemLink to="/works" primary="Works" />
      <ListItemLink to="/teams" primary="Teams" />

      <ListItem button onClick={ () => dispatch({ type: CONTACTUS }) }>
        <ListItemText primary="Contact Us"/>
        { expand.contactUs ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
      </ListItem>
      <Collapse in={ expand.contactUs } timeout={ 300 } unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={ classes.nested }
            component="a"
            href="https://www.facebook.com"
            target="_blank"
          >
            <ListItemIcon>
              <FacebookIcon style={{ color: '#3B5998' }} />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.twitter.com/ibta_hanare"
            target="_blank"
            className={ classes.nested }
          >
            <ListItemIcon>
              <TwitterIcon  style={{ color: '#55ACEE' }} />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={ () => dispatch({ type: JOINUS }) }>
        <ListItemText primary="Join Us"/>
        { expand.joinUs ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
      </ListItem>
      <Collapse in={expand.joinUs} timeout={300} unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={ classes.nested }
            component="a"
            href="https://itba.doorkeeper.jp/"
            target="_blank"
          >
            <ListItemText primary="Doorkeeper" style={{ color: '#0F4FF4' }}/>
          </ListItem>
        </List>
      </Collapse>

    </List>
  )
}
  
