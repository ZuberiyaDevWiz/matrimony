import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiHeartsFill } from 'react-icons/ri';
import Router from 'next/router';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    const loginHandler = () => {
        Router.push('/login');
    };

    return (
        <>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div className="flex justify-between px-5 w-3/4 m-auto  md:px-10  overflow-hidden items-center h-16  bg-auto text-white ">
                    <p className="italic text-[16px] md:text-2xl font-bold mr-3">
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

                    <div className="flex gap-2 md:gap-4">
                        <div className="flex relative">
                            <button
                                className="hover:underline font-semibold text-[13px] md:text-xl"
                                type="button"
                            >
                                Register
                            </button>
                            {isShow ? (
                                <RiArrowDropUpLine
                                    onClick={() => setIsShow(!isShow)}
                                    className="absolute -right-6 top-1/2 text-3xl -translate-y-3 hidden md:block"
                                />
                            ) : (
                                <RiArrowDropDownLine
                                    onClick={() => setIsShow(!isShow)}
                                    className="absolute -right-6 top-1/2 text-3xl -translate-y-3"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
