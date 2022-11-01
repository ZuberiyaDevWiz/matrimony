/* eslint-disable react/jsx-key */
/* eslint-disable import/named */
import Link from 'next/link';
import { FC } from 'react';
import { UserPrivacyList } from 'Constant/SettingLinks';
import SettingLayout from 'Layouts/SettingSideBar';

const PrivacyOption: FC = () => (
    <SettingLayout pageTitle="Hello">
        <section>
            <h1 className="text-xl text-gray-400 font-bold">Privacy Options</h1>
            <div className="bg-white w-fit px-4 mt-4">
                <table className="py-5 ">
                    <tbody>
                        {UserPrivacyList.map((privacy) => (
                            <tr>
                                <td className=" border-b-2 broder-gray-100 py-2">
                                    {privacy.title}
                                </td>
                                <td className=" border-b-2 broder-gray-100 pl-32 py-2">
                                    {privacy.value}
                                </td>
                                <td className=" border-b-2 broder-gray-100 py-2 text-base text-end font-bold ">
                                    <Link href="/">{privacy.url}</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </SettingLayout>
);

export default PrivacyOption;
