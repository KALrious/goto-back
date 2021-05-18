import {
    LookupFetcher,
    LookupFetcherConfig,
    LookupFetchRequest,
    LookupFetchResponse,
} from "./interface";
import { Octokit } from "@octokit/rest";
import yaml from "js-yaml";

class GitHubLookupFetcher implements LookupFetcher {
    config_: LookupFetcherConfig;
    constructor(config: LookupFetcherConfig) {
        this.config_ = config;
    }
    async fetch(req: LookupFetchRequest): Promise<LookupFetchResponse> {
      const octokit = new Octokit();
      const configResponse = await octokit.rest.repos.getContent({
        owner: this.config_.githubUser,
        repo: this.config_.githubRepository,
        path: "config.yaml",
      });
      const configStr = Buffer.from(configResponse.data["content"], "base64").toString();
      const config = yaml.load(configStr);
      const res: LookupFetchResponse = { mapping: {} };
      res.mapping = config['mapping'];
      return res;
    }
}