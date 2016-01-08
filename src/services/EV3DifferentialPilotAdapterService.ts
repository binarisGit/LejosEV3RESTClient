namespace BinarisEV3 {

    export class EV3DifferentialPilotAdapterService implements IDifferentialPilotAdapterService {
        public static IID: string = "EV3DifferentialPilotAdapterService";
        private http: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/differentpilot";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        public run(distance: number) {
            return this.http.get(this.BASE_URL + '/run/' + distance);
        }

        public rotate(degrees: number) {
            console.log("rotate");
            return this.http.get(this.BASE_URL + '/rotate/' + degrees);
        }

        public stop() {
            return this.http.get(this.BASE_URL + '/stop');
        }
    }
}