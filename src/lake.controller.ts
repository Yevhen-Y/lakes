// import { LakeModel } from './models/lake.schema';
// import { Controller, Route, Get, Post, Put, Delete, Body } from 'tsoa';
// import { ILakeModel } from './models/lake.interface';


// @Route('/lakes')
// export class LakeController extends Controller {

//     @Get('/')
//     public async getAll(): Promise<ILakeModel[]> {
//         try {
//             let items: any = await LakeModel.find({});
//             items = items.map((item) => { return { id: item._id, name: item.name, salmon: item.salmon, tuna: item.tuna } });
//             return items;
//         } catch (err) {
//             this.setStatus(500);
//             console.error("Caught error", err)
//         }
//     }

//     @Get('/{id}')
//     public async get(id: string): Promise<ILakeModel> {
//        let item: any =  await LakeModel.findById({ _id: id })
//            return item;
//     }

// //---------------------------------------------------------------
//     @Post('/')
//     public async create(@Body() requestBody: ILakeModel): Promise<void> {
//         const item = LakeModel.create({ name: requestBody.name, salmon: requestBody.salmon, tuna: requestBody.tuna });
//         await item;
//     }

//     @Put('/{id}')
//     public async update(id: string, @Body() requestBody: ILakeModel): Promise<void> {
//         await LakeModel.findByIdAndUpdate({ _id: id }, { name: requestBody.name, salmon: requestBody.salmon, tuna: requestBody.tuna })
//     }


//     @Delete('/{id}')
//     public async remove(id: string): Promise<void> {
//         await LakeModel.findOneAndRemove(id);
//     }


// }
