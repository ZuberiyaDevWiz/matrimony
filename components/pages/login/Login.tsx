/* eslint-disable react/no-unescaped-entities */
import Input from 'components/form/Input';
import Button from 'components/form/Button';
import CheckBox from 'components/form/Checkbox';
import Navbar from 'components/common/Navbar/Navbar';
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

            <div className=" m-auto pt-10 pb-10 bg-gradient-to-r px-2 h-screen from-violet-500 to-fuchsia-500">
                <div className="m-auto xl:w-2/6 lg:w-2/4 rounded-2xl bg-white opa p-1 ">
                    <div className="px-8 text-center">
                        <h3 className="pt-4 md:mb-2 lg:text-2xl font-semibold">
                            Hello, Welcome back!
                        </h3>
                        <p className="md:mb-4 mb-2 md:text-base text-sm text-gray-700">
                            please enter your Login details
                        </p>
                    </div>

                    <form
                        className="lg:px-8 lg:pt-6 lg:pb-4 lg:mb-4 p-3 space-y-2 bg-white"
                        onSubmit={submitHandler}
                    >
                        <div>
                            <Input
                                label="Email"
                                placeholder="Enter your Email.."
                                type="email"
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

                            <CheckBox
                                name="checkbox"
                                label=" Remember me"
                                options={['Remember Me']}
                            />
                        </div>

                        <div className="my-6 py-4 text-center">
                            <Button
                                text="Login"
                                color="one"
                                rounded
                                submit
                                additionalButtonStyles="text-white font-bold"
                            />
                        </div>
                        <div className="text-center">
                            <p>OR</p>
                        </div>
                        <div className=" py-4 text-center">
                            <Button
                                onClick={otpHandler}
                                text="Login with OTP"
                                color="two"
                                rounded
                                additionalButtonStyles="text-black font-semibold no-fill"
                            />
                        </div>
                        <div className="md:flex md:justify-between">
                            <div className="text-center text-sm text-blue-500 align-baseline hover:text-blue-800">
                                <Link href="/forgotPassword">Forgot Password</Link>
                            </div>
                            <div className="text-center text-sm text-blue-500 align-baseline hover:text-blue-800">
                                <Link href="/register">Don't have an account? Sign up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
