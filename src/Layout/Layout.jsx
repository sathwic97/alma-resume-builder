import React from 'react'
import { Navbar } from "../component/Navbar"
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout