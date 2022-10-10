import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const LoginWithOtp = () => (
    <section className="shadow-2xl bg-gray-300 my-9 mx-auto px-4 w-[30%]">
        <h1 className="font-bold text-lg pt-4 ">Login with OTP</h1>
        <h1 className="font-semibold py-4">Enter Mobile Number or Email ID</h1>
        <p className="text-sm">We will send an OTP to login</p>
        <div className="py-5">
            <Input label="Mobile Number" placeholder="Mobile Number" required rounded type="text" />
        </div>
        <div className="py-5">
            <Button text="Send OTP" color="two" rounded />
        </div>
    </section>
);

export default LoginWithOtp;
