export interface LookupFetchRequest {}

export interface LookupFetchResponse {
    mapping: Record<string, string>;
}

export interface LookupFetcherConfig {
    githubUser?: string;
    githubRepository?: string;
    customPayload?: Record<string, string>;
}

export interface LookupFetcher {
    fetch(req: LookupFetchRequest): Promise<LookupFetchResponse>;
}