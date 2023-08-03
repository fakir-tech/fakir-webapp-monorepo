
export interface NLPRequest {
    query: string
}
export interface NLPResponse {
    query: string,
    response: string,
    source?: string // sources?
}