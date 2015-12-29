namespace BinarisEV3 {
    export class EV3DifferentialPilotRestClientController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotRestClient: IDifferentialPilotRestClient;

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

    }
}