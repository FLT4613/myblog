import Link from 'next/Link'
import { useRouter } from 'next/router'
import React from 'react'

type HeaderItemType = {
    isActive: boolean
    label: string;
}

type HeaderLinkType = {
    path: string
}

const HeaderItem: React.FC<HeaderItemType> = ({ isActive, label }) => (
    <div className={`p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${isActive ? "underline font-bold" : ""}`}>
        {label}
    </div>
)

const HeaderLink: React.FC<HeaderLinkType & HeaderItemType> = React.forwardRef(({ path, children, ...props }, ref: React.Ref<HTMLAnchorElement>) => (
    <Link href={path} passHref>
        <a href={path} ref={ref}>
            <HeaderItem {...props} />
        </a>
    </Link>
))

const headerNamePathMapper = {
    Blog: "/",
    About: "/about"
}

const Header = () => {
    const router = useRouter()
    return (
        <div className="flex justify-end m-2">
            {Object.entries(headerNamePathMapper).map(([label, path]) => <HeaderLink key={path} path={path} isActive={router.pathname == path} label={label} />)}
        </div>
    )
}

export default Header