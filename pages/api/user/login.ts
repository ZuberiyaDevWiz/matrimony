import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from 'database/connect';
import UserSChema from 'database/models/UserSChema';
import { compare } from 'bcrypt';
import { env } from 'process';
import { sign, verify } from 'jsonwebtoken';

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body }: { body: TypeUser } = req;
    const { email, password } = body;
    await connectToDatabase();

    try {
        const user = await UserSChema.findOne({ email });
        if (!user) return res.status(200).json({ message: "user doesn't exists" });
        const checkPassword = await compare(password, user.password);

        if (checkPassword) {
            const token = sign(
                {
                    id: user._id,
                    email: user.email,
                },
                env.JWT_SECRET || 'dwakjfbfb',
                {
                    expiresIn: 60 * 10,
                }
            );

            return res.status(200).json({ message: 'Login Succesfull', token });
        }
        return res.status(400).json({ message: 'password incorrect' });
    } catch (err: any) {
        return res.status(400).json({
            message: err.message,
        });
    }
};

export default Login;
