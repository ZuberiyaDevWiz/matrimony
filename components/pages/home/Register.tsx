/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-html-link-for-pages */
import { FormEvent, ChangeEvent } from 'react';
import Input from 'components/form/Input';
import Select from 'react-select';
import Button from 'components/form/Button';
import Link from 'next/link';
import Router from 'next/router';
import { countries } from 'constants/registerLinks/countries';
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
            return toast.error('please enter valid phone number');
        }
        if (registerDetails.select !== '--Select--') {
            Router.push('/register');
        } else {
            return toast.error('please enter all the fields');
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.target.name, e.target.value);
    };

    return (
        <section>
            <form
                onSubmit={registerHandler}
                className="shadow-2xl bg-black bg-opacity-50 rounded-md "
            >
                <div className="items-center w-96 h-[80vh] text-white">
                    <div className="p-5 ">
                        <p className="text-center font-bold text-2xl text-primary-text tracking-wider pb-6">
                            Register for Free
                        </p>
                        <div className="text-black">
                            <Select
                                name="select"
                                options={[
                                    { value: 'op1', label: '--Select--' },
                                    { value: 'op2', label: 'Self' },
                                    { value: 'op3', label: 'Daughter' },
                                    { value: 'op4', label: 'Sister' },
                                    { value: 'op5', label: 'Brother' },
                                    { value: 'op6', label: 'Relative' },
                                    { value: 'op7', label: 'Friend' },
                                    { value: 'op8', label: 'Son' },
                                ]}
                                isOptionDisabled={(option) => option.label === '--Select--'}
                                onChange={(e) => {
                                    if (e) {
                                        setRegister('select', e.label);
                                    }
                                }}
                            />
                        </div>
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
                        <div className="w-full flex items-center gap-2">
                            <div className="w-[30%] flex flex-col">
                                <span className="text-sm font-semibold py-2 pl-2">Code</span>
                                <Select
                                    name="code"
                                    className="text-black"
                                    options={countries.map((code) => ({
                                        label: code.code,
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
        </section>
    );
};

export default Register;
