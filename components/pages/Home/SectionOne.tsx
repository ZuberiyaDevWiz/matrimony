/* eslint-disable no-func-assign */
import Image from 'next/image';
import { FC, useState } from 'react';
import { RiHeartsFill } from 'react-icons/ri';
import { useScrollPosition } from 'components/common/Slider/ScrollBar';
import { AiOutlineClose } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import Register from './Register';
import MenuBar from './MuneBar';

const SectionLink: FC<{ text: string }> = ({ text }) => (
    <li className="p-4 block hover:text-secondary-text transition duration-300">{text}</li>
);

function className(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const SectionOne = () => {
    const [isActiveMenu, setActiveMune] = useState(false);

    const scrollPosition = useScrollPosition();
    console.log(scrollPosition);

    return (
        <section>
            <div className=" lg:fixed lg:z-20 lg:w-full bg-white opacity-95">
                <ul className="text-black h-12 lg:h-auto no-underline opacity-100 font-bold lg:px-6 px-2  bg-white w-full flex justify-between items-center ">
                    <div>
                        <p className="italic text-[20px] md:text-2xl font-bold mr-3 lg:pl-6 cursor-pointer">
                            <span className="flex">
                                Islamic
                                <span className="text-rose-300">
                                    <RiHeartsFill />
                                </span>
                                Matrimony
                                <span className=" italic text-[10px] md:text-[15px] mt-[12px] lg:mt-[7px]">
                                    .com
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="lg:flex  items-center hidden ">
                        <MenuBar />
                    </div>
                    <div className=" bg-red-700  fixed z-30 right-0 ">
                        <div
                            className={className(
                                scrollPosition > 600 ? 'mr-[0rem]' : 'mr-[-15rem]',
                                'p-7 duration-500'
                            )}
                        >
                            <button
                                type="button"
                                name="register"
                                className=" px-4 text-white  bg-red-700 r-0"
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    <GoThreeBars
                        className="text-2xl z-10 absolute text-transparent right-0 lg:hidden block"
                        onClick={() => setActiveMune(!isActiveMenu)}
                    />
                    {isActiveMenu ? (
                        <AiOutlineClose className="text-2xl lg:hidden block" />
                    ) : (
                        <GoThreeBars className="text-2xl lg:hidden block" />
                    )}
                </ul>
            </div>
            {isActiveMenu && (
                <div className="lg:hidden block absolute bg-slate-200 w-full list-none z-10">
                    <MenuBar />
                </div>
            )}
            <div className="relative w-full md:h-[46rem] h-[30rem]">
                <Image
                    src="/images/img-12.jpg"
                    layout="fill"
                    className="object-cover absolute "
                    alt="section one picture"
                />
            </div>
            <div className=" md:mt-[-180px] mt-[-420px] relative">
                <Register />
            </div>
        </section>
    );
};
export default SectionOne;
