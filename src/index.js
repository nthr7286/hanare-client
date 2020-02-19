import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ContextProvider from './contexts/Context'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme()

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <ContextProvider>
    <CssBaseline />
    <App />
  </ContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
