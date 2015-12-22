namespace BinarisEV3 {

    export interface IDifferentialPilotRestClientController {
        run(distance: number): any;
        rotate(degrees: number): any;
        beep(): any;
        buzz(): any;
    }

}