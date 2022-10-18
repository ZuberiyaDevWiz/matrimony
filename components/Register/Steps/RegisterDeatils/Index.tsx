/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { FormEvent, FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';
import { RegisterLinks } from 'Constant/RegisterDetailsLink';
import { useRegister } from 'store';

const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};

const RegisterDetails: FC<{
    setNextStep: Dispatch<SetStateAction<number>>;
}> = ({ setNextStep }) => {
    const { registerDetails, setRegister, step, setStep } = useRegister((state) => state);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setRegister(e.target.name, e.target.value);

    return (
        <form onSubmit={submitHandler}>
            <section className="bg-white mt-[2px] shadow-4xl mx-auto">
                <div className="flex flex-col  px-10 ">
                    <p className="mt-8 pb-5 text-xl font-semibold text-primary-background ">
                        Please provide us with your basic details
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            name="firstName"
                            placeholder="Enter First Name"
                            type="text"
                            required
                            rounded
                            label="First Name"
                            value={registerDetails.firstName}
                            changeHandler={changeHandler}
                        />
                        <Select
                            label="Gender"
                            name="select"
                            options={[
                                { key: 'op1', value: 'Choose' },
                                { key: 'op2', value: 'Male' },
                                { key: 'op3', value: 'Female' },
                            ]}
                        />
                        <Select
                            label="Section"
                            name="select"
                            options={[
                                { key: 'op1', value: 'Choose' },
                                { key: 'op2', value: 'Male' },
                                { key: 'op3', value: 'Female' },
                            ]}
                        />{' '}
                        <Select
                            label="Division"
                            name="select"
                            options={[
                                { key: 'op1', value: 'Choose' },
                                { key: 'op2', value: 'Male' },
                                { key: 'op3', value: 'Female' },
                            ]}
                        />
                    </div>
                    <div className="mx-auto w-[50%] py-8">
                        <Button
                            submit
                            color="one"
                            text="Next"
                            rounded
                            additionalStyles="font-semibold text-white"
                            onClick={() => setNextStep(2)}
                        />
                    </div>
                </div>
            </section>
        </form>
    );
};

export default RegisterDetails;
