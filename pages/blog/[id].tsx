import PostDetail from '../../components/post/detail'
import { Post } from '../../types/types'
import { getPost, getPostIds } from '../../utils/fetcher'
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<Post> = async ({ params }) => {
    if (!params || typeof params.id !== 'string') {
        throw new Error;
    }
    const data = await getPost(params.id)
    return { props: data }
}

export async function getStaticPaths() {
    const ids = await getPostIds()
    return {
        paths: ids.map(v => ({ params: { id: v } })),
        fallback: false
    }
}

const Component = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <PostDetail {...props} />
}

export default Component