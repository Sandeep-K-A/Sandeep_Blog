import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_CONNECTION, {
        dbName: 'Sandeep_Blog',
    }).then(() => {
        console.log("Database connected successfully...")
    }).catch((error) => {
        console.log(`Database connection failed ${error.message}`)
    })
}

export default dbConnection;