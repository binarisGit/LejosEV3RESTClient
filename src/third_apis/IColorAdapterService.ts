
namespace BinarisEV3 {
    export interface IColorAdapterService {
        getColor(): ng.IPromise<any>;
        getSpecificColor(): ng.IPromise<any>;
    }
}