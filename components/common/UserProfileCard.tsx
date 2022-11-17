import Button from 'components/form/Button';
import { FormEvent } from 'react';
import Image from 'next/image';
import { useRegister } from 'store/index';
import { MdVerifiedUser } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import Navbar from './Navbar/Navbar';

const UserProfileCard = () => {
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const {
        firstName,
        lastName,
        residingState,
        residingCity,
        section,
        maritialStatus,
        highestEducation,
        dob,
        select,
        height,
    } = useRegister((state) => state.registerDetails);

    return (
        <section className="w-full h-full bg-gray-300">
            <div>
                <Navbar />
            </div>
            <form
                onSubmit={submitHandler}
                className="w-[60vw] mx-auto px-8 my-6 shadow-2xl bg-white h-fit"
            >
                <div className="flex items-center justify-between py-4">
                    <span className=" font-semibold flex ">Profile Create for My {select}</span>
                    <div className="space-x-3 ">
                        <button
                            type="button"
                            className="bg-gray-300 border-1 py-1 px-2 hover:bg-primary-background hover:text-white text-xs"
                        >
                            Mark as Viewed
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 border-1 py-1 px-2 hover:bg-primary-background hover:text-white text-xs"
                        >
                            View Similar Profile
                        </button>
                    </div>
                </div>
                <div className="border-[1px] border-gray-300 flex flex-row">
                    <div>
                        <Image
                            src="/images/img-11.jpeg"
                            alt="card-pic"
                            width="300"
                            height="450"
                            className="object-cover"
                        />
                    </div>
                    <div className="px-4 w-full">
                        <div className="flex justify-between items-center border-b-[1px] border-gray-300 py-4">
                            <div className="flex flex-col gap-1 ">
                                <div className="flex space-x-2">
                                    <span className="text-xl font-semibold tracking-wide">
                                        {`${firstName} ${lastName}`}
                                    </span>
                                    <span className="text-blue-800 text-lg my-auto">
                                        <MdVerifiedUser />
                                    </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="text-sm">
                                        <GoLocation />
                                    </span>
                                    <span className="pb-1 text-base font-light tracking-wide">{`${residingCity} ${residingState}`}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="bg-primary-background  px-3 py-1 tracking-wider rounded-sm text-white text-xs w-fit h-8 ">
                                    <span className="inline-block align-middle pt-1">PREMIUM</span>
                                </div>
                                <div className="flex space-x-2 bg-primary-background px-3 py-1 tracking-wider rounded-sm text-white text-xs w-fit h-8 items-center cursor-pointer">
                                    <span className="text-white text-sm ">
                                        <BsFillChatQuoteFill />
                                    </span>
                                    <span>Chat now</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between tracking-wide py-4">
                            <div className="flex flex-col">
                                <span className="text-base font-light">
                                    {`${
                                        new Date().getFullYear() - new Date(dob).getFullYear()
                                    } years, ${height}`}
                                    5ft 6inch
                                </span>
                                <span className="text-base font-light">
                                    {' '}
                                    Muslim, {`${section}`}
                                </span>
                                <span className="text-base font-light">Urdu</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-light">{`${maritialStatus}`}</span>
                                <span className="text-base font-light">{`${highestEducation}`}</span>
                                <span className="text-base font-light"> Software Developer</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-base font-light tracking-wide  line-clamp-2 overflow-hidden">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos
                                sint odio aliquam similique illo suscipit, ab eligendi perspiciatis
                                dignissimos debitis saepe voluptate doloremque blanditiis,
                                repudiandae unde ipsa harum repellat?
                            </p>
                        </div>
                        <div className="flex w-full gap-4 py-6 text-lg text-black">
                            <Button text="View Profile" color="two" additionalButtonStyles="py-1" />
                            <Button text="Connect" color="two" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default UserProfileCard;
