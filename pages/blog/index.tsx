import PostList from '../../components/post/list'
import { ContentList, Post } from '../../components/post/types'
import { getPosts } from '../../utils/fetcher'

export async function getStaticProps() {
    const data = await getPosts()
    return { props: { data } }
}

const Component = (props: ContentList<Post>) => (
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