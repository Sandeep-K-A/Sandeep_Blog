import bcryptjs from "bcryptjs";
import { createNewUser } from "../repositories/auth.repository.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {

        if (!username || !email || !password || username === '' || email === '' || password === '') {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const hashPassword = bcryptjs.hashSync(password, 10);

        const newUser = await createNewUser(username, email, hashPassword);

        if (!newUser) {
            return res.status(500).json({ message: "signup failed..!!" });
        }
        return res.status(200).json("signup successfull..");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}