import React, {
  forwardRef,
  useContext,
} from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import MenuList from './MenuList'
import { Context, OPENMENU, CLOSEMENU } from './contexts/Context'

const useStyle = makeStyles(theme => ({
  root: {
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  dialog: {
    marginTop: 56,
  },
  dialogTitle: {
    position: 'relative',
    textAlign: 'center'
  },
  iconButton: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))


const Transition = forwardRef(
  (props, ref) => <Slide direction='up' ref={ ref } { ...props } />
)

export default props => {
  const classes = useStyle()
  const { state: {menuOpen}, dispatch } = useContext(Context)

  return (
    <div className={ classes.root }>
      <Dialog
        open={ menuOpen }
        onClose={ () => dispatch({ type: CLOSEMENU }) }
        fullScreen
        TransitionComponent={ Transition }
        transitionDuration={{ enter: 300, exit: 100 }}
        className={ classes.dialog }
        PaperProps={{
          style: { borderRadius: '16px 16px 0 0' }
        }}
      >
        <DialogTitle className={ classes.dialogTitle }>
          HANARE
          <IconButton
            onClick={ () => dispatch({ type: CLOSEMENU }) }
            color='primary'
            className={ classes.iconButton }
            children={ <ExpandMoreIcon /> }
          />
        </DialogTitle>
        <DialogContent>
          <MenuList />
        </DialogContent>
      </Dialog>
      <Fab
        onClick={ () => dispatch({ type: OPENMENU }) }
        color='primary'
        className={ classes.fab }
        children={ <MenuIcon /> }
      />
    </div>
  )
}
