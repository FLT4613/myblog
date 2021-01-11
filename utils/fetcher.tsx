export type FetcherResult<T> = {
    contents: T[],
    totalCount: number,
    offset: number,
    limit: number
}
type HeadersWithAPIKey = HeadersInit & { 'X-API-KEY': string }

const fetcher = <T,>(path: string): Promise<FetcherResult<T>> => fetch(
    `${process.env.API_HOST_URL}${path}`,
    {
        headers: {
            'X-API-KEY': process.env.API_KEY,
        } as HeadersWithAPIKey
    })
    .then(res => res.json())

export { fetcher }