import { FC } from 'react';

const SectionLink: FC<{ text: string }> = ({ text }) => (
    <li className="p-4 block hover:text-secondary-text transition duration-300">{text}</li>
);

const MenuBar = () => (
    <div className="lg:flex items-center hidden">
        <SectionLink text="Success Stories" />
        <li className="p-4 hover:text-secondary-text transition cursor-pointer duration-300">
            About Us
        </li>
        <li className="p-4 hover:text-secondary-text cursor-pointer !hover:underline-offset-1 transition duration-300 ">
            Featured Profiles
        </li>
        <li className="p-4 hover:text-secondary-text cursor-pointer transition duration-300">
            Services
        </li>

        <div className="p-4">
            <button
                type="button"
                name="register"
                className="border border-gray-700 px-3 py-2 text-red-700 hover:text-white hover:bg-red-700"
            >
                Login
            </button>
        </div>
    </div>
);

export default MenuBar;
