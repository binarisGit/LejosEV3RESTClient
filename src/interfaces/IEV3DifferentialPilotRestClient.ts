namespace BinarisEV3 {

    export interface IDifferentialPilotRestClient {
        run(distance: number): any;
        rotate(degrees: number): any;
        beep(): any;
        buzz(): any;
    }

}