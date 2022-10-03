import { FormEvent } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};

const registerDetails = () => (
    <>
        <form onSubmit={submitHandler} className="shadow-4xl bg-slate-300  mx-auto  w-[40%] ">
            <div className="flex flex-col  px-5 ">
                <p className="mt-20 pb-5 text-lg font-semibold  ">
                    Please provide us with your basic details
                </p>
                <div className="h-14 ">
                    <Input
                        label="Full Name"
                        placeholder="Enter full name.."
                        required
                        type="text"
                        rounded
                    />
                </div>
                <div className="  h-14  ">
                    <Input label="Email" placeholder="Enter Email.." required type="text" rounded />
                </div>

                <div className=" h-14  ">
                    <Input label="Date" placeholder="Enter Date.." required rounded type="date" />
                </div>

                <div className="  h-14 ">
                    <Input
                        label="Section"
                        placeholder="Enter Section.."
                        required
                        rounded
                        type="text"
                    />
                </div>

                <div className="  h-14 ">
                    <Input
                        label="Division"
                        placeholder="Enter Division.."
                        required
                        rounded
                        type="text"
                    />
                </div>

                <div className="  h-14  ">
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        required
                        rounded
                        type="password"
                    />
                </div>
                <div className="h-14">
                    <Button color="one" text="Next" rounded />
                </div>
            </div>
        </form>
    </>
);

export default registerDetails;
