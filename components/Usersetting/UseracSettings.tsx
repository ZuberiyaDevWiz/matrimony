/* eslint-disable arrow-body-style */
import { FC } from 'react';
import UserSettingLink from './UserSettingLink';
// eslint-disable-next-line import/order
import Link from 'next/link';
import UserSettingMenupage from './settingmenu';

const UseracSetting: FC = () => {
    return (
        <section>
            <div className="px-40 py-5 bg-gray-200">
                <div className="grid grid-cols-4">
                    <div className="space-y-0 pr-5">
                        <UserSettingMenupage />
                    </div>
                    <div className="userinfo col-start-2 col-span-4">
                        <h1 className="text-2xl font-bold mb-3">My Account</h1>
                        <div className="flex justify-between pl-5">
                            <h3 className="text-xl">Email</h3>

                            <Link href="/">
                                <span className="text-base font-bold cursor-pointer">Edit</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 bg-white py-5 text-base mt-2">
                            <div className="pl-5">
                                <p>Email</p>
                            </div>
                            <div>
                                <p> : rasheedsk@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex justify-between pt-5 ">
                            <h3 className="text-xl pl-5">Password</h3>

                            <Link href="/">
                                <span className="text-base font-bold cursor-pointer">Edit</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 bg-white py-5 text-base mt-2">
                            <div className="pl-5">
                                <p>Password</p>
                            </div>
                            <div>
                                <p> : ***************</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseracSetting;
