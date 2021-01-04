type FetcherResult = {
    contents: Array<Post>,
    totalCount: number,
    offset: number,
    limit: number
}

type Post = {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    revisedAt: Date,
    title: string,
    body: string
}

type HeadersWithAPIKey = HeadersInit & { 'X-API-KEY': string }

const fetcher = (path: string): Promise<FetcherResult> => fetch(
    `${process.env.API_HOST_URL}${path}`,
    {
        headers: {
            'X-API-KEY': process.env.API_KEY,
        } as HeadersWithAPIKey
    })
    .then(res => res.json())

export async function getStaticProps() {
    const posts = await fetcher('/blog')
    return { props: { posts } }
}

const Posts = (props: { posts: FetcherResult }) => <div>
    {props.posts.contents.map(v => <div key={v.title}><h1>{v.title}</h1><div dangerouslySetInnerHTML={{ __html: v.body }}></div></div>)}
</div>


export default Posts