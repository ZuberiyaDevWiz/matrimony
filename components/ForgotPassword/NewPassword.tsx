/* eslint-disable react-hooks/rules-of-hooks */
import { useState, FC, Dispatch, SetStateAction } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Router from 'next/router';

const NewPassword: FC<{
    setNext: Dispatch<SetStateAction<number>>;
}> = ({ setNext }) => {
    const [show, setShow] = useState(false);
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const submitHandler = () => {
        Router.push('/login');
        if (newpassword !== confirmpassword) {
            alert('passwords do not match');
        } else {
            alert('passwords matched');
        }
    };

    return (
        <section className="shadow-2xl bg-gray-300 mx-auto w-[30%] px-6 mt-8">
            <h1 className="font-bold text-lg py-4">Enter New Password</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="py-6 w-full relative">
                    <Input
                        label="New Password"
                        placeholder="enter new password"
                        required
                        rounded
                        type={show ? 'text' : 'password'}
                    />
                    {show ? (
                        <AiOutlineEye
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    )}
                </div>
                <div className="w-full relative">
                    <Input
                        label="Confirm Password"
                        placeholder="enter confirm password"
                        required
                        rounded
                        type={show ? 'text' : 'password'}
                    />
                    {show ? (
                        <AiOutlineEye
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShow(!show)}
                            className="absolute top-1/20 -translate-y-5 right-3"
                        />
                    )}
                </div>
                <div className="w-full py-8">
                    <Button text="Submit" color="three" rounded submit onClick={submitHandler} />
                </div>
            </form>
        </section>
    );
};

export default NewPassword;
