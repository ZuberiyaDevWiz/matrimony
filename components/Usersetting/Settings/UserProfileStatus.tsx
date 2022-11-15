import { FC } from 'react';
import Link from 'next/link';
import SettingLayout from 'Layouts/SettingSideBar';

const UserProfileStatus: FC = () => (
    <SettingLayout pageTitle="Helloo">
        <section>
            <h1 className="text-xl text-gray-400 font-bold">Hide / Delete Profile</h1>
            <div className="bg-white px-4 mt-4">
                <table className="py-5 w-full">
                    <tbody>
                        <tr>
                            <td className=" border-b-2 broder-gray-100 py-2">Hide Profile</td>
                            <td className=" border-b-2 broder-gray-100 pl-32 py-2">
                                Your Profile is currently Visible
                            </td>
                            <td className=" border-b-2 broder-gray-100 py-2 text-base text-end font-bold ">
                                <Link href="/">Hide</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className=" border-b-2 broder-gray-100 py-2">Delete Profile</td>
                            <td className=" border-b-2 broder-gray-100 pl-32 py-2">
                                Delete your Profile from Shaadi.com
                            </td>
                            <td className=" border-b-2 broder-gray-100 py-2 text-base text-end font-bold ">
                                <Link href="/">Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </SettingLayout>
);

export default UserProfileStatus;
