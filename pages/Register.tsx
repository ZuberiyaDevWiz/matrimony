/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Radio from 'components/common/radio';
import Image from 'next/image';

const Register = () => (
    <>
        <section
            style={{
                backgroundImage: 'url(/images/wed2.jpeg)',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'revert-layer',
                width: '100vw',
            }}
        >
            <form onSubmit={(e) => e.preventDefault()} className="shadow-2xl w-1/3 p-5 bg-white">
                <div className="flex flex-col px-5 ">
                    <h1 className="mt-16 pb-6 text-2xl font-semibold">Find your Match</h1>
                    <Radio label="Looking For" name="radio" options={['Bride', 'Groom']} />

                    <div className="py-3">
                        <input
                            className="border border-gray-400 w-full rounded"
                            type="text"
                            placeholder="Enter Name.."
                            required
                        />
                    </div>
                    <div className="">
                        <input
                            className="border border-gray-400 w-full rounded"
                            type="number"
                            placeholder="Enter Number.."
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center pr-14 pt-3">
                        <input type="checkbox" />
                        <p className="ml-1">
                            Accept the{' '}
                            <a href="/" className="ml-1 text-blue-500 underline">
                                Terms & conditions
                            </a>
                        </p>
                    </div>
                    <div className="pt-3 ">
                        <button className="bg-orange-400 w-full h-9 rounded-lg" type="submit">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </>
);

export default Register;
