import { env } from "./env.js"
import mongoose from "mongoose"

export async function connectDB(){
    try {
        await mongoose.connect(`${env.MONGO_URI}`)
        console.log(`conectado a mongodb`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}