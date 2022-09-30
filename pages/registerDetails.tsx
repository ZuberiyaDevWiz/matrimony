import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const registerDetails = () => (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col shadow-lg bg-white w-1/3 px-5">
                <p className="mt-20 ">Please provide us with your basic details</p>
                <div className="py-4 w-full h-10">
                    <Input
                        label="Full Name"
                        placeholder="Enter full name.."
                        required
                        type="text"
                        rounded
                    />
                </div>
                <div className="py-4 w-full h-10">
                    <Input
                        label="Email"
                        placeholder="Enter Email.."
                        required
                        type="email"
                        rounded
                    />
                </div>

                <div className="py-4 w-full h-10">
                    <Input label="Date" placeholder="Enter Date.." required rounded type="date" />
                </div>

                <div className="py-4 w-full h-10">
                    <Input
                        label="Section"
                        placeholder="Enter Section.."
                        required
                        rounded
                        type="text"
                    />
                </div>

                <div className="py-4 w-full h-10">
                    <Input
                        label="Division"
                        placeholder="Enter Division.."
                        required
                        rounded
                        type="text"
                    />
                </div>

                <div className="py-4 w-full h-10">
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        required
                        rounded
                        type="password"
                    />
                </div>
                <Button color="orange" rounded text="Next" />
            </div>
        </form>
    </>
);

export default registerDetails;
