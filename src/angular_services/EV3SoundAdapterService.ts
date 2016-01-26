namespace BinarisEV3 {

    export class EV3SoundAdapterService implements ISoundAdapterService {
        private httpService: ng.IHttpService;
        private SOUND_ENDPOINT_URL: string = AppConfig.BASE_URL + "sound";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public buzz(): ng.IPromise<any> {
            var url = this.SOUND_ENDPOINT_URL + '/buzz';
            return this.httpService.get(url);
        }

        public beep(): ng.IPromise<any>{
            var url = this.SOUND_ENDPOINT_URL + '/beep';
            //console.log("sent beep request...: "+this.httpService);
            return this.httpService.get(url);
        }
    }
}