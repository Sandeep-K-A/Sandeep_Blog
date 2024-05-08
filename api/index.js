import express from "express";
import dbConnection from "./utils/databaseConnection.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const PORT = 3000;
const app = express();


dbConnection();

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);