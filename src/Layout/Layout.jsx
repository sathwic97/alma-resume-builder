import React from 'react'
import { Navbar } from "../components/Navbar"
import { Box } from '@mui/material'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Box sx={{position:'relative',top:'5px'}}>
            <main>
                {children}
            </main>
            </Box>
        </>
    )
}

export default Layout