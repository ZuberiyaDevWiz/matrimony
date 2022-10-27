/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import { FC, useState } from 'react';
import SettingLayout from './SettingLayout';
// eslint-disable-next-line import/order
import Link from 'next/link';

const UseracSetting: FC = () => {
    const [showname, setShowName] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    return (
        <SettingLayout>
            <div className="pr-40 bg-gray-200">
                <div className="userinfo col-start-2 col-span-4">
                    <h1 className="text-xl text-gray-400 font-bold mb-3">My Account</h1>
                    <div className="flex justify-between pl-5">
                        <h3 className="text-xl">Email</h3>

                        <button
                            type="button"
                            onClick={() => setShowName(!showname)}
                            className="text-base font-bold cursor-pointer"
                        >
                            Edit
                        </button>
                    </div>
                    <div className="bg-white rounded-md p-5">
                        <div className="grid grid-cols-2   text-base mt-2">
                            <div className="">
                                <p>Email</p>
                            </div>
                            <div>
                                {!showname ? (
                                    <>
                                        <p> : rasheedsk@gmail.com</p>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            className="border-2 pl-2 border-gray-300"
                                            type="email"
                                            defaultValue=" rasheedsk@gmail.com"
                                        />
                                        <div className="flex mt-6 w-40 items-center">
                                            <button className="bg-blue-400 py-1 px-3 rounded text-white">
                                                Save
                                            </button>
                                            <p className="mx-3"> or</p>
                                            <Link href="/">
                                                <span className="text-blue-400 cursor-pointer">
                                                    Cancel
                                                </span>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pt-5 ">
                        <h3 className="text-xl pl-5">Password</h3>

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showpassword)}
                            className="text-base font-bold cursor-pointer"
                        >
                            Edit
                        </button>
                    </div>
                    <div className="grid grid-cols-2 bg-white py-5 text-base">
                        <div className="pl-5">
                            {!showpassword ? (
                                <>
                                    <p>Password</p>
                                </>
                            ) : (
                                <>
                                    <p className="mb-4">Old Password</p>
                                    <p>New Password</p>
                                </>
                            )}
                        </div>
                        <div>
                            {!showpassword ? (
                                <>
                                    <p> : **************</p>
                                </>
                            ) : (
                                <>
                                    <div className="mb-2">
                                        <input
                                            className="border-2 border-gray-300"
                                            type="password"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="border-2 border-gray-300"
                                            type="password"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div className="flex mt-6 w-40 items-center">
                                        <button className="bg-blue-400 py-1 px-3 rounded text-white">
                                            Save
                                        </button>
                                        <p className="mx-3"> or</p>
                                        <Link href="/">
                                            <span className="text-blue-400 cursor-pointer">
                                                Cancel
                                            </span>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </SettingLayout>
    );
};

export default UseracSetting;
