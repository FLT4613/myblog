import PostList from '../../components/post/list'
import { getPosts } from '../../utils/fetcher'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
    const data = await getPosts()
    return { props: data }
}

const Component = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <div className="my-5 text-5xl">Diary</div>
        <PostList {...props} />
    </>
)

export default Component