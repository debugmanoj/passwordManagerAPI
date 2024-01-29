import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
export default mongoose