/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { FormEvent, FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';
import { useRegister } from 'store';
import { Division } from 'Constant/Division';

const RegisterDetails: FC<{
    setNextStep: Dispatch<SetStateAction<number>>;
}> = ({ setNextStep }) => {
    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNextStep(2);
    };

    const { registerDetails, setRegister, step, setStep } = useRegister((state) => state);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.target.name, e.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <section className="bg-white mt-[2px] shadow-4xl mx-auto">
                <div className="flex flex-col  px-10 ">
                    <p className="mt-8 pb-5 text-xl font-semibold text-primary-background ">
                        Please provide us with your basic details
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            placeholder="Enter first name"
                            rounded
                            name="firstName"
                            type="text"
                            value={registerDetails.firstName}
                            changeHandler={handleChange}
                            required
                        />
                        <Input
                            label="Last Name"
                            placeholder="Enter first name"
                            rounded
                            name="lastName"
                            type="text"
                            value={registerDetails.lastName}
                            changeHandler={handleChange}
                            required
                        />
                        <Input
                            name="email"
                            label="Email"
                            placeholder="Enter Email.."
                            rounded
                            type="email"
                            required
                            value={registerDetails.email}
                            changeHandler={handleChange}
                        />
                        <Input
                            name="password"
                            label="Password"
                            placeholder="Enter password.."
                            rounded
                            type="password"
                            required
                            value={registerDetails.password}
                            changeHandler={handleChange}
                        />{' '}
                        <Input
                            name="dob"
                            label="Date of birth"
                            placeholder="Enter dob.."
                            rounded
                            type="Date"
                            required
                            value={registerDetails.dob}
                            changeHandler={handleChange}
                        />
                        <Select
                            label="Gender"
                            name="select"
                            options={[
                                { key: 'op1', value: '--select--' },
                                { key: 'op2', value: 'Male' },
                                { key: 'op3', value: 'Female' },
                                { key: 'op3', value: 'Others' },
                            ]}
                        />
                        <Select
                            label="Section"
                            name="select"
                            options={[
                                { key: 'op1', value: '--select--' },
                                { key: 'op2', value: 'Sunni' },
                                { key: 'op3', value: 'Shia' },
                                { key: 'op4', value: 'Others' },
                            ]}
                        />{' '}
                        <Select
                            label="Division"
                            name="select"
                            options={Division.map((x) => ({
                                key: x,
                                value: x,
                            }))}
                        />
                    </div>
                    <div className="py-16">
                        <div className="w-[49%]  hover:bg-primary-background hover:text-white hover:rounded">
                            <Button text="Next" rounded onClick={() => setNextStep(2)} submit />
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default RegisterDetails;
