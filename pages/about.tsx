const About = () => (
    <div className="flex justify-center">
        <div>
            <div className="text-center text-4xl">About</div>
            <img width="256" height="256" className="rounded-full" src={process.env.PROFILE_SRC} />
            <div className="text-center text-xl">FLT</div>
            <div className="flex justify-evenly">
                <a href={process.env.GITHUB_URL} target="_blank" rel="noopener noreferer"><img width="32" height="32" src={process.env.GITHUB_LOGO} /></a>
                <a href={process.env.TWITTER_URL} target="_blank" rel="noopener noreferer"><img width="32" height="32" src={process.env.TWITTER_LOGO} /></a>
            </div>
        </div>
    </div>
)

export default About