/* eslint-disable no-func-assign */
import Image from 'next/image';
import { FC, useState, useRef } from 'react';
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

    const ScrollUp = () => {
        window.scrollTo({
            top: 250,
            behavior: 'smooth',
        });
    };

    return (
        <section>
            <div className="bg-black z-10 absolute right-0 bottom-0 top-0 left-0 opacity-30  ">
                <div className="items-center">
                    <p className="text-white z-20 absolute ">ehferhfnfkjsnfksfnskfnaf</p>
                </div>
            </div>
            <div
                className={className(
                    scrollPosition > 50
                        ? 'lg:fixed lg:z-20 lg:duration-500 ease-in-out'
                        : 'bg-white',
                    ' lg:w-full opacity-95 '
                )}
            >
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
                    <div
                        className={className(
                            scrollPosition > 580 ? 'lg:mr-[8rem]' : 'lg:mr-[0rem]',
                            'lg:flex  items-center hidden lg:duration-500 '
                        )}
                    >
                        <MenuBar />
                    </div>
                    <div className=" bg-red-700 hidden lg:block fixed z-30 right-0 ">
                        <div
                            className={className(
                                scrollPosition > 580 ? 'lg:mr-[0rem]' : 'lg:mr-[-15rem]',
                                'p-1 duration-500'
                            )}
                        >
                            <button
                                type="button"
                                name="register"
                                onClick={ScrollUp}
                                className=" px-8 py-6 bottom-0 text-white r-0 hidden lg:block "
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
            <div className=" md:mt-[-250px] md:mb-[60px] mt-[-440px] mb-[60px] relative">
                <Register />
            </div>
        </section>
    );
};
export default SectionOne;
