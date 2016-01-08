namespace BinarisEV3 {
    export class EV3RemoteController implements IEV3RemoteController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private actionList: Array<string> = [];

        constructor($scope: ng.IScope, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService) {
            this.$scope = $scope;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
        }

        public run(distance: number) {
            console.log("controller: run");
            return this.ev3DifferentialPilotAdapterService.run(10);
        }

        public rotate(degrees: number) {
            console.log("controller: rotate");
            return this.ev3DifferentialPilotAdapterService.rotate(45);
        }

        public buzz() {
            console.log("controller: buzz");
            return this.ev3SoundAdapterService.buzz();
        }

        public beep() {
            console.log("controller: beep");
            return this.ev3SoundAdapterService.beep();
        }

        getNumberOfActions(): number {
            return this.actionList.length;
        }

        addAction(action: string): void {
            this.actionList.push(action);
        }
    }
}