namespace BinarisEV3 {
    export class EV3RestService {
        private http: ng.IHttpService;
        private BASE_URL: string = "10.0.0.44:8080/someEntryPoint";

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
            return this.http.get(this.BASE_URL + '/rotate');
        }

        public beep() {
            return this.http.get(this.BASE_URL + '/rotate');
        }
    }
}