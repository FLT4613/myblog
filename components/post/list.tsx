import { useState, useCallback, useRef } from 'react'
import { ContentList, Post } from '../../types/types'
import ListItem from './listitem'

const Component = (props: ContentList<Post>) => {
    const [query, setQuery] = useState("")
    const handler = useRef<NodeJS.Timeout>()
    const onInput = useCallback(e => {
        handler.current && clearTimeout(handler.current)
        handler.current = setTimeout(() => {
            setQuery(e.target.value)
        }, 500)
    }, [query])

    return (
        <div>
            <input className="border my-10 p-2 w-full" type="text" onKeyDown={onInput}></input>
            <div className="flex flex-wrap">
                {props.contents.filter(v => !query || (v.title.includes(query) || v.body.includes(query))).map((v, i) => (
                    <a href={`/blog/${v.id}`} className="m-1">
                        <ListItem key={i} {...v} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Component