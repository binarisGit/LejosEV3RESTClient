namespace BinarisEV3 {
    export class EV3DifferentialPilotAdapterService implements IDifferentialPilotAdapterService {
        private http: ng.IHttpService;
        private BASE_URL: string = "http://localhost:63342/AngularJsHttpIntegrationTests/index.html";

        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        public run(distance: number) {
            return this.http.get(this.BASE_URL + '/run/' + distance);
        }

        public rotate(degrees: number) {
            return this.http.get(this.BASE_URL + '/rotate/' + degrees);
        }

        public buzz() {
            return this.http.get(this.BASE_URL + '/buzz');
        }

        public beep() {
            return this.http.get(this.BASE_URL + '/beep');
        }
    }
}