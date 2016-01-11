namespace BinarisEV3 {

    export class EV3DifferentialPilotAdapterService implements IDifferentialPilotAdapterService {
        public static IID: string = "EV3DifferentialPilotAdapterService";
        private delayedHttpService: IDelayedHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/differentpilot";

        static $inject = ["DelayedHttpService"];

        constructor(DelayedHttpService: IDelayedHttpService) {
            this.delayedHttpService = DelayedHttpService;
        }

        public run(distance: number) {
            var url = this.BASE_URL + '/run/' + distance;
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }

        public rotate(degrees: number) {
            var url = this.BASE_URL + '/rotate/' + degrees;
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }

        public stop() {
            var url = this.BASE_URL + '/stop';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }
    }
}