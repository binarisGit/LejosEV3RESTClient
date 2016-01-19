namespace BinarisEV3 {

    export class EV3SoundAdapterService implements ISoundAdapterService {
        private httpService: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/sound";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService):ng.IPromise<any> {
            this.httpService = $http;
        }

        public buzz():ng.IPromise<any> {
            var url = this.BASE_URL + '/buzz';
            return this.httpService.get(url);
        }

        public beep():ng.IPromise<any> {
            var url = this.BASE_URL + '/beep';
            return this.httpService.get(url);
        }
    }
}