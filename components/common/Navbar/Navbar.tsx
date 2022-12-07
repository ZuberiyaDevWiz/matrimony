import { useState } from 'react';
import { RiHeartsFill } from 'react-icons/ri';
import Router from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const loginHandler = () => {
        Router.push('/login');
    };

    return (
        <>
            <div className="bg-gradient-to-r  from-violet-500 to-fuchsia-500">
                <div className="flex justify-between px-5 xl:w-3/4 m-auto  md:px-10  items-center h-16  text-white ">
                    <p className="italic text-[17px] md:text-2xl font-bold mr-3">
                        <span className="flex">
                            <Link href="/"> Islamic</Link>
                            <span className="text-violet-900">
                                <RiHeartsFill />
                            </span>
                            <Link href="/">Matrimony</Link>
                            <span className=" italic text-[10px] md:text-[15px] mt-[6px]">
                                <Link href="/"> .com </Link>
                            </span>
                        </span>
                    </p>

                    <div className="flex gap-2 md:gap-4">
                        <div className="flex relative">
                            <Link href="/">
                                <button
                                    className="hover:bg-white rounded hover:text-violet-400  text-[17px] md:text-lg border border-white "
                                    type="button"
                                >
                                    <div className="px-3 py-1">Register</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
