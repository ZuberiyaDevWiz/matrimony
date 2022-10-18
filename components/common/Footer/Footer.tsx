/* eslint-disable import/no-unresolved */
/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from 'react';
import Link from 'next/link';
import { SocialMediaLinks } from 'Constant/SocialMediaLinks';
import FooterLink from './FooterLink';

const Footer: FC = () => (
    <div className="bg-primary-background">
        <div className="flex py-10 mx-10 space-x-14">
            <div className="text-primary-text w-[30%]">
                <h1 className=" text-[30px] pb-6 font-bold">
                    Matrimonial
                    <p className="text text-sm  pt-38">Marriage Pvt. Ltd.</p>
                </h1>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </p>
            </div>
            {/* <div className="col-span-1" /> */}
            <div className="grid grid-cols-4 gap-2 w-[70%] ">
                <div className="flex flex-col col-span-1 space-y-2 text-primary-text">
                    <h1 className="font-bold tracking-wide text-lg pb-4">Information</h1>
                    <FooterLink title="Home" url="/" />
                    <FooterLink title="About Us" url="/" />
                    <FooterLink title="Service" url="/" />
                    <FooterLink title="Contact Us" url="/" />
                </div>

                <div className="flex flex-col col-span-1 space-y-2 text-primary-text">
                    <h1 className="font-bold tracking-wide text-lg pb-4">Explore</h1>
                    <FooterLink title="Advance Search" url="/" />
                    <FooterLink title="Success Stories" url="/" />
                    <FooterLink title="Matrimonial Blog" url="/" />
                </div>

                <div className="flex flex-col space-y-2 text-primary-text">
                    <h1 className="font-bold tracking-wide text-lg pb-4">Support</h1>
                    <FooterLink title="Payment Option" url="/" />
                    <FooterLink title="Advertise with us" url="/" />
                    <FooterLink title="FeedBack" url="/" />
                    <FooterLink title="Safety Tips" url="/" />
                </div>
                <div className="whitespace-nowrap flex flex-col space-y-2 text-primary-text">
                    <h1 className="font-bold tracking-wide text-lg pb-4">Contact Information</h1>
                    <p>+91 9739849106</p>
                    <p>support@gmail.com</p>
                    <div className="mt-4">
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
    </div>
);

export default Footer;
