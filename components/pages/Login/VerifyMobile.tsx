/* eslint-disable react/no-unescaped-entities */
import { FormEvent } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Router from 'next/router';
import Link from 'next/link';

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/login');
};

const VerifyMobile = () => (
    <form onSubmit={submitHandler}>
        <section className="shadow-2xl bg-gray-300 w-[30%] mx-auto my-6 px-6">
            <h1 className="font-bold text-lg py-8 text-primary-background">
                Please verify your mobile number
            </h1>
            <div className="flex space-x-32 pb-4">
                <p className="text-lg">We have sent a PIN </p>
                <Link href="/">
                    <span className="text-blue-700 cursor-pointer"> Edit</span>
                </Link>
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
                <Link href="/">
                    <p className="text-blue-700">Resend PIN</p>
                </Link>
            </div>
        </section>
    </form>
);

export default VerifyMobile;
