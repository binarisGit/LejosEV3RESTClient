import IDifferentialPilotAdapterService = require("../third_apis/IDifferentialPilotAdapterService");
import AppConfig = require("../app.conf");

class EV3DifferentialPilotAdapterService implements IDifferentialPilotAdapterService {
    public static IID = "EV3DifferentialPilotAdapterService";
    private httpService: ng.IHttpService;
    private PILOT_ENDPOINT_URL: string = AppConfig.BASE_URL + "differentialpilot";

    static $inject = ["$http"];

    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }

    public run(distance: number): ng.IPromise<any> {
        var url = this.PILOT_ENDPOINT_URL + '/run/' + distance;
        return this.httpService.get(url);
    }

    public rotate(degrees: number): ng.IPromise<any> {
        var url = this.PILOT_ENDPOINT_URL + '/rotate/' + degrees;
        return this.httpService.get(url);
    }

    public stop(): ng.IPromise<any> {
        var url = this.PILOT_ENDPOINT_URL + '/stop';
        return this.httpService.get(url);
    }

    public quickStop(): angular.IPromise<any> {
        var url = this.PILOT_ENDPOINT_URL + '/quickStop';
        return this.httpService.get(url);
    }

    public getMovementIncrement(): angular.IPromise<any> {
        var url = this.PILOT_ENDPOINT_URL + '/getmovementincrement';
        return this.httpService.get(url);
    }
}
export = EV3DifferentialPilotAdapterService;
