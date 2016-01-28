interface IEV3RemoteController {
    run(distance: number): ng.IPromise<any>;
    rotate(degrees: number): ng.IPromise<any>;
    beep(): ng.IPromise<any>;
    buzz(): ng.IPromise<any>;
    getColor(): ng.IPromise<any>;
}
export = IEV3RemoteController;

