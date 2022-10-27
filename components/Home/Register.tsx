/* eslint-disable @next/next/no-html-link-for-pages */
import { FormEvent, ChangeEvent } from 'react';
import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Button from 'components/Form/Button';
import Link from 'next/link';
import Router from 'next/router';
import { Countries } from 'Constant/Countries';
import { useRegister, USeForgotPassword } from 'store';
import axios from 'axios';

const Register = () => {
    const { registerDetails, setRegister } = useRegister((state) => state);
    const phoneNumber = USeForgotPassword((state: any) => state.phoneNumber);
    const setPhoneNumber = USeForgotPassword((state: any) => state.setPhoneNumber);

    const registerHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phoneNumber.length === 10) {
            Router.push('/register');
        } else {
            alert('please enter valid phone number');
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.target.name, e.target.value);
        setPhoneNumber(e.target.value);
    };

    return (
        <form onSubmit={registerHandler} className="shadow-2xl bg-black bg-opacity-50 rounded-md ">
            <div className="items-center w-96 h-[80vh] text-white">
                <div className="p-5 ">
                    <p className="text-center font-bold text-2xl text-primary-text tracking-wider pb-6">
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
                        name="fullname"
                        label="NAME"
                        type="text"
                        required
                        rounded
                        additionalStyles="text-sm"
                        value={registerDetails.fullname}
                        changeHandler={changeHandler}
                    />
                    {/* <Input placeholder='Enter your Email' label='EMAIL ADDRESS' type='email' required rounded additionalStyles='text-sm'/> */}
                    <div className="w-full flex gap-2">
                        <div className="w-[30%]">
                            <Select
                                name="code"
                                label="CODE"
                                options={Countries.map((code) => ({
                                    key: code.code,
                                    value: code.code,
                                }))}
                            />
                        </div>
                        <div className="w-[100%]">
                            <Input
                                placeholder="Enter Mobile Number"
                                label="MOBILE NUMBER"
                                type="number"
                                name="phoneNo"
                                required
                                rounded
                                value={registerDetails.phoneNo}
                                changeHandler={changeHandler}
                                additionalStyles="text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-baseline justify-start pr-14 pt-6 pl-3">
                        <input type="checkbox" required />
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
                    <div className="py-6">
                        <Button text="REGISTER" color="one" submit rounded />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
