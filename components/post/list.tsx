import { ContentList, Post } from './types'

const Component = (props: ContentList<Post>) => (
    <div>
        {props.contents.map((v, i) => (
            <div key={i} className="my-10">
                <div>{v.id}</div>
            </div>
        ))}
    </div>
)

export default Component