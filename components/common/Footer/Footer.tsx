/* eslint-disable import/no-unresolved */
/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from 'react';
import Link from 'next/link';
import { SocialMediaLinks } from 'Constant/socialMediaLinks';
import FooterLink from './FooterLink';

const Footer: FC = () => (
    <>
        <div className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-4 px-3 md:px-10 py-3 lg:space-x-9 bg-primary-background">
            <div className="text-primary-text md:col-span-4 sm:col-span-4 col-span-2 lg:col-auto">
                <h1 className=" lg:text-[30px] text-[20px]  pb-6 font-bold">
                    Matrimonial
                    <p className="lg:text-sm text-[12px]  pt-38">Marriage Pvt. Ltd.</p>
                </h1>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </p>
            </div>
            <div className="  text-primary-text pl-0 lg:pl-16">
                <h1 className="md:my-8 my-3 font-bold xl:text-lg lg:text-[16px] ">Information</h1>
                <div className="grid md:space-y-7">
                    <FooterLink title="Home" url="/" />
                    <FooterLink title="About Us" url="/" />
                    <FooterLink title="Service" url="/" />
                    <FooterLink title="Contact Us" url="/" />
                </div>
            </div>
            <div className="  text-primary-text pl-10 sm:pl-0">
                <h1 className=" md:my-8 my-3 font-bold  xl:text-lg lg:text-[16px] ">Explore</h1>
                <div className="grid md:space-y-7">
                    <FooterLink title="Advance Search" url="/" />
                    <FooterLink title="Success Stories" url="/" />
                    <FooterLink title="Matrimonial Blog" url="/" />
                </div>
            </div>
            <div className=" text-primary-text ">
                <h1 className=" md:my-8 my-3 font-bold xl:text-lg lg:text-[16px] ">Support</h1>
                <div className="grid md:space-y-7">
                    <FooterLink title="Payment Option" url="/" />
                    <FooterLink title="Advertise with us" url="/" />
                    <FooterLink title="FeedBack" url="/" />
                    <FooterLink title="Safety Tips" url="/" />
                </div>
            </div>
            <div className=" text-primary-text pl-10 sm:pl-0">
                <h1 className=" md:my-8 my-3 font-bold tracking-wide xl:text-lg lg:text-[16px] ">
                    Contact Us
                </h1>
                <div className="grid md:space-y-7">
                    <p>+91 9739849106</p>
                    <p>support@gmail.com</p>
                    <div className="">
                        <p className="font-bold tracking-wide text-lg pb-4">follow us on</p>
                        <ul className="flex flex-row space-x-4">
                            {SocialMediaLinks.map((link) => (
                                <Link href={link.link} key={link.link}>
                                    <li> {link.title} </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Footer;
