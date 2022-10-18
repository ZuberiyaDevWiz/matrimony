/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { FormEvent, FC, Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';
import { RegisterLinks } from 'constants/RegisterDetailsLink';

const RegisterDetails: FC<{
    setNextStep: Dispatch<SetStateAction<number>>;
}> = ({ setNextStep }) => {
    const [details, setDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        dob: '',
        section: '',
        division: '',
        gender: '',
    });

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNextStep(2);
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
                            placeholder="Enter first name.."
                            rounded
                            type="text"
                            required
                            value={details.firstname}
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
                        />
                    </div>
                </div>
            </section>
        </form>
    );
};

export default RegisterDetails;
