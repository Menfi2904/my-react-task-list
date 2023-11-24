import { ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from "./theme.js"


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
