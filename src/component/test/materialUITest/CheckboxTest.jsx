import React from "react"

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import { green, orange, red } from '@mui/material/colors'

const redTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
})

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
})

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
})

export default function ThemeNesting() {
  return (
    <div>
      <div>
        <Checkbox theme={redTheme} defaultChecked />
      </div>
      <ThemeProvider theme={outerTheme}>
        <Checkbox defaultChecked />
        <ThemeProvider theme={innerTheme}>
            <Checkbox defaultChecked />
        </ThemeProvider>
        <Checkbox defaultChecked />
      </ThemeProvider>
    </div>
  )
}