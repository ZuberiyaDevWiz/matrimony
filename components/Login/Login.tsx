import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Image from 'next/image';
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
        <section className="flex w-full h-screen">
            <div className="w-1/2 ">
                <Image
                    src="/images/img-7.jpeg"
                    alt="login image"
                    width={600}
                    height={570}
                    layout="fixed"
                    className=" object-cover"
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
                        <div className="flex items-start">
                            <input type="checkbox" />
                            <p className="whitespace-nowrap">keep me logged in</p>
                        </div>
                        <div>
                            <Link href="/forgotPassword">
                                <p className="pl-32 text-blue-700">Forgot password?</p>
                            </Link>
                        </div>
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
            </div>
        </section>
    );
};

export default Login;
