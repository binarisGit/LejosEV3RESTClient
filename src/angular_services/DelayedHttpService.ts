/**
 * Created by Christian on 11.01.2016.
 */

namespace BinarisEV3 {

    export class DelayedHttpService implements IDelayedHttpService {
        public DELAY_TIME: number = 100;
        private http: ng.IHttpService;
        private delay: number = this.DELAY_TIME;
        private timeout: ng.ITimeoutService;

        static $inject = ["$http", "$timeout"];

        constructor($http: ng.IHttpService, $timeout: ng.ITimeoutService) {
            this.http = $http;
            this.timeout = $timeout;
        }

        public sendDelayedHttpRequest(url: string) {
            this.delay = this.delay + this.DELAY_TIME;

            console.log(url + " " + this.delay);

            var http = this.http;
            return this.timeout(function () {
                console.log("sending request....");
                return http.get(url);
            }, this.delay);


        }

        public resetHttpSendDelay() {
            this.delay = this.DELAY_TIME;
        }

    }
}