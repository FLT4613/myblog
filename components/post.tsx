import { format, parseISO } from 'date-fns'

export type PostData = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    body: string
}

const Post = (props: PostData) => (
    <div className="flex flex-col py-3" key={props.title}>
        <div className="text-l">
            {format(parseISO(props.publishedAt), 'yyyy/MM/dd')}
            </div>
        <div className="text-3xl">{props.title}</div>
        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
    </div>
)

export default Post