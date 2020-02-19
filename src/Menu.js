import React, {
  useState,
  forwardRef,
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

const useStyle = makeStyles(theme => ({
  fab: {
    position: 'absolute',
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
  (props, ref) => <Slide direction='up' ref={ref} {...props} />
)

export default props => {
  const classes = useStyle()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Dialog
        open={ open }
        onClose={ handleClose }
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
            onClick={ handleClose }
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
        onClick={ handleOpen }
        color='primary'
        className={ classes.fab }
        children={ <MenuIcon /> }
      />
    </div>
  )
}
