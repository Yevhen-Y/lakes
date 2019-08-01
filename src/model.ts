import { IFishModel } from './fish.model'
export interface ILakeModel {
    id?: number,
    name: string,
    fish: Array<IFishModel>
}