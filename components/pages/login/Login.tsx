/* eslint-disable react/no-unescaped-entities */
import Input from 'components/form/Input';
import Button from 'components/form/Button';
import Image from 'next/image';
import CheckBox from 'components/form/Checkbox';
import Navbar from 'components/common/Navbar/Navbar';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, FormEvent, ChangeEvent } from 'react';
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

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value;
    };

    return (
        <section>
            <div className="">
                <Navbar />
            </div>

            <div className=" m-auto pt-10 pb-10 bg-gradient-to-r px-2  from-violet-500 to-fuchsia-500">
                <div className="m-auto lg:w-2/6 rounded-2xl bg-white opa p-5 ">
                    <div className="px-8 text-center">
                        <h3 className="pt-4 mb-2 lg:text-2xl font-semibold">
                            Hello, Welcome back!
                        </h3>
                        <p className="mb-4 text-base text-gray-700">
                            please enter your Login details
                        </p>
                    </div>

                    <form
                        className="lg:px-8 lg:pt-6 lg:pb-4 lg:mb-4 space-y-2 bg-white"
                        onSubmit={submitHandler}
                    >
                        <div>
                            <Input
                                label="Email"
                                placeholder="Enter your Email.."
                                rounded
                                required
                                changeHandler={changeHandler}
                            />
                        </div>
                        <div className="">
                            <Input
                                label="Password"
                                placeholder="Enter your Password.."
                                type="password"
                                rounded
                                required
                                changeHandler={changeHandler}
                            />
                        </div>
                        <span className="pl-2 ">
                            <CheckBox
                                name="checkbox"
                                label=" Remember me"
                                options={['Remember Me']}
                            />
                        </span>
                        <div className="my-6 py-4 text-center">
                            <Button
                                text="Login"
                                color="one"
                                rounded
                                submit
                                additionalButtonStyles="text-white font-bold"
                            />
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="my-6 py-4 text-center">
                            <Button
                                onClick={otpHandler}
                                text="Login with OTP"
                                color="two"
                                rounded
                                additionalButtonStyles="text-black font-semibold no-fill"
                            />
                        </div>
                        <div className="text-center text-sm text-blue-500 align-baseline hover:text-blue-800">
                            <Link href="/forgotPassword">Forgot Password</Link>
                        </div>
                        <div className="text-center text-sm text-blue-500 align-baseline hover:text-blue-800">
                            <Link href="/register">Don't have an account? Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
