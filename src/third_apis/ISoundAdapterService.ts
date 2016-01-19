namespace BinarisEV3 {
    export interface ISoundAdapterService {
        buzz(): ng.IPromise<any>;
        beep(): ng.IPromise<any>;
    }
}