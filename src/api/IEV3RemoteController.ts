namespace BinarisEV3 {

    export interface IEV3RemoteController {
        run(distance: number): any;
        rotate(degrees: number): any;
        beep(): any;
        buzz(): any;
        getColor(): any;
        getNumberOfActions(): number;
        addAction(action: string): void;
        clearActionList(): void;
    }

}