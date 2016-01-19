namespace BinarisEV3 {

    export class EV3ColorAdapterService implements IColorAdapterService {
        private httpService: ng.IHttpService;
        private COLOR_ENDPOINT_URL: string = AppConfig.BASE_URL + "http://10.0.0.44:8080/color";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public getColor(): ng.IPromise<any> {
            var url = this.COLOR_ENDPOINT_URL + '/getcolor';
            return this.httpService.get(url);
        }

    }
}