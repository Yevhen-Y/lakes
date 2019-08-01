import * as mongoose from 'mongoose';
import { IFishModel } from './fish.model';

const LakeSchema = new mongoose.Schema({
    name: String,
    fish: Array<IFishModel>()
});

const LakeModel = mongoose.model('Lake', LakeSchema);
export { LakeModel }