import Post, { PostData } from '../components/post'
import { fetcher, FetcherResult } from '../utils/fetcher'

export async function getStaticProps() {
    const data = await fetcher<PostData>('/blog')
    return { props: { data } }
}

const Posts = (props: { data: FetcherResult<PostData> }) => (
    <div className="flex flex-col mx-20">
        <div className="text-5xl">Diary</div>
        {props.data.contents.map(v => (
            <Post {...v} />
        ))}
    </div>
)

export default Posts