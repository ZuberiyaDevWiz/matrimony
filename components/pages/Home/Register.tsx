/* eslint-disable @next/next/no-html-link-for-pages */
import { FormEvent, ChangeEvent } from 'react';
import Input from 'components/form/Input';
import Select from 'react-select';
import Button from 'components/form/Button';
import Link from 'next/link';
import Router from 'next/router';
import { Countries } from 'constants/Countries';
import { useRegister } from 'store';
import toast from 'react-hot-toast';

const Register = () => {
    const { registerDetails, setRegister } = useRegister((state) => state);
    const { phoneNo } = registerDetails;

    const registerHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phoneNo.toString().length === 10) {
            Router.push('/register');
        } else {
            toast.error('please enter valid phone number');
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.target.name, e.target.value);
    };

    return (
        <>
            <div className="m-auto content-center rounded  bg-black bg-opacity-75  w-4/5">
                <form onSubmit={registerHandler} className="shadow-2xl rounded-md ">
                    <div className="flex justify-between px-10 py-10 h-30 gap-1">
                        <div>
                            <p className="text-white mb-4 text-xl">Profile for</p>
                            <Select
                                name="select"
                                placeholder="Profile for..."
                                options={[
                                    { key: 'op2', label: 'Myself', value: 'Myself' },
                                    { key: 'op3', label: 'Daughter', value: 'Daughter' },
                                    { key: 'op4', label: 'Sister', value: 'Sister' },
                                    { key: 'op4', label: 'Brother', value: 'Brother' },
                                    { key: 'op4', label: 'Relative', value: 'Relative' },
                                    { key: 'op4', label: 'Friend', value: 'Friend' },
                                    { key: 'op4', label: 'Son', value: 'Son' },
                                ]}
                                onChange={(e) => {
                                    if (e) {
                                        setRegister('select', e.value);
                                    }
                                }}
                            />
                        </div>

                        <div className="">
                            <p className=" text-xl text-white">Enter Name</p>
                            <div className="w-96">
                                <Input
                                    placeholder="Enter Name"
                                    name="fullname"
                                    label=""
                                    type="text"
                                    required
                                    rounded
                                    additionalStyles="text-sm"
                                    value={registerDetails.fullname}
                                    changeHandler={changeHandler}
                                />
                            </div>
                        </div>

                        <div>
                            <p className=" text-xl mb-4 text-white">Select ISD Code</p>
                            <Select
                                name="code"
                                options={Countries.map((code) => ({
                                    key: code.code,
                                    value: code.code,
                                }))}
                            />
                        </div>

                        <div>
                            <p className=" text-xl text-white">Enter Mobile Number</p>
                            <div className="w-48">
                                <Input
                                    placeholder="Enter Mobile Number"
                                    label=""
                                    type="number"
                                    name="phoneNo"
                                    required
                                    rounded
                                    value={registerDetails.phoneNo}
                                    changeHandler={changeHandler}
                                    additionalStyles="text-sm"
                                    maxLength={10}
                                    minLength={10}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            name="register"
                            className="bg-red-600 mt-11 font-bold text-center items-center  text-white px-10 border border-gray-400"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {/*
            <form
                onSubmit={registerHandler}
                className="shadow-2xl bg-black bg-opacity-50 rounded-md "
            >
                <div className="items-center flex h-[80vh] text-black">
                    <div className="p-5 ">
                        <Select
                            name="select"
                            placeholder="Profile for..."
                            options={[
                                { key: 'op2', label: 'Myself', value: 'Myself' },
                                { key: 'op3', label: 'Daughter', value: 'Daughter' },
                                { key: 'op4', label: 'Sister', value: 'Sister' },
                                { key: 'op4', label: 'Brother', value: 'Brother' },
                                { key: 'op4', label: 'Relative', value: 'Relative' },
                                { key: 'op4', label: 'Friend', value: 'Friend' },
                                { key: 'op4', label: 'Son', value: 'Son' },
                            ]}
                            onChange={(e) => {
                                if (e) {
                                    setRegister('select', e.value);
                                }
                            }}
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
                         <Input placeholder='Enter your Email' label='EMAIL ADDRESS' type='email' required rounded additionalStyles='text-sm'/> }
                        <div className=" gap-2">
                            <div className="w-[30%]">
                                <Select
                                    name="code"
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
                        <div className="flex items-baseline pr-14 pt-6 pl-3">
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
                                */}
        </>
    );
};

export default Register;
