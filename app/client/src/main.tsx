import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { extendedTheme } from './styles/extendedTheme'
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
