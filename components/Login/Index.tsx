import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, FormEvent } from 'react';
import Router from 'next/router';
import Link from 'next/link';

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
};

const otpHandler = () => {
    Router.push('/loginOtp');
};

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="shadow-2xl bg-gray-300 w-[30%] mx-auto px-6 my-8">
            <h1 className="font-bold text-lg py-5 ">Login</h1>
            <form onSubmit={submitHandler}>
                <div className="w-full  ">
                    <Input
                        label="Email/Mobile"
                        placeholder="Email/Mobile"
                        required
                        rounded
                        type="email"
                    />
                </div>
                <div className="py-6 w-full relative ">
                    <Input
                        label="Password"
                        placeholder="password"
                        required
                        rounded
                        type={show ? 'text' : 'password'}
                    />
                    {show ? (
                        <AiOutlineEye
                            onClick={() => setShow(!show)}
                            className="absolute top-1/2 translate-y-0.5 right-3"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShow(!show)}
                            className="absolute top-1/2 translate-y-0.5 right-3"
                        />
                    )}
                </div>
                <div className="flex">
                    <input type="checkbox" />
                    <p>keep me logged in</p>
                    <Link href="/forgotPassword">
                        <p className="pl-32 text-blue-700 cursor-pointer">Forgot password?</p>
                    </Link>
                </div>
                <div className=" py-7 w-full mx-auto  ">
                    <Button text="Login" color="two" rounded submit />
                </div>
                <div className="flex text-xs space-x-4 items-center w-1/2 mx-auto">
                    <hr className="w-full h-[2px] bg-black opacity-20" />
                    <p>OR</p>
                    <hr className="w-full h-[2px] bg-black opacity-20" />
                </div>
                <div className="w-full mt-4 mx-auto pb-4">
                    <Button text="Login with OTP" color="two" rounded onClick={otpHandler} />
                </div>
            </form>
        </section>
    );
};

export default Login;
