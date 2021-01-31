import { ContentList, Post } from '../../types/types'
import ListItem from './listitem'

const Component = (props: ContentList<Post>) => (
    <div className="flex flex-wrap">
        {props.contents.map((v, i) => (
            <a href={`/blog/${v.id}`} className="m-1">
                <ListItem key={i} {...v} />
            </a>
        ))}
    </div>
)

export default Component