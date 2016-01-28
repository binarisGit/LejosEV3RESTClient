interface IBallSportAktionenService {
    trifftBall() : boolean;
    schaueBaseAn(): ng.IPromise<number>;
    gibtZustimmendesHandzeichen(): ng.IPromise<any>;
    gibtAblehnendesHandzeichen(): ng.IPromise<any>;
    schlageBall(): number;
}
