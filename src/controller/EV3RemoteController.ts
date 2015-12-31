namespace BinarisEV3 {
    export class EV3RemoteController implements IEV3RemoteController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotRestClient: IDifferentialPilotRestClient;
        private actionList: Array<string> = [];

        constructor($scope: ng.IScope, EV3DifferentialPilotRestClient: IDifferentialPilotRestClient) {
            this.$scope = $scope;
            this.ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;
        }

        // TODO: evaluate returned promises and write according tests!
        public run(distance: number) {
            return this.ev3DifferentialPilotRestClient.run(10);
        }

        public rotate(degrees: number) {
            return this.ev3DifferentialPilotRestClient.rotate(45);
        }

        public buzz() {
            return this.ev3DifferentialPilotRestClient.buzz();
        }

        public beep() {
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