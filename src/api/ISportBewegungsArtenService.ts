interface ISportBewegungsArtenService {
        laufen(laufstrecke: number) : ng.IPromise<any>;
        anhalten() : ng.IPromise<any>;
        linksWenden() : ng.IPromise<any>;
        rechtsWenden() : ng.IPromise<any>;
    }
