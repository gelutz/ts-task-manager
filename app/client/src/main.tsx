import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { globalTheme } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={globalTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
