import { FC, Dispatch, SetStateAction } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const SubmitEmail: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <section className="shadow-2xl bg-gray-300 mx-auto w-[30%] mt-8 px-8">
        <h1 className="font-bold text-lg py-5">Forgot Password?</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full">
                <Input
                    label="Email/Mobile"
                    placeholder="email/mobile"
                    required
                    rounded
                    type="text"
                />
            </div>
            <p className="py-6 text-sm">
                Please enter your Email ID/Mobile Number. We will send a mail & SMS with a link to
                reset your password. This link will be valid only for 2 hours
            </p>
            <div className="flex space-x-4 w-full py-4">
                <Button text="cancel" color="three" rounded />
                <Button text="submit" color="three" rounded submit onClick={() => setNext(2)} />
            </div>
        </form>
    </section>
);

export default SubmitEmail;
