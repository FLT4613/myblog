import PostList from '../../components/post/list'
import { getPosts } from '../../utils/fetcher'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
    const data = await getPosts()
    return { props: data }
}

const Component = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <PostList {...props} />
    </>
)

export default Component