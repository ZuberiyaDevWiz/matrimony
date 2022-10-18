import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from 'database/connect';
import UserSChema from 'database/models/UserSChema';
import { env } from 'process';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const Signup = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body }: { body: TypeUser } = req;
    await connectToDatabase();

    try {
        const { password } = body;
        const hashedPassword = await hash(password, 8);
        const newUser = await UserSChema.create({ ...body, password: hashedPassword });
        if (!newUser)
            return res.status(400).json({
                message: 'Something went wrong',
            });

        const token = await sign(
            {
                id: newUser._id,
                email: newUser.email,
            },
            env.JWT_SECRET || 'dwakjfbfb',
            {
                expiresIn: 60 * 10,
            }
        );

        return res.status(200).json({
            message: 'Account created successfully',
            data: newUser,
            token,
        });
    } catch (err: any) {
        return res.status(400).json({
            message: err.message,
        });
    }
};

export default Signup;
