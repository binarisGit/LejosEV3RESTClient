namespace BinarisEV3 {

    export interface ISportBewegungsArtenService {
        laufen(laufstrecke: number) : void;
        anhalten() : void;
        linksWenden() : void;
        rechtsWenden() : void;
    }
}