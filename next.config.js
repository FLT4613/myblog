module.exports = {
    images: {
        domains: [
            process.env.NEXT_PUBLIC_PROFILE_SRC,
            process.env.NEXT_PUBLIC_GITHUB_LOGO,
            process.env.NEXT_PUBLIC_TWITTER_LOGO
        ].map(url => new URL(url).hostname)
    },
}
