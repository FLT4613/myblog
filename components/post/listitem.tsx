import { Post } from '../../types/types'
import { format, parseISO } from 'date-fns'

const Component = (props: Post) => (
    <div className="bg-white flex flex-col w-44 list-item">
        <div className="bg-gray-300 h-32">
            { props.thumbnail && <img className="w-full h-full" src={props.thumbnail}></img>}
        </div>
        <div className="p-2">
            <div className="text-xs">{format(parseISO(props.publishedAt), 'yyyy/MM/dd')}</div>
            <div className="text-md font-bold line-clamp-3 break-all">{props.title}</div>
        </div>
    </div>
)

export default Component