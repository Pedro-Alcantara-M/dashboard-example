import './App.css'
import MainLayout from './components/mainLayout'
import { ThemeProvider } from '@mui/material'
import {THEME} from './theme'

function App() {

  return (
    <ThemeProvider theme={THEME}>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
