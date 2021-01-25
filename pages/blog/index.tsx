import PostList from '../../components/post/list'
import { ContentList, Post } from '../../components/post/types'
import { getPosts } from '../../utils/fetcher'

export async function getStaticProps() {
    const data = await getPosts()
    return { props: data }
}

const Component = (props: ContentList<Post>) => (
    <>
        <div className="my-5 text-5xl">Diary</div>
        <PostList {...props} />
    </>
)

export default Component