namespace BinarisEV3 {
    export interface IBallSportAktionenService {
        trifftBall() : boolean;
        schaueBaseAn(): number;
        gibtZustimmendesHandzeichen(): void;
        gibtAblehnendesHandzeichen(): void;
        schlageBall(): number;
    }
}