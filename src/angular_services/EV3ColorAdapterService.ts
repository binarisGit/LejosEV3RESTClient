import IColorAdapterService = require("../third_apis/IColorAdapterService");
import AppConfig = require("../app.conf");

class EV3ColorAdapterService implements IColorAdapterService {
    static IID = "EV3ColorAdapterService";
    private httpService: ng.IHttpService;
    private COLOR_ENDPOINT_URL: string = AppConfig.BASE_URL + "color";

    static $inject = ["$http"];

    constructor($http: ng.IHttpService) {
        this.httpService = $http;

    }

    public getColor(): ng.IPromise<any> {
        var url = this.COLOR_ENDPOINT_URL + '/getcolor';
        return this.httpService.get(url);
    }
}
export = EV3ColorAdapterService;
