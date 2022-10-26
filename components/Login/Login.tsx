/* eslint-disable react/no-unescaped-entities */
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Image from 'next/image';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, FormEvent } from 'react';
import Router from 'next/router';
import Link from 'next/link';

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/profile');
};

const otpHandler = () => {
    Router.push('/loginOtp');
};

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="flex w-full h-screen">
            <div className=" ">
                <Image
                    src="/images/img-7.jpeg"
                    alt="login image"
                    width={600}
                    height={570}
                    layout="fixed"
                    className=" object-cover h-screen"
                />
            </div>
            <div className="w-1/2 mx-36 mt-5 ">
                <h1 className="font-bold text-[24px] text-center mb-4">Login</h1>
                <form onSubmit={submitHandler}>
                    <div className="w-full mb-4 ">
                        <Input
                            label="Enter Email or Mobile"
                            placeholder="Email or Mobile.."
                            required
                            rounded
                            type="email"
                        />
                    </div>
                    <div className="w-full relative mb-4 ">
                        <Input
                            label="Password"
                            placeholder="Password"
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
                    <div className="flex flex-cols">
                        <div className="flex ">
                            <input type="checkbox" required />
                            <p className="whitespace-nowrap">keep me logged in</p>
                        </div>
                        <div>
                            <Link href="/forgotPassword">
                                <p className="pl-32 text-blue-700 cursor-pointer">
                                    Forgot password?
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className=" py-7 w-full mx-auto  ">
                        <Button text="Login" color="two" rounded submit />
                    </div>
                </form>
                <div className="flex text-xs space-x-4 items-center w-1/2 mx-auto">
                    <hr className="w-full h-[2px] bg-black opacity-20" />
                    <p>OR</p>
                    <hr className="w-full h-[2px] bg-black opacity-20" />
                </div>
                <div className="w-full mt-4 mx-auto pb-4">
                    <Button text="Login with OTP" color="two" rounded onClick={otpHandler} />
                </div>

                <div className="flex justify-center space-x-2">
                    <p>Don't have an account? </p>
                    <Link href="register">
                        <span className="hover:underline cursor-pointer hover:underline-offset-2 tracking-wide">
                            Create an account
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
