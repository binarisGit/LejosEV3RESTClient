namespace BinarisEV3 {

    import IIntervalService = angular.IIntervalService;
    import IQService = angular.IQService;

    export class EV3ColorAdapterService implements IColorAdapterService {
        public static IID: string = "EV3ColorAdapterService";
        private delayedHttpService: IDelayedHttpService;
        private intervalService: IIntervalService;
        private qService: IQService;
        private BASE_URL: string = "http://10.0.0.44:8080/color";

        static $inject = ["DelayedHttpService", "$interval", "$q"];

        constructor(DelayedHttpService: IDelayedHttpService, $interval: IIntervalService, $q: IQService) {
            this.delayedHttpService = DelayedHttpService;
            this.intervalService = $interval;
            this.qService = $q;
            console.log($q);
        }

        public getColor(): any {
            var url = this.BASE_URL + '/getcolor';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }

        public getSpecificColor(): any {
            var colorCode = 5;
            var url = this.BASE_URL + '/getcolor';
            //var $interval: IIntervalService = this.intervalService;
            var delayedHttpService: IDelayedHttpService = this.delayedHttpService;
            var qService = this.qService;

            //var getColorInterval = $interval(getColor, 1000, 3);

            getColor(null).then(getColor).then(getColor);

            function getColor(promise: any) {
                console.log(promise);

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
}