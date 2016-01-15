
namespace BinarisEV3 {
    import IPromise = angular.IPromise;
    export interface IDelayedHttpService {
        sendDelayedHttpRequest(url: string): IPromise<any>;
        resetHttpSendDelay(): void;
    }
}