namespace BinarisEV3 {

    export class EV3SoundAdapterService implements ISoundAdapterService {
        private httpService: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/sound";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public buzz() {
            var url = this.BASE_URL + '/buzz';
            return this.httpService.get(url);
        }

        public beep() {
            var url = this.BASE_URL + '/beep';
            return this.httpService.get(url);
        }
    }
}