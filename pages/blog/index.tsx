import PostList from '../../components/post/list'
import { getPosts } from '../../utils/fetcher'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

export async function getStaticProps() {
    const data = await getPosts()
    return { props: data }
}

const Component = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <Head>
            <title>Blog</title>
        </Head>
        <PostList {...props} />
    </>
)

export default Component