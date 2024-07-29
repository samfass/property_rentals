import mongoose from 'mongoose';

let connected =false;
const connectDB =async () =>{
    mongoose.set('strictQuery,true');
    //if the database is already connected, don't connect again
   if (connected ){
    console.log('MongoDB is alreadt connected ..');
    return;
   }  
   //connect to nongooDB
   try{
    await mongoose.connect(process.env.MONOGODB_URI);
   }
