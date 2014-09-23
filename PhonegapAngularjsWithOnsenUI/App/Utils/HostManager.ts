module CordovaOnsen.Utils {
    export class HostManager {
        static buildHostUrl(methodUrl: string) {
            var host = "http://api.tecalog.com";
            return host + "/" + methodUrl;
        }
    }
} 