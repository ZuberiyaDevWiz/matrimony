/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { FormEvent, FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { Division } from 'Constant/Division';
import { Section } from 'Constant/Section';
import { useRegister } from 'store';
import ReactSelect from 'react-select';

const RegisterDetails: FC<{
    setNextStep: Dispatch<SetStateAction<number>>;
}> = ({ setNextStep }) => {
    const { registerDetails, setRegister, step, setStep } = useRegister((state) => state);

    const registerHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault;
    };

    const clickHandler = () => {
        if (registerDetails.division && registerDetails.section) {
            setNextStep(2);
            return;
        }
        // eslint-disable-next-line no-alert
        return alert('Please enter all the details');
    };
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setRegister(e.target.name, e.target.value);

    return (
        <form onSubmit={clickHandler}>
            <section className="bg-white mt-[2px] shadow-2xl">
                <div className="flex flex-col px-10 ">
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
                        <Input
                            name="lastName"
                            placeholder="Enter Last Name"
                            type="text"
                            required
                            rounded
                            label="Last Name"
                            value={registerDetails.lastName}
                            changeHandler={changeHandler}
                        />
                        <div className="  space-y-2  ">
                            <span className="text-lg font-semibold pl-2">Gender</span>
                            <ReactSelect
                                isMulti={false}
                                name="select"
                                placeholder="--Select--"
                                value={{
                                    label: registerDetails.gender,
                                    value: registerDetails.gender,
                                }}
                                options={[
                                    {
                                        label: 'MALE',

                                        value: 'MALE',
                                    },
                                    {
                                        label: 'FEMALE',
                                        value: 'FEMALE',
                                    },
                                ]}
                                onChange={(e) => {
                                    if (e) setRegister('gender', e?.value);
                                }}
                                // isOptionDisabled={(option) => option.value === 'FEMALE'}
                            />{' '}
                        </div>
                        <Input
                            label="DOB"
                            type="date"
                            required
                            rounded
                            name="dob"
                            value={registerDetails.dob}
                            changeHandler={changeHandler}
                            placeholder="date of birth"
                        />
                        <div className="  space-y-2  ">
                            <span className="text-lg font-semibold pl-2">Section</span>
                            <ReactSelect
                                isMulti={false}
                                name="select"
                                placeholder="--Select--"
                                value={{
                                    label: registerDetails.section,
                                    value: registerDetails.section,
                                }}
                                options={Section.map((v) => ({
                                    label: v,
                                    value: v,
                                }))}
                                onChange={(e) => {
                                    if (e) setRegister('section', e?.value);
                                }}
                            />{' '}
                        </div>
                        <div className="  space-y-2  ">
                            <span className="text-lg font-semibold pl-2">Division</span>
                            <ReactSelect
                                isMulti={false}
                                name="Select"
                                placeholder="--Select--"
                                value={{
                                    label: registerDetails.division,
                                    value: registerDetails.division,
                                }}
                                options={Division.map((v) => ({
                                    label: v,
                                    value: v,
                                }))}
                                onChange={(e) => {
                                    if (e) setRegister('division', e?.value);
                                }}
                            />{' '}
                        </div>
                    </div>
                    <div className="ml-auto w-[49%] py-10">
                        <Button
                            submit
                            color="one"
                            text="Next"
                            rounded
                            additionalStyles="font-semibold text-white"
                            onClick={clickHandler}
                        />
                    </div>
                </div>
            </section>
        </form>
    );
};

export default RegisterDetails;
