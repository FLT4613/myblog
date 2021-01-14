import React from 'react'
import Header from './header'
const Layout: React.FC = ({ children }) => (
    <div className="flex justify-center">
        <div className="sm:w-4/5 md:w-3/5 max-w-3xl">
            <Header />
            {children}
        </div>
    </div>
)

export default Layout