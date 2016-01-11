namespace BinarisEV3 {
    export interface IDifferentialPilotAdapterService {
        resetHttpSendDelay(): void;
        run(distance: number): any;
        rotate(degrees: number): any;
        stop(): any;
    }
}