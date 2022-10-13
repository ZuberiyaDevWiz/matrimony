import { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import Button from 'components/Form/Button';
import Router from 'next/router';

const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push('/login');
};

const BreifIntro: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({ setNextStep }) => (
    <>
        <section className="shadow-2xl px-10">
            <div className="my-8 ">
                <h1 className=" text-lg font-semibold">
                    Write a breif introduction about you in your own words
                </h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex space-x-2 h-24">
                    <h1 className=" text-lg font-semibold">About Your Friend</h1>
                    <textarea className="border border-gray-500 w-full">I am a....</textarea>
                </div>
                <div className="flex flex-row py-8 space-x-6 ">
                    <div className="w-full flex gap-8 text-primary-text">
                        <Button text="Previous" color="one" onClick={() => setNextStep(4)} />
                        <Button text="Complete Registration" color="one" submit />
                    </div>
                </div>
            </form>
        </section>
    </>
);

export default BreifIntro;
