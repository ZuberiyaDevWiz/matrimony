import { FC, Dispatch, SetStateAction, FormEvent, ChangeEvent } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
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
        <section className="shadow-2xl bg-gray-300 mx-auto w-[30%] mt-8 px-8">
            <h1 className="font-bold text-lg py-5">Forgot Password?</h1>
            <form onSubmit={submitHandler}>
                <div className="w-full">
                    <Input
                        label="Mobile"
                        placeholder="mobile"
                        required
                        rounded
                        type="number"
                        value={registerDetails.phoneNo}
                        name="phoneNo"
                        changeHandler={changeHandler}
                    />
                </div>
                <p className="py-6 text-sm">
                    Please enter your Mobile Number. We will send SMS with a link to reset your
                    password. This link will be valid only for 2 hours
                </p>
                <div className="flex space-x-4 w-full py-4">
                    <Button text="cancel" color="three" rounded />
                    <Button text="submit" color="three" rounded submit />
                </div>
            </form>
        </section>
    );
};

export default PhoneNumber;
