import Image from 'next/image';
import Button from 'components/form/Button';
import { FC } from 'react';
import Register from './Register';

const SectionLink: FC<{ text: string }> = ({ text }) => (
    <li className="p-4 block hover:text-secondary-text transition duration-300">{text}</li>
);

const SectionOne = () => (
    <section>
        <div className="relative h-fit ">
            <div className="h-screen border-b-8">
                <Image
                    src="/images/img-3.jpeg"
                    layout="fill"
                    className="absolute object-cover "
                    alt="section one picture"
                />
                <div>
                    <ul className="text-black no-underline rounded-full opacity-80 font-bold px-6 cursor-pointer bg-white absolute  flex justify-end top-6 right-16 items-center w-fit">
                        <SectionLink text="Success Stories" />
                        <li className="p-4 hover:text-secondary-text transition duration-300">
                            About Us
                        </li>
                        <li className="p-4 hover:text-secondary-text !hover:underline-offset-1 transition duration-300 ">
                            Featured Profiles
                        </li>
                        <li className="p-4 hover:text-secondary-text transition duration-300">
                            Services
                        </li>
                        <li className="p-4 hover:text-secondary-text transition duration-300">
                            Sign In
                        </li>
                        <div className="p-4">
                            <Button text="Register" additionalStyles="px-4 text-secondary-text" />
                        </div>
                    </ul>
                </div>
                <div className="absolute mt-[5%] ml-10 ">
                    <Register />
                </div>
            </div>
        </div>
    </section>
);
export default SectionOne;
