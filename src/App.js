import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'

const App = () => {
  const theme = useTheme()
  return (
    <Box color={theme.palette.red}>
      hello duniya .....................................
    </Box>
  );
}

export default App
