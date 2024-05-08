import express from "express";
import dbConnection from "./utils/databaseConnection.js";

const PORT = 3000;

const app = express();

dbConnection();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})