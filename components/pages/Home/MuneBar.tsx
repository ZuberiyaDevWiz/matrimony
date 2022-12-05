import { FC } from 'react';

const SectionLink: FC<{ text: string }> = ({ text }) => (
    <li className="p-4 lg:p-2 xl:p-4 block hover:text-secondary-text transition duration-300">
        {text}
    </li>
);

const MenuBar = () => (
    <div className="lg:flex items-center ">
        <SectionLink text="Success Stories" />
        <li className="p-4 lg:p-2 xl:p-4 hover:text-secondary-text transition cursor-pointer lg:border-none border-y border-red-600 duration-300">
            About Us
        </li>
        <li className="p-4 lg:p-2 xl:p-4 hover:text-secondary-text cursor-pointer border-b lg:border-none border-red-600 !hover:underline-offset-1 transition duration-300 ">
            Featured Profiles
        </li>
        <li className="p-4 lg:p-2 xl:p-4 hover:text-secondary-text cursor-pointer border-b lg:border-none border-red-600 transition duration-300">
            Services
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
