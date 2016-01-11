namespace BinarisEV3 {

    export class EV3DifferentialPilotAdapterService implements IDifferentialPilotAdapterService {
        public static IID: string = "EV3DifferentialPilotAdapterService";
        private http: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/differentpilot";
        private delay: number = 1000;
        private timeout: ng.ITimeoutService;

        static $inject = ["$http", "$timeout"];

        constructor($http: ng.IHttpService, $timeout: ng.ITimeoutService) {
            this.http = $http;
            this.timeout = $timeout;
        }

        private sendDelayedHttpRequest(url: string) {
            this.delay = this.delay + 1000;

            var http = this.http;
            this.timeout(function () {
                http.get(url);
            }, this.delay);
        }

        public resetHttpSendDelay() {
            this.delay = 1000;
        }

        public run(distance: number) {
            var url = this.BASE_URL + '/run/' + distance;
            this.sendDelayedHttpRequest(url);
            return 999;
        }

        public rotate(degrees: number) {
            var url = this.BASE_URL + '/rotate/' + degrees;
            this.sendDelayedHttpRequest(url);
            return 999;
        }

        public stop() {
            var url = this.BASE_URL + '/stop';
            this.sendDelayedHttpRequest(url);
            return 999;
        }
    }
}