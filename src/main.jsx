import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import Theme from './global/styles/theme.js'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
