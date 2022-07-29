import User from '../models/AuthModel.js'
import bcrypt from 'bcrypt'
import { generateToken } from './verifyUser.js';

export const register = async (req, res) => {
    const { name, username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const cryptedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        username,
        password: cryptedPassword
    });

    try {
        await user.save();
        const token = await generateToken(username);
        res.cookie('aid', token);
        return res.status(200).send('Successful');
    } catch (e) {
        console.log(e);
        return res.status(401).json({
            'error': e
        });
    }
}