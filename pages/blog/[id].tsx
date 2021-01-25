import Post, { PostData } from '../../components/post'
import { getPost, getPostIds } from '../../utils/fetcher'
import { GetStaticProps } from 'next';

type Props = { id: string }

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
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

const comp = (props: PostData) => {
    return <Post {...props}/>
}

export default comp