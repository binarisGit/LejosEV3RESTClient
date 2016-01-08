namespace BinarisEV3 {

    export class EV3SoundAdapterService implements ISoundAdapterService {
        public static IID: string = "EV3SoundAdapterService";
        private http: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/differentpilot";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        public buzz() {
            return this.http.get(this.BASE_URL + '/buzz');
        }

        public beep() {
            return this.http.get(this.BASE_URL + '/beep');
        }
    }
}