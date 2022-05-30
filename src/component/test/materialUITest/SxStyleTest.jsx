import React from "react"
import Button from '@mui/material/Button'

const style = {
    border: 1,
    color: 'success.main',
    boxShadow: 1,
    width: 150
}

export default function App() {
    return <Button sx={style}>Example</Button>
}