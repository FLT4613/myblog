import { format, parseISO } from 'date-fns'
import { Post } from '../../types/types'

const Component = (props: Post) => (
    <div className="flex flex-col px-5 pt-8 pb-16 shadow-md rounded-md overflow-hidden bg-white" key={props.title}>
        <div className="text-l">
            {format(parseISO(props.publishedAt), 'yyyy/MM/dd')}
        </div>
        <div className="text-3xl py-3">{props.title}</div>
        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: props.body }}></div>
    </div>
)

export default Component