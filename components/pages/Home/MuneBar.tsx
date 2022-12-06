/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC } from 'react';

const SectionLink: FC<{ text: string }> = ({ text }) => (
    <li className="p-4 lg:p-2 xl:p-4 block hover:text-secondary-text transition duration-300">
        {text}
    </li>
);

const scrollDown = () => {
    window.scrollTo({
        top: 450,
        behavior: 'smooth',
    });
};

const scrollDown1 = () => {
    window.scrollTo({
        top: 950,
        behavior: 'smooth',
    });
};

const scrollDown2 = () => {
    window.scrollTo({
        top: 1600,
        behavior: 'smooth',
    });
};

const scrollDown3 = () => {
    window.scrollTo({
        top: 2750,
        behavior: 'smooth',
    });
};

const MenuBar = () => (
    <div className="lg:flex items-center ">
        <button type="button" name="successstory" className="cursor-pointer" onClick={scrollDown}>
            <SectionLink text="Success Stories" />
        </button>

        <li className="p-4 lg:p-2 xl:p-4 hover:text-secondary-text transition cursor-pointer lg:border-none border-y border-red-600 duration-300">
            <button type="button" name="whyus" onClick={scrollDown1}>
                About Us
            </button>
        </li>

        <li className="p-4 lg:p-2 xl:p-4 hover:text-secondary-text cursor-pointer border-b lg:border-none border-red-600 !hover:underline-offset-1 transition duration-300 ">
            <button type="button" name="whyus" onClick={scrollDown2}>
                Featured Profiles
            </button>
        </li>
        <li className="p-4 lg:p-2 xl:p-4 hover:text-secondary-text cursor-pointer border-b lg:border-none border-red-600 transition duration-300">
            <button type="button" name="whyus" onClick={scrollDown3}>
                Services
            </button>
        </li>

        <div className="p-4">
            <button
                type="button"
                name="register"
                className="border border-gray-700 px-3 py-2 text-white bg-red-700 lg:bg-white lg:text-red-700 lg:hover:text-white lg:hover:bg-red-700"
            >
                Login
            </button>
        </div>
    </div>
);

export default MenuBar;
