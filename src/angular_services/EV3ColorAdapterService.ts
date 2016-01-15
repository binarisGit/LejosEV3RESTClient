namespace BinarisEV3 {

    export class EV3ColorAdapterService implements IColorAdapterService {
        public static IID: string = "EV3ColorAdapterService";
        private delayedHttpService: IDelayedHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/color";

        static $inject = ["DelayedHttpService"];

        constructor(DelayedHttpService: IDelayedHttpService) {
            this.delayedHttpService = DelayedHttpService;
        }

        public getColor(): any {
            var url = this.BASE_URL + '/getcolor';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }
    }
}