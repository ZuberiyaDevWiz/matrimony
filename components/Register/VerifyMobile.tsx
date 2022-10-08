/* eslint-disable react/no-unescaped-entities */
import { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Router from 'next/router';

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/login');
};

const VerifyMobile: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({ setNextStep }) => (
    <form onSubmit={submitHandler}>
        <section className="shadow-2xl bg-gray-300 w-[30%] mx-auto my-6 px-6">
            <h1 className="font-bold text-lg py-8">Please verify your mobile number</h1>
            <div className="flex space-x-56 pb-4">
                <p className="text-lg">we have sent a PIN </p>
                <a href="/" className="text-blue-700">
                    Edit
                </a>
            </div>
            <div className="flex items-center space-x-10  ">
                <div className="">
                    <Input label="Enter PIN" placeholder="PIN" required rounded type="number" />
                </div>
                <div className="w-full pt-8">
                    <Button text="verify" color="four" submit />
                </div>
            </div>
            <div className="flex space-x-40 py-8">
                <p>Didn't receive the PIN?</p>
                <a href="/" className="text-blue-700">
                    Resend PIN
                </a>
            </div>
        </section>
    </form>
);

export default VerifyMobile;
