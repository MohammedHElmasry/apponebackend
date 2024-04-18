import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

export const connect = async ()=>{
   await mongoose.connect(process.env.DB_URL).then(res=>{
    console.log(`connect db`);
   }).catch(err=>{
    console.log(err);
   });
}


export default connect