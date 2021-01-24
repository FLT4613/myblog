import Image from 'next/image'

const About = () => (
    <div className="flex justify-center">
        <div>
            <div className="text-center text-4xl">About</div>
            <Image width="256" height="256" className="rounded-full" src={process.env.NEXT_PUBLIC_PROFILE_SRC || ""} />
            <div className="text-center text-xl">FLT</div>
            <div className="flex justify-evenly">
                <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferer"><Image width="32" height="32" src={process.env.NEXT_PUBLIC_GITHUB_LOGO || ""} /></a>
                <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noopener noreferer"><Image width="32" height="32" src={process.env.NEXT_PUBLIC_TWITTER_LOGO || ""} /></a>
            </div>
        </div>
    </div>
)

export default About