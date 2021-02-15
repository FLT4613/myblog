export type Post = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    body: string,
    thumbnail: {
        url: string,
        width: number,
        height: number
    }
}

export type ContentList<T> = {
    contents: T[],
    totalCount: number,
    offset: number,
    limit: number
}
