import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
