/**
 * Created by Christian on 11.01.2016.
 */

namespace BinarisEV3 {

    export class DelayedHttpService implements IDelayedHttpService {
        private http: ng.IHttpService;
        private delay: number = 1000;
        private timeout: ng.ITimeoutService;

        static $inject = ["$http", "$timeout"];

        constructor($http: ng.IHttpService, $timeout: ng.ITimeoutService) {
            this.http = $http;
            this.timeout = $timeout;
        }

        public sendDelayedHttpRequest(url: string) {
            this.delay = this.delay + 1000;

            var http = this.http;
            return this.timeout(function () {
                return http.get(url);
            }, this.delay);
        }

        public resetHttpSendDelay() {
            this.delay = 1000;
        }

    }
}