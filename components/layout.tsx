import Link from 'next/Link'
import React from 'react'

const Layout: React.FC = ({ children }) => (
    <div className="flex justify-center">
        <Link href={"/about"}>aa</Link>
        <div className="sm:w-4/5 md:w-3/5 max-w-3xl">
            {children}
        </div>
    </div>
)

export default Layout