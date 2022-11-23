import Image from 'next/image';
import { FC, useState } from 'react';
import { RiHeartsFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import Register from './Register';

const SectionLink: FC<{ text: string }> = ({ text }) => (
    <li className="p-4 block hover:text-secondary-text transition duration-300">{text}</li>
);

const SectionOne = () => (
    <section>
        <div className=" h-fit ">
            <div className="h-screen border-b-8">
                <Image
                    src="/images/img-11.jpg"
                    layout="fill"
                    className="object-cover "
                    alt="section one picture"
                />

                <div className=" ">
                    <ul className="text-black no-underline opacity-80 font-bold lg:px-6 px-2  bg-white w-full flex justify-between items-center ">
                        <div>
                            <p className="italic text-[16px] md:text-2xl font-bold mr-3 lg:pl-6 cursor-pointer">
                                <span className="flex">
                                    Islamic
                                    <span className="text-rose-300">
                                        <RiHeartsFill />
                                    </span>
                                    Matrimony
                                    <span className=" italic text-[10px] md:text-[15px] mt-[6px]">
                                        .com
                                    </span>
                                </span>
                            </p>
                        </div>
                        <div className="lg:flex items-center hidden">
                            <SectionLink text="Success Stories" />
                            <li className="p-4 hover:text-secondary-text transition cursor-pointer duration-300">
                                About Us
                            </li>
                            <li className="p-4 hover:text-secondary-text cursor-pointer !hover:underline-offset-1 transition duration-300 ">
                                Featured Profiles
                            </li>
                            <li className="p-4 hover:text-secondary-text cursor-pointer transition duration-300">
                                Services
                            </li>

                            <div className="p-4">
                                <button
                                    type="button"
                                    name="register"
                                    className="border border-gray-700 px-3 py-2 text-red-700 hover:text-white hover:bg-red-700"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                        <GoThreeBars className="text-2xl z-10 absolute right-0 lg:hidden" />
                    </ul>
                </div>
                <div className=" md:mt-[450px] mt-[200px] z-10 relative  ">
                    <Register />
                </div>
            </div>
        </div>
    </section>
);
export default SectionOne;
