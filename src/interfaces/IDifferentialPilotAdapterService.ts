namespace BinarisEV3 {
    export interface IDifferentialPilotAdapterService {
        run(distance: number): any;
        rotate(degrees: number): any;
        beep(): any;
        buzz(): any;
        stop(): any;
    }
}