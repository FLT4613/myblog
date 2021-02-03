import PostDetail from '../../components/post/detail'
import { Post } from '../../types/types'
import { getPost, getPostIds } from '../../utils/fetcher'
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<Post> = async context => {
    const data = await getPost(context)
    return { props: data }
}

export async function getStaticPaths() {
    const ids = await getPostIds()
    return {
        paths: ids.map(v => ({ params: { id: v } })),
        fallback: true
    }
}

const Component = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (Object.keys(props).length === 0) {
        return <div>Not Found</div>
    }
    return <PostDetail {...props} />
}

export default Component