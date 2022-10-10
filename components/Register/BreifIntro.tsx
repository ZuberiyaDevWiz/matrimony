import { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import Button from 'components/Form/Button';
import Router from 'next/router';

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/login');
};

const BreifIntro: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({ setNextStep }) => (
    <>
        <section className="shadow-2xl bg-gray-300 w-[35%] mx-auto">
            <h1 className="mt-14 px-4 text-lg font-bold">
                Write a breif introduction about you in your own words
            </h1>
            <form onSubmit={submitHandler}>
                <div className="flex space-x-4  pt-5 px-4">
                    <h1>About You</h1>
                    <textarea className="border border-gray-500 w-72 ">hey there im here</textarea>
                </div>
                <p className="px-28 text-xs pb-7">Min. 50 characters</p>
                <div className="flex w-96 space-x-8 px-4 py-10">
                    <Button text="Previous" color="one" onClick={() => setNextStep(4)} />
                    <Button
                        text="Complete Registration"
                        color="one"
                        submit
                        onClick={() => setNextStep(6)}
                    />
                </div>
            </form>
        </section>
    </>
);

export default BreifIntro;
