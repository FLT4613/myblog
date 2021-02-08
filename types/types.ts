export type Post = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    body: string,
    thumbnail: string
}

export type ContentList<T> = {
    contents: T[],
    totalCount: number,
    offset: number,
    limit: number
}
