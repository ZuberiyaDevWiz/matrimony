import React, { useState } from 'react';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <section>
            <div className="flex justify-center">
                <div className="flex justify-center absolute">
                    <div className="flex space-x-6 text-lg justify-end pr-16 bg-red-500 w-screen h-11 items-center">
                        <div className="">
                            <button
                                className=" hover:underline font-semibold text-lg"
                                type="button"
                            >
                                Login
                            </button>
                        </div>
                        <div className="flex relative  ">
                            <button className="hover:underline  " type="button">
                                Register For Free
                            </button>
                            {isShow ? (
                                <RiArrowDropUpLine
                                    onClick={() => setIsShow(!isShow)}
                                    className="absolute -right-6 top-1/2 text-3xl -translate-y-3"
                                />
                            ) : (
                                <>
                                    <RiArrowDropDownLine
                                        onClick={() => setIsShow(!isShow)}
                                        className="absolute -right-6 top-1/2 text-3xl -translate-y-3"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
