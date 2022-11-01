/* eslint-disable @next/next/no-html-link-for-pages */
import { FormEvent, ChangeEvent } from 'react';
import Input from 'components/Form/Input';
import Select from 'react-select';
import Button from 'components/Form/Button';
import Link from 'next/link';
import Router from 'next/router';
import { countries } from 'constants/Countries';
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
        <form onSubmit={registerHandler} className="shadow-2xl bg-black bg-opacity-50 rounded-md ">
            <div className="items-center w-96 h-[80vh] text-white">
                <div className="p-5 ">
                    <p className="text-center font-bold text-2xl text-primary-text tracking-wider pb-6">
                        Register for Free
                    </p>
                    <Select
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
                    {/* <Input placeholder='Enter your Email' label='EMAIL ADDRESS' type='email' required rounded additionalStyles='text-sm'/> */}
                    <div className="w-full flex gap-2">
                        <div className="w-[30%]">
                            <Select
                                name="code"
                                options={countries.map((code) => ({
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
