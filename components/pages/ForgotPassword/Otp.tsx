import { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { useForgotPassword } from 'store';

const OTP: FC<{
    setNext: Dispatch<SetStateAction<number>>;
}> = ({ setNext }) => {
    const otp = useForgotPassword((state: any) => state.otp);
    const setOtp = useForgotPassword((state: any) => state.setOtp);
    const phoneNumber = useForgotPassword((state: any) => state.phoneNumber);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        setNext(3);
    };

    const numHandler = () => {
        setNext(1);
    };

    return (
        <section className="shadow-2xl mx-auto mt-8 bg-gray-300 w-[30%] px-8">
            <h1 className="font-bold text-lg py-6">Enter otp sent to your below Mobile Number</h1>
            <form onSubmit={submitHandler}>
                <div className="flex space-x-5">
                    <p className=" text-blue-400">+91{phoneNumber}</p>
                    <button onClick={numHandler} type="button">
                        Edit
                    </button>
                </div>

                <div className="w-full py-6">
                    <Input
                        label="Enter OTP"
                        placeholder="enter otp"
                        required
                        rounded
                        type="number"
                        value={otp?.toString()}
                        changeHandler={(e) => setOtp(e.target.value)}
                    />
                </div>
                <div className="py-6">
                    <Button text="Submit" w-full submit color="three" />
                </div>
            </form>
        </section>
    );
};

export default OTP;
