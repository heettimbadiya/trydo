import { useTheme } from '@emotion/react'
import React from 'react'
import Home from './pages/Home/Home'

const App = () => {
  const theme = useTheme()
  return (
    <>
      <Home />
    </>
  );
}

export default App
