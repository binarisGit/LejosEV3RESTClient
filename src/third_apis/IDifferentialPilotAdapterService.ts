namespace BinarisEV3 {
    export interface IDifferentialPilotAdapterService {
        run(distance: number): ng.IPromise<any>;
        rotate(degrees: number): ng.IPromise<any>;
        stop(): ng.IPromise<any>;
    }
}