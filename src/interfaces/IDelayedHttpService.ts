
namespace BinarisEV3 {
    export interface IDelayedHttpService {
        sendDelayedHttpRequest(url: string): void;
        resetHttpSendDelay(): void;
    }
}