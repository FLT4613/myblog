import Post, { PostData } from '../components/post'
import { fetcher, FetcherResult } from '../utils/fetcher'

export async function getStaticProps() {
    const data = await fetcher<PostData>('/blog')
    return { props: { data } }
}

const Posts = (props: { data: FetcherResult<PostData> }) => (
    <>
        <div className="my-5 text-5xl">Diary</div>
        <div>
            {props.data.contents.map((v, i) => (
                <div key={i} className="my-10">
                    <Post {...v} />
                </div>
            ))}
        </div>
    </>
)

export default Posts