import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from 'database/connect';
import UserSChema from 'database/models/UserSChema';

const Signup = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body }: { body: TypeUser } = req;
    await connectToDatabase();

    try {
        const newUser = await UserSChema.create(body);
        if (!newUser)
            return res.status(400).json({
                message: 'Something went wrong',
            });
        return res.status(200).json({
            message: 'Account created successfully',
            data: newUser,
        });
    } catch (err: any) {
        return res.status(400).json({
            message: err.message,
        });
    }
};

export default Signup;
