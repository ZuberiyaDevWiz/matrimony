/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

const Footer = () => (
    <div className="bg-red-900">
        <div className=" container mx-auto px-4 pb-[30px] pt-[30px]">
            <div className="grid grid-cols-5 gap-9">
                <div>
                    <h1 className="text-white text-2xl italic pb-6 font-bold">
                        Matrimony{' '}
                        <span className="block text text-sm text-[12px] pt-38">
                            Marriae Pvt Ltd
                        </span>
                    </h1>
                    <p className="text-white text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>

                <div className="pl-20">
                    <h1 className="text-white text-sm italic pt-[37px] pb-6 font-bold">
                        Introduction
                    </h1>
                    <div className="links grid text-white">
                        <a className="pb-4" href="/">
                            Home
                        </a>
                        <a className="pb-4" href="/">
                            About Us
                        </a>
                        <a className="pb-4" href="/">
                            Service
                        </a>
                        <a href="/">Contct Us</a>
                    </div>
                </div>
                <div className="pl-20">
                    <h1 className="text-white text-sm italic pt-[37px] pb-6 font-bold">Explore</h1>
                    <div className="links grid text-white">
                        <a className="pb-4" href="/">
                            Advance Searech
                        </a>
                        <a className="pb-4" href="/">
                            Success Stories
                        </a>
                        <a className="pb-4" href="/">
                            Matrimonial Blog
                        </a>
                        <a href="/">Sitmemap</a>
                    </div>
                </div>
                <div className="pl-20">
                    <h1 className="text-white text-sm italic pt-[37px] pb-6 font-bold">Support</h1>
                    <div className="links grid text-white">
                        <a className="pb-4" href="/">
                            Payment Option
                        </a>
                        <a className="pb-4" href="/">
                            Advertise With Us
                        </a>
                        <a className="pb-4" href="/">
                            Feedback
                        </a>
                        <a href="/">Safety Tips</a>
                    </div>
                </div>

                <div className="pl-20">
                    <h1 className="text-white text-sm italic pt-[37px] pb-6 font-bold">
                        Contact Information
                    </h1>
                    <div className="links grid text-white">
                        <p className="text-2xl">9999999999</p>
                        <p className="text-2xl">9999999999</p>
                        <p className="pb-4">support@gmail.com</p>
                        <div className="Social=media font-bold">
                            <h3>Follows Us On</h3>
                            <a href="/">ff</a>
                            <a href="/">ff</a>
                            <a href="/">ff</a>
                            <a href="/">ff</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
