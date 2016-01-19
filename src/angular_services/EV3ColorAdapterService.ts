namespace BinarisEV3 {

    export class EV3ColorAdapterService implements IColorAdapterService {
        private httpService: ng.IHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/color";

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public getColor(): any {
            var url = this.BASE_URL + '/getcolor';
            return this.httpService.get(url);
        }

        public getSpecificColor(): any {
            /*
             var colorCode = 5;
             var url = this.BASE_URL + '/getcolor';
             var httpService: ng.IHttpService = this.httpService;
             var qService = this.qService;

             //var getColorInterval = $interval(getColor, 1000, 3);

             this.getColor(null).then(function (promise: any) {
             this.getColor();

             if (promise.data.color === colorCode) {
             console.log("color matches!");
             return qService.reject('some error occured');
             }
             else {
             return delayedHttpService.sendDelayedHttpRequest(url);
             }
             });

             function checkColor(color: number) {
             var deferred: IDeferred<any> = qService.defer();
             var newPromise: IPromise<any> = deferred.promise;

             if (color != 13) {
             console.log("color does not match. Sending next request...");
             delayedHttpService.sendDelayedHttpRequest(url);
             deferred.resolve(color);
             } else {
             console.log("color matches. No further requests!");
             deferred.reject(n);
             }

             /*

             if (promise != null) {
             if (promise.data.color === colorCode) {
             console.log("color matches!");
             return qService.reject('some error occured');
             }

             } else {
             return delayedHttpService.sendDelayedHttpRequest(url);
             }

             /*
             .then(function successCallback(response: any) {
             console.log("getSpecificColor: " + response.data.color);

             if (response.data.color == colorCode) {
             console.log("Farbe wurde erkannt. Scannen abgeschlossen");
             $interval.cancel(getColorInterval);
             }

             }, function errorCallback(response: any) {
             console.log(response);
             });

             }
             */
        }

    }
}