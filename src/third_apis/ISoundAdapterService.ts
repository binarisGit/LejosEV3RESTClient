interface ISoundAdapterService {
    buzz(): ng.IPromise<any>;
    beep(): ng.IPromise<any>;
}

export = ISoundAdapterService;
