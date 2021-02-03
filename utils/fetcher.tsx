import { Post, ContentList } from '../types/types'
import { GetStaticPropsContext } from 'next'
type HeadersWithAPIKey = HeadersInit & { 'X-API-KEY': string }

const fetcher = <T,>(path: string): Promise<T> => fetch(
    `${process.env.API_HOST_URL}${path}`,
    {
        headers: {
            'X-API-KEY': process.env.API_KEY,
        } as HeadersWithAPIKey
    })
    .then(res => res.json())

const getPostIds = async () => {
    const posts = await fetcher<ContentList<Post>>('/blog')
    return posts.contents.map(v => v.id)
}

const getPosts = async () => {
    const posts = await fetcher<ContentList<Post>>('/blog')
    return posts
}

const getPost = async (context: GetStaticPropsContext) => {
    const id = context.params?.id
    const draftKey = context.previewData?.draftKey ? `draftKey=${context.previewData.draftKey}` : ''
    const post = await fetcher<Post>(`/blog/${id}${draftKey}`)
    return post
}

export { getPostIds, getPosts, getPost }