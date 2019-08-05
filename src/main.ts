import { app } from './app'
import * as http from 'http';
import { MongoHelper } from './mongo.helper';
import * as  mongoose from 'mongoose';

import { LakeService } from './lake.service'
import { LakeModel } from './models/lake.schema';

let lakes = [{ name: 'salmon_lake', type: 'salmon', salmon: 0, tuna: 0 },
{ name: 'tuna_lake', type: 'tuna', salmon: 0, tuna: 0 },
{ name: 'mixed_lake', type: 'mixed', salmon: 0, tuna: 0 }];

const PORT = 8080;
const MONGO_URI = 'mongodb://localhost:27017/lakedb';
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
    console.info(`Listening on port ${PORT}`);
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    mongoose.connection.on('open', () => {
        console.info('Connected to Mongo');

        mongoose.connection.db.listCollections({ name: 'lakes' })
            .next(function (err, collinfo) {
                if (collinfo) {
                    console.log('The collection exists');
                    onDbChecked();
                } else {
                    LakeModel.collection.insertMany(lakes, function (err) {
                        if (err) {
                            return console.error(err);
                        } else {
                            console.log("Multiple documents inserted to Collection");
                            onDbChecked();
                        }
                    });
                }
            });
    });
});
mongoose.connection.on('error', (err: any) => {
    console.error(err);
});

function onDbChecked() {
    new LakeService().runInterval();

}

