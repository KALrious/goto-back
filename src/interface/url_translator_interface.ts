export interface LookupFetchResponseTranslator {
    wowMapping: Record<string, string>;
}

export interface UrlTranslatorRequest {
    wowUrl: string;
}

export interface UrlTranslatorResponse {
    fullUrl: string;
}

export interface UrlTranslatorConfig {
    fetcherResponse: LookupFetchResponseTranslator;
}

export interface UrlTranslator {
    convert(req: UrlTranslatorRequest): UrlTranslatorResponse;
}