import React from 'react'
import { Navbar } from "../components/Navbar"
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>
            <main>
                {children}
            </main>
            </div>
        </>
    )
}

export default Layout