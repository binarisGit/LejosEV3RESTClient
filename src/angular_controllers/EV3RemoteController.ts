namespace BinarisEV3 {
    export class EV3RemoteController implements IEV3RemoteController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private ev3ColorAdapterService: IColorAdapterService;
        private actionList: Array<string> = [];
        private delayedHttpService: IDelayedHttpService;

        static $inject = ["$scope", "DelayedHttpService", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService"];

        constructor($scope: ng.IScope, DelayedHttpService: IDelayedHttpService, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService) {
            this.$scope = $scope;
            this.delayedHttpService = DelayedHttpService;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
        }

        public run(distance: number) {
            console.log("controller: run");
            this.delayedHttpService.resetHttpSendDelay();
            return this.ev3DifferentialPilotAdapterService.run(10);
        }

        public rotate(degrees: number) {
            console.log("controller: rotate");
            this.delayedHttpService.resetHttpSendDelay();
            return this.ev3DifferentialPilotAdapterService.rotate(45);
        }

        public buzz() {
            this.delayedHttpService.resetHttpSendDelay();
            console.log("controller: buzz");
            return this.ev3SoundAdapterService.buzz();
        }

        getColor(): any {
            this.delayedHttpService.resetHttpSendDelay();
            console.log("controller: getColor");

            var promise = this.ev3ColorAdapterService.getColor().then(function successCallback(response: any) {
                console.log("Farbcode: " + response.data.color);
            }, function errorCallback(response: any) {
                console.log("Farbe konnte nicht ermittelt werden. Status:");
                console.log(response.status);
            });
            return promise;
        }

        public beep() {
            this.delayedHttpService.resetHttpSendDelay();
            console.log("controller: beep");
            return this.ev3SoundAdapterService.beep();
        }

        public getNumberOfActions(): number {
            return this.actionList.length;
        }

        public addAction(action: string): void {
            this.actionList.push(action);
        }

        public clearActionList(): void {
            this.actionList = [];
        }
    }
}