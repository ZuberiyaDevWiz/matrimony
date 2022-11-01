import { FC, Dispatch, SetStateAction, FormEvent, ChangeEvent } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Image from 'next/image';
import Navbar from 'components/common/Navbar/Navbar';
import { USeForgotPassword, useRegister } from 'store';

const PhoneNumber: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => {
    const { registerDetails, setRegister } = useRegister((state) => state);
    const phoneNumber = USeForgotPassword((state: any) => state.phoneNumber);
    const setPhoneNumber = USeForgotPassword((state: any) => state.setPhoneNumber);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (phoneNumber.length === 10) {
            setNext(2);
        } else {
            alert('enter a valid Number');
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.target.name, e.target.value);
        setPhoneNumber(e.target.value);
    };

    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className="container mx-auto bg-gray-400">
                <div className="flex justify-center px-6 ">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex h-1/2">
                        <Image src="/images/img-4.jpg" alt="bg-img" width="500" height="500" />

                        <div className="w-full lg:w-1/2 bg-white p-5 my-auto     ">
                            <div className="px-8 mb-2 text-center">
                                <h3 className="pt-4 mb-4 font-semibold text-2xl">
                                    Forgot Your Password?
                                </h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    We get it, stuff happens. Just enter your mobile number below
                                    and we will send you a Otp to reset your password!
                                </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white ">
                                <div className="mb-8">
                                    <Input
                                        label="Mobile Number"
                                        placeholder="Enter Mobile Number"
                                        rounded
                                        required
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <Button
                                        text="Send Otp"
                                        color="one"
                                        rounded
                                        additionalButtonStyles="text-white font-semibold"
                                    />
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./register.html"
                                    >
                                        Create an Account!
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhoneNumber;
