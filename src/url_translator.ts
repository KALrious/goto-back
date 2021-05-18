import {
    UrlTranslatorRequest,
    UrlTranslatorResponse,
    UrlTranslator,
    UrlTranslatorConfig,
} from "./interface";

class BasicUrlTranslator implements UrlTranslator {
    config_: UrlTranslatorConfig;
    constructor(config: UrlTranslatorConfig) {
        this.config_ = config;
    }
    convert(req: UrlTranslatorRequest): UrlTranslatorResponse {
        const lookup: Record<string, string> = this.config_.fetcherResponse.wowMapping;
        const link: string = req.wowUrl;
        const res: UrlTranslatorResponse = {
            fullUrl: "/",
        };
        if (link in lookup) {
            res.fullUrl = lookup[link];
        }
        return res;
    }
}