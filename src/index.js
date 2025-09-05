import dotenv from"dotenv";
import connectDB from "./db/index.js";

dotenv.config(
    {
        path: "./env"
    }
)

connectDB()







// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on('Error', (error)=>{
//             console.log("error", error)
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Listening on ${process.loadEnvFile.PORT}`)
//         })
//     }
//     catch(error){
//         console.error('Error: ', error)
//         throw error;
//     }
// })()