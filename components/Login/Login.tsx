import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="shadow-2xl bg-gray-300 w-[30%] mx-auto px-6 mt-8">
            <h1 className="font-bold text-lg py-5 ">Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="w-full  ">
                    <Input
                        label="Email/Mobile"
                        placeholder="Email/Mobile"
                        required
                        rounded
                        type="email"
                    />
                </div>
                <div className="py-6 w-full relative ">
                    <Input
                        label="Password"
                        placeholder="password"
                        required
                        rounded
                        type={show ? 'text' : 'password'}
                    />
                    {show ? (
                        <AiOutlineEye
                            onClick={() => setShow(!show)}
                            className="absolute top-1/2 translate-y-0.5 right-3"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            onClick={() => setShow(!show)}
                            className="absolute top-1/2 translate-y-0.5 right-3"
                        />
                    )}
                </div>
                <div className="flex">
                    <input type="checkbox" />
                    <p>keep me logged in</p>
                    <a className="pl-32 text-blue-700" href="/">
                        Forgot password?
                    </a>
                </div>
                <div className="flex py-7 w-full space-x-9 ">
                    <Button text="cancel" color="two" rounded submit />
                    <Button text="Login" color="two" rounded submit />
                </div>
            </form>
        </section>
    );
};

export default Login;
