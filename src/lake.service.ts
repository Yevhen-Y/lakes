import { LakeModel } from './lake';
import { IFishModel } from './fish.model';
import { Controller, Route, Get, BodyProp, Post, Put, Delete, Body } from 'tsoa';
import { ILakeModel } from './model';
import LakeTypes from './lake-types';

@Route('/lakes')
export class LakeService {

    // @Get('/{id}')
    // public async get(id: string): Promise<ILakeModel> {
    //     let item: any = await LakeModel.findById({ _id: id })
    //     console.log(item)
    //     return item;
    // }

    // @Put('/{id}')
    // public async update(id: string, @Body() requestBody: ILakeModel): Promise<void> {
    //     await LakeModel.findByIdAndUpdate({ _id: id }, { name: requestBody.name, salmon: requestBody.salmon, tuna: requestBody.tuna })
    // }

    // public getRandomNumber(min: number, max: number) {
    //     return Math.floor(Math.random() * (max - min) + min);
    // };

    public runInterval() {
        
        

        // setInterval(() => {

        //     const salmon_lake: LakeTypes = LakeTypes.salmon;
        //     const tuna_lake: LakeTypes = LakeTypes.tuna;
        //     const mixed_lake: LakeTypes = LakeTypes.mixed;
       

        //     let randomNumber = this.getRandomNumber(0, 4);

        //     if (randomNumber === 0) {
        //         console.log('salmon - ' + randomNumber + ' - ' + salmon_lake);
        //         // get current lake
        //         this.get(salmon_lake).then((res) => {
        //             // update fish quantity
        //             this.update(salmon_lake, { name: res.name, salmon: res.salmon + 1, tuna: res.tuna })
        //         })
        //     }
        //     else if (randomNumber === 1) {
        //         console.log('tuna - ' + randomNumber + ' - ' + tuna_lake);
        //         // get current lake
        //         this.get(tuna_lake).then((res) => {
        //             // update fish quantity
        //             this.update(tuna_lake, { name: res.name, salmon: res.salmon, tuna: res.tuna + 1 })
        //         })
        //     } else if (randomNumber === 2) {
        //         console.log('salmon - ' + randomNumber + ' - ' + mixed_salmon);
        //         // get current lake
        //         this.get(mixed_salmon).then((res) => {
        //             // update fish quantity
        //             this.update(mixed_salmon, { name: res.name, salmon: res.salmon + 1, tuna: res.tuna })
        //         })
        //     } else if (randomNumber === 3) {
        //         console.log('tuna - ' + randomNumber + ' - ' + mixed_tuna);
        //         // get current lake
        //         this.get(mixed_tuna).then((res) => {
        //             // update fish quantity
        //             this.update(mixed_tuna, { name: res.name, salmon: res.salmon, tuna: res.tuna + 1 })
        //         })
        //     }
        // }, 3000)
    }

}
