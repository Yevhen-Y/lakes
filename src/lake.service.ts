import { LakeModel } from './models/lake.schema';
import { Route, Get, Put, Body } from 'tsoa';
import { ILakeModel } from './models/lake.interface';
import { LakeType } from './models/lake-type.enum';

@Route('/lakes')
export class LakeService {

    @Get('/{type}')
    public async get(type: string): Promise<ILakeModel> {
        let item: any = await LakeModel.findOne({ type: type });
        return item;
    }

    @Put('/{id}')
    public async update(id: string, @Body() requestBody: ILakeModel): Promise<void> {
        await LakeModel.findByIdAndUpdate({ _id: id }, { name: requestBody.name, type: requestBody.type, salmon: requestBody.salmon, tuna: requestBody.tuna })
    }

    public getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    public runInterval() {

        setInterval(() => {

            let randomNumber = this.getRandomNumber(0, 4);

            if (randomNumber === 0) {
                this.get(LakeType[randomNumber]).then((res) => {
                    this.update(res.id, { name: res.name, type: res.type, salmon: res.salmon + 1, tuna: res.tuna })
                })
            }
            else if (randomNumber === 1) {
                this.get(LakeType[randomNumber]).then((res) => {
                    this.update(res.id, { name: res.name, type: res.type, salmon: res.salmon, tuna: res.tuna + 1 })
                })
            } else if (randomNumber === 2) {
                this.get(LakeType[randomNumber]).then((res) => {
                    this.update(res.id, { name: res.name, type: res.type, salmon: res.salmon + 1, tuna: res.tuna })
                })
            } else if (randomNumber === 3) {
                this.get(LakeType[randomNumber - 1]).then((res) => {
                    this.update(res.id, { name: res.name, type: res.type, salmon: res.salmon, tuna: res.tuna + 1 })
                })
            }
        }, 1000)
    }
}
