namespace BinarisEV3 {
    export class EV3RemoteController implements IEV3RemoteController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotRestClient: IDifferentialPilotAdapterService;
        private actionList: Array<string> = [];

        constructor($scope: ng.IScope, EV3DifferentialPilotRestClient: IDifferentialPilotAdapterService) {
            this.$scope = $scope;
            this.ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;
        }

        public run(distance: number) {
            console.log("controller: run");
            return this.ev3DifferentialPilotRestClient.run(10);
        }

        public rotate(degrees: number) {
            console.log("controller: rotate");
            return this.ev3DifferentialPilotRestClient.rotate(45);
        }

        public buzz() {
            console.log("controller: buzz");
            return this.ev3DifferentialPilotRestClient.buzz();
        }

        public beep() {
            console.log("controller: beep");
            return this.ev3DifferentialPilotRestClient.beep();
        }

        getNumberOfActions(): number {
            return this.actionList.length;
        }

        addAction(action: string): void {
            this.actionList.push(action);
        }
    }
}