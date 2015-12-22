namespace BinarisEV3 {
    export class EV3DifferentialPilotRestClientController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotRestClient: IDifferentialPilotRestClient;

        constructor($scope: ng.IScope, EV3DifferentialPilotRestClient: IDifferentialPilotRestClient) {
            this.$scope = $scope;
            this.ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;
        }

        public run(distance: number) {
            this.ev3DifferentialPilotRestClient.run(10);
        }

        public rotate(degrees: number) {
            this.ev3DifferentialPilotRestClient.rotate(45);
        }

        public buzz() {
            this.ev3DifferentialPilotRestClient.buzz();
        }

        public beep() {
            this.ev3DifferentialPilotRestClient.beep();
        }

    }
}