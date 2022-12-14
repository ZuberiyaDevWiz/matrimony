/* eslint-disable arrow-body-style */
import { FC, useState } from 'react';
import SettingLayout from 'Layouts/SettingSideBar';

const UserAccount: FC = () => {
    const [showEmail, setEmail] = useState(true);
    const [showPassword, setPassword] = useState(true);
    return (
        <SettingLayout pageTitle="Hellooo">
            <section>
                <div className=" bg-gray-200 ">
                    <div className="w-full px-5 ">
                        <h1 className="text-xl text-gray-400 font-bold mb-3">My Account</h1>
                        <div className="flex justify-between px-5">
                            <h3 className="text-xl">Email</h3>

                            <button
                                type="button"
                                onClick={() => setEmail(!showEmail)}
                                className="text-base font-bold cursor-pointer"
                            >
                                Edit
                            </button>
                        </div>
                        <div className="grid grid-cols-2 bg-white py-5 text-base mt-2">
                            <div className="pl-5 ">
                                <p>Email</p>
                            </div>
                            {showEmail ? (
                                <p> : rasheedsk@gmail.com </p>
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        className="border-2 broder-sky-400 pl-2 w-fit"
                                        defaultValue="rasheedsk@gmail.com"
                                    />
                                    <div className=" flex col-span-2 justify-center items-center mt-4">
                                        <button
                                            className="bg-sky-400 px-4 font-bold py-1 rounded text-white"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                        <p className="px-4">or</p>
                                        <a className="text-sky-400" href="/">
                                            Cancel
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex justify-between pt-5 px-5 ">
                            <h3 className="text-xl ">Password</h3>

                            <button
                                type="button"
                                onClick={() => setPassword(!showPassword)}
                                className="text-base font-bold cursor-pointer"
                            >
                                Edit
                            </button>
                        </div>
                        <div className="grid grid-cols-2 bg-white py-5 text-base mt-2">
                            {showPassword ? (
                                <>
                                    <div className="pl-5">
                                        <p>Password</p>
                                    </div>
                                    <div>
                                        <p> : ***************</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="pl-5">
                                        <p className="mb-4">Old Password</p>
                                        <p>New Password</p>
                                    </div>
                                    <div>
                                        <div>
                                            <input
                                                className="border-2 mb-4 broder-sky-400 pl-2 w-fit"
                                                type="password"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="border-2 broder-gray-400 pl-2 w-fit"
                                                type="password"
                                            />
                                        </div>
                                    </div>
                                    <div className=" flex col-span-2 justify-center items-center mt-4">
                                        <button
                                            className="bg-sky-400 px-4 font-bold py-1 rounded text-white"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                        <p className="px-4">or</p>
                                        <a className="text-sky-400" href="/">
                                            Cancel
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </SettingLayout>
    );
};

export default UserAccount;
