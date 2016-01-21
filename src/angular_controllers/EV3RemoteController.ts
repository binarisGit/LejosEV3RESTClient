namespace BinarisEV3 {
    export class EV3RemoteController implements IEV3RemoteController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private ev3ColorAdapterService: IColorAdapterService;

        static $inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService"];

        constructor($scope: ng.IScope, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService) {
            this.$scope = $scope;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
        }

        public run(distance: number): ng.IPromise<any> {
            console.log("controller: run");
            return this.ev3DifferentialPilotAdapterService.run(10);
        }

        public rotate(degrees: number): ng.IPromise<any> {
            console.log("controller: rotate");
            return this.ev3DifferentialPilotAdapterService.rotate(45);
        }

        public buzz(): ng.IPromise<any> {
            console.log("controller: buzz");
            return this.ev3SoundAdapterService.buzz();
        }

        public getColor(): ng.IPromise<any> {
            console.log("controller: getColor");

            var promise = this.ev3ColorAdapterService.getColor().then((response: any)=> {
                console.log("Farbcode: " + response.data.color);
            }, function errorCallback(response: any) {
                console.log("Farbe konnte nicht ermittelt werden. Status:");
                console.log(response.status);
            });
            return promise;
        }

        public beep(): ng.IPromise<any> {
            console.log("controller: beep");
            return this.ev3SoundAdapterService.beep();
        }
    }
}