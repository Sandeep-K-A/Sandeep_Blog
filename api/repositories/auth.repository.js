import User from "../models/user.model.js";

export const createNewUser = async (username, email, password) => {

    const newUser = new User({
        username,
        email,
        password
    });
    await newUser.save()
    return true;

}