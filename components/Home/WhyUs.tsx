import { FC } from 'react';
import Image from 'next/image';

const WhyUs: FC = () => (
    <section>
        <div className="flex bg-[#e4e4e4] w-full h-[400px] divide-x-[2px] divide-[#a50000] px-8">
            <div className="flex flex-col text-center items-center justify-evenly bg-white w-[20%] h-[65%] my-auto  mx-auto  mr-10 rounded-xl content-around ">
                <h6 className="font-semibold text-[16px] pt-2 px-6">
                    Our Strategy & Process To Find Better Match For You
                </h6>
                <h6 className="font-normal text-[16px] px-6">
                    Just follow 3 easy steps to get connected with Thousands of genuine profiles.
                </h6>
                <button
                    type="button"
                    className="bg-primary-background text-primary-text font-semibold text-xs px-4 py-2 rounded-lg mx-auto justify-evenly"
                >
                    GET STARTED NOW
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4 px-6 w-[75%] my-10">
                <div className="w-fit flex flex-col items-center  my-auto justify-around space-y-6 ">
                    <div className="p-6 pt-6 w-24 h-24 divide-x-2 rounded-full shadow-2xl bg-white ">
                        <Image src="/icons/icon-1.png" alt="Icons One" width="60px" height="60px" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-center font-bold text-primary-background">
                            FREE REGISTRATION
                        </h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                        </p>
                    </div>
                    <div className="text-secondary-text text-2xl">
                        <Image src="/icons/icon-6.png" alt="Step 1" width="30px" height="30px" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between  my-auto space-y-6 ">
                    <div className="p-6  w-24 h-24 rounded-full shadow-2xl bg-white">
                        <Image src="/icons/icon-3.png" alt="Icons Two" width="60px" height="60px" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-center font-bold text-primary-background">
                            PROFILE SCREENING
                        </h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                        </p>
                    </div>
                    <div className="text-secondary-text text-2xl">
                        <Image src="/icons/icon-5.png" alt="Step 1" width="30px" height="30px" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between  my-auto space-y-6">
                    <div className="p-6  w-24 h-24 rounded-full shadow-2xl bg-white ">
                        <Image
                            src="/icons/icon-3.png"
                            alt="Icons Three"
                            width="60px"
                            height="60px"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-center font-bold text-primary-background">
                            CONNECT/START COMMUNICATION
                        </h2>
                        <p className="text-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                        </p>
                    </div>
                    <div className="text-secondary-text text-2xl">
                        <Image src="/icons/icon-4.png" alt="Step 1" width="30px" height="30px" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default WhyUs;
