/* eslint-disable @next/next/no-html-link-for-pages */
import { FormEvent } from 'react';
import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Button from 'components/Form/Button';
import Link from 'next/link';
import Router from 'next/router';

const registerHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
};

const clickHandler = () => {
    Router.push('/loginOtp');
};

const Register = () => (
    <>
        <section>
            <div className="items-center w-96 h-[80vh] text-white">
                <form
                    onSubmit={registerHandler}
                    className="shadow-2xl bg-black bg-opacity-50 rounded-md "
                >
                    <div className="p-5  ">
                        <p className="text-center font-bold text-2xl text-primary-text tracking-wider pb-4">
                            Register for Free
                        </p>
                        <Select
                            label="I AM LOOKING FOR MY"
                            name="select"
                            options={[
                                { key: 'op1', value: 'Choose One' },
                                { key: 'op2', value: 'Self' },
                                { key: 'op3', value: 'Daughter' },
                                { key: 'op4', value: 'Sister' },
                                { key: 'op4', value: 'Brother' },
                                { key: 'op4', value: 'Relative' },
                                { key: 'op4', value: 'Friend' },
                                { key: 'op4', value: 'Son' },
                            ]}
                        />
                        <Input
                            placeholder="Enter your Name"
                            label="NAME"
                            type="text"
                            required
                            rounded
                            additionalStyles="text-sm"
                        />
                        {/* <Input placeholder='Enter your Email' label='EMAIL ADDRESS' type='email' required rounded additionalStyles='text-sm'/> */}
                        <Input
                            placeholder="Enter Mobile Number"
                            label="MOBILE NUMBER"
                            type="number"
                            required
                            rounded
                            additionalStyles="text-sm"
                        />
                        <div className="flex items-baseline justify-start pr-14 pt-3 pl-3">
                            <input type="checkbox" />
                            <p className="ml-1">
                                I Accept the{' '}
                                <Link href="/">
                                    <span className="ml-1 text-primary-background underline cursor-pointer">
                                        {' '}
                                        Terms & conditions
                                    </span>
                                </Link>
                                <span> and </span>
                                <Link href="/">
                                    <span className="ml-1 text-primary-background underline cursor-pointer">
                                        Privacy and Policy
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className="py-6 ">
                            <Button text="REGISTER" color="one" rounded onClick={clickHandler} />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
);

export default Register;
