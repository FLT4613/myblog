import Post, { PostData } from '../components/post'
import { fetcher, FetcherResult } from '../utils/fetcher'

export async function getStaticProps() {
    const data = await fetcher<PostData>('/blog')
    return { props: { data } }
}

const Posts = (props: { data: FetcherResult<PostData> }) => (
    <div className="flex justify-center">
        <div className="sm:w-4/5 md:w-3/5 max-w-3xl">
            <div className="my-5 text-5xl">Diary</div>
            <div>
                {props.data.contents.map(v => (
                    <div className="my-10">
                        <Post {...v}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Posts