import { FC } from 'react';
import Image from 'next/image';

const WhyUs: FC = () => (
    <section>
        <div className="sm:grid sm:grid-cols-4 lg:flex justify-center bg-[#e4e4e4]  divide-x-[2px] py-10  px-6 lg:px-8">
            <div className="  ">
                <div className="lg:m-6 lg:pr-7 lg:border-r-2 h-[271px] lg:border-red-700">
                    <div className=" text-center items-center bg-white py-6 my-auto  mx-auto  rounded-xl content-around ">
                        <h6 className="font-semibold text-[16px] pt-2 px-6 mb-7">
                            Our Strategy & Process To Find Better Match For You
                        </h6>
                        <h6 className="font-normal text-[16px] mb-10 px-6">
                            Just follow 3 easy steps to get connected with Thousands of genuine
                            profiles.
                        </h6>
                        <button
                            type="button"
                            className="bg-primary-background text-primary-text font-semibold text-xs px-4 py-2 rounded-lg mx-auto justify-evenly"
                        >
                            GET STARTED NOW
                        </button>
                    </div>
                </div>
            </div>
            <div className=" pt-4">
                <div className=" ">
                    <div className="w-fit flex flex-col items-center pb-6  my-auto justify-around space-y-6 ">
                        <div className="p-6 pt-6 w-24 h-24 divide-x-2 rounded-full shadow-2xl bg-white ">
                            <Image
                                src="/icons/icon-1.png"
                                alt="Icons One"
                                width="60px"
                                height="60px"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-center font-bold text-primary-background">
                                FREE REGISTRATION
                            </h2>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="text-secondary-text text-2xl">
                            <Image
                                src="/icons/icon-6.png"
                                alt="Step 1"
                                width="30px"
                                height="30px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="">
                    <div className="w-fit flex flex-col items-center  my-auto justify-around space-y-6 ">
                        <div className="p-6 pt-6 w-24 h-24 divide-x-2 rounded-full shadow-2xl bg-white ">
                            <Image
                                src="/icons/icon-3.png"
                                alt="Icons Two"
                                width="60px"
                                height="60px"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-center font-bold text-primary-background">
                                PROFILE SCREENING
                            </h2>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="text-secondary-text text-2xl">
                            <Image
                                src="/icons/icon-5.png"
                                alt="Step 1"
                                width="30px"
                                height="30px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <div className="">
                    <div className="w-fit flex flex-col items-center  my-auto justify-around space-y-6 ">
                        <div className="p-6 pt-6 w-24 h-24 divide-x-2 rounded-full shadow-2xl bg-white ">
                            <Image
                                src="/icons/icon-3.png"
                                alt="Icons Two"
                                width="60px"
                                height="60px"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-center font-bold text-primary-background">
                                CONNECT/START COMMUNICATION
                            </h2>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="text-secondary-text text-2xl">
                            <Image
                                src="/icons/icon-4.png"
                                alt="Step 1"
                                width="30px"
                                height="30px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WhyUs;
