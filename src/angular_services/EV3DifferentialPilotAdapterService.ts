namespace BinarisEV3 {

    export class EV3DifferentialPilotAdapterService implements IDifferentialPilotAdapterService {
        private httpService: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/differentialpilot";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public run(distance: number) {
            var url = this.BASE_URL + '/run/' + distance;
            console.log(url);
            return this.httpService.get(url);
        }

        public rotate(degrees: number) {
            var url = this.BASE_URL + '/rotate/' + degrees;
            return this.httpService.get(url);
        }

        public stop() {
            var url = this.BASE_URL + '/stop';
            return this.httpService.get(url);
        }
    }
}