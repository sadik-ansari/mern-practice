import { useState } from 'react'
import { ThemeProvider, UserContext, UserProvider } from './context'
import User from './components/User'
import Theme from './components/Theme'

function App() {

  return (
    <>
    <UserProvider>
      <ThemeProvider>
        <User/>
        <Theme/>
      </ThemeProvider>
    </UserProvider>
    </>
  )
}

export default App
