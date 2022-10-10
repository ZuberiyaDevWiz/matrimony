import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <div className="flex justify-end overflow-hidden items-center h-16 bg-[#a50000] text-white ">
                <div className="flex gap-8">
                    <div className="">
                        <button className=" hover:underline font-semibold text-lg" type="button">
                            Login
                        </button>
                    </div>
                    <div className="flex relative mr-8">
                        <button className="hover:underline font-semibold text-lg" type="button">
                            Register
                        </button>
                        {isShow ? (
                            <RiArrowDropUpLine
                                onClick={() => setIsShow(!isShow)}
                                className="absolute -right-6 top-1/2 text-3xl -translate-y-3"
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
        </>
    );
};

export default Navbar;
