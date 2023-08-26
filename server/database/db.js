

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// const URL = "mongodb://127.0.0.1:27017/test"
const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-06zaif0-shard-00-00.rqitonl.mongodb.net:27017,ac-06zaif0-shard-00-01.rqitonl.mongodb.net:27017,ac-06zaif0-shard-00-02.rqitonl.mongodb.net:27017/?ssl=true&replicaSet=atlas-vgt6qs-shard-0&authSource=admin&retryWrites=true&w=majority`
const Connection = async()=>{
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true})
        console.log("database is connected")
    }catch(error){
        console.log('error while connecting with db', error.message)
    }
}

export default Connection;