import { FormEvent, FC, Dispatch, SetStateAction } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};

const RegisterDetails: FC<{
    setNextStep: Dispatch<SetStateAction<number>>;
}> = ({ setNextStep }) => (
    <section className="bg-white mt-[2px] ">
        <form onSubmit={submitHandler} className="shadow-4xl mx-auto">
            <div className="flex flex-col  px-10 ">
                <p className="mt-8 pb-5 text-lg font-semibold  ">
                    Please provide us with your basic details
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input
                            label="First Name"
                            placeholder="Enter first name.."
                            required
                            type="text"
                            rounded
                        />
                    </div>

                    <div>
                        <Input
                            label="Last Name"
                            placeholder="Enter last name.."
                            required
                            type="text"
                            rounded
                        />
                    </div>
                    <div className="">
                        <Select
                            label="Gender"
                            name="select"
                            options={[
                                { key: 'op1', value: 'Choose' },
                                { key: 'op2', value: 'Male' },
                                { key: 'op3', value: 'Female' },
                            ]}
                        />
                    </div>
                    <div>
                        <Input
                            label="Email"
                            placeholder="Enter Email.."
                            required
                            type="email"
                            rounded
                        />
                    </div>

                    <div>
                        <Input
                            label="Date of Birth"
                            placeholder="Enter Date.."
                            required
                            rounded
                            type="date"
                        />
                    </div>

                    <div>
                        <Input
                            label="Section"
                            placeholder="Enter Section.."
                            required
                            rounded
                            type="text"
                        />
                    </div>

                    <div className="">
                        <Select
                            label="Gender"
                            name="select"
                            options={[
                                { key: 'op1', value: 'Choose' },
                                { key: 'op2', value: 'Male' },
                                { key: 'op3', value: 'Female' },
                            ]}
                        />
                    </div>

                    <div>
                        <Input
                            label="Password"
                            placeholder="Enter Password"
                            required
                            rounded
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex ml-auto w-[49%] my-8">
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
        </form>
    </section>
);

export default RegisterDetails;
