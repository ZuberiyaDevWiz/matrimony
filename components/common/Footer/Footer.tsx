import { FC } from 'react';
import FooterLink from './FooterLinks';

const Footer: FC = () => (
    <div className="bg-red-900">
        <div className=" container mx-auto px-4 pb-[30px] pt-[30px]">
            <div className="grid grid-cols-5">
                <div className="text-white pl-4">
                    <h1 className=" text-2xl pb-6 font-bold">
                        Matrimony
                        <p className="block text text-sm  pt-38">Marriage Pvt Ltd</p>
                    </h1>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>

                <div className="pl-28 flex flex-col text-white space-y-3 ">
                    <h1 className=" text-white text-lg pb-6 font-bold">Introduction</h1>
                    <FooterLink title="Home" url="/" />
                    <FooterLink title="About Us" url="/" />
                    <FooterLink title="Service" url="/" />
                    <FooterLink title="Contact Us" url="/" />
                </div>

                <div className="pl-20 flex flex-col text-white space-y-3 ">
                    <h1 className=" text-white text-lg pb-6 font-bold">Explore</h1>
                    <FooterLink title="Advance Search" url="/" />
                    <FooterLink title="Success Stories" url="/" />
                    <FooterLink title="Matrimonial Blog" url="/" />
                </div>

                <div className="pl-20 flex flex-col text-white space-y-3 ">
                    <h1 className=" text-white text-lg pb-6 font-bold">Support</h1>
                    <FooterLink title="Payment Option" url="/" />
                    <FooterLink title="Advertise with us" url="/" />
                    <FooterLink title="FeedBack" url="/" />
                    <FooterLink title="Safety Tips" url="/" />
                </div>

                <div className="pl-20 flex flex-col text-white space-y-3 ">
                    <h1 className=" text-white text-lg pb-6 font-bold">Contact Information</h1>
                    <p>contact: +91 9739849106</p>
                    <p>follow us on</p>
                    <p>support@gmil.com</p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
