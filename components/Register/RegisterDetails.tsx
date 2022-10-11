import { FormEvent, FC, Dispatch, SetStateAction } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};

const RegisterDetails: FC<{
    setNextStep: Dispatch<SetStateAction<number>>;
    setProfileComplete: Dispatch<SetStateAction<number>>;
}> = ({ setNextStep, setProfileComplete }) => (
    <>
        <form onSubmit={submitHandler} className="shadow-4xl bg-slate-300 mt-9 mx-auto  w-[40%] ">
            <div className="flex flex-col  px-5 ">
                <p className="mt-8 pb-5 text-lg font-semibold  ">
                    Please provide us with your basic details
                </p>
                <div>
                    <Input
                        label="Full Name"
                        placeholder="Enter full name.."
                        required
                        type="text"
                        rounded
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
                    <Input label="Date" placeholder="Enter Date.." required rounded type="date" />
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

                <div>
                    <Input
                        label="Division"
                        placeholder="Enter Division.."
                        required
                        rounded
                        type="text"
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
                <div className="h-14">
                    <Button
                        submit
                        color="one"
                        text="Next"
                        rounded
                        additionalStyles="text-4xl"
                        onClick={() => setNextStep(2)}
                    />
                </div>
            </div>
        </form>
    </>
);

export default RegisterDetails;
