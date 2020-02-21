import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ContextProvider from './contexts/Context'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Noto Sans JP',
      "Helvetica",
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

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
