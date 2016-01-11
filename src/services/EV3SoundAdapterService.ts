namespace BinarisEV3 {

    export class EV3SoundAdapterService implements ISoundAdapterService {
        public static IID: string = "EV3SoundAdapterService";
        private delayedHttpService: IDelayedHttpService;
        private BASE_URL: string = "http://10.0.0.44:8080/differentpilot";

        static $inject = ["DelayedHttpService"];

        constructor(DelayedHttpService: IDelayedHttpService) {
            this.delayedHttpService = DelayedHttpService;
        }

        public buzz() {
            var url = this.BASE_URL + '/buzz';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }

        public beep() {
            var url = this.BASE_URL + '/beep';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        }
    }
}