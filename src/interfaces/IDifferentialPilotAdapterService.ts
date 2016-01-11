namespace BinarisEV3 {
    export interface IDifferentialPilotAdapterService {
        run(distance: number): any;
        rotate(degrees: number): any;
        stop(): any;
    }
}