import Link from 'next/Link'

const Header = () => (
    <div className="flex justify-end m-2">
        <div className="pr-3">
            <Link href={"/"}>Blog</Link>
        </div>
        <div className="pr-3">
            <Link href={"/about"}>About</Link>
        </div>
    </div>
)

export default Header