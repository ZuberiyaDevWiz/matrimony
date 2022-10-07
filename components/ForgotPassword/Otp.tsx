import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const OTP = () => (
    <section className="shadow-2xl mx-auto mt-8 bg-gray-300 w-[30%] px-8">
        <h1 className="font-bold text-lg py-6">Enter otp sent to your email/mobile</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full py-6">
                <Input label="Enter OTP" placeholder="enter otp" required rounded type="number" />
            </div>
            <div className="py-6">
                <Button text="Submit" w-full submit color="three" />
            </div>
        </form>
    </section>
);
export default OTP;
