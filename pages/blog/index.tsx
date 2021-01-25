import Post, { PostData } from '../../components/post'

export type ContentList<T> = {
    contents: T[],
    totalCount: number,
    offset: number,
    limit: number
}

export async function getStaticProps() {
    const data = await fetcher<PostData>('/blog')
    return { props: { data } }
}

const Posts = (props: { data: ContentList<PostData> }) => (
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