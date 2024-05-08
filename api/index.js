import express from "express";
import dbConnection from "./utils/databaseConnection.js";
import userRouter from "./routes/user.route.js";

const PORT = 3000;
const app = express();
app.use('/', userRouter)

dbConnection();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})