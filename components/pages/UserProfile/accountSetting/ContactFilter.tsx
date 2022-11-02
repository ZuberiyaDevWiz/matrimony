/* eslint-disable react/jsx-key */
import { FC } from 'react';
import Link from 'next/link';
import { UserMemberList } from 'constants/settingLinks';
import SettingLayout from 'Layouts/SettingSideBar';

// eslint-disable-next-line arrow-body-style
const ContactFilter: FC = () => {
    return (
        <SettingLayout pageTitle="Hello">
            <section>
                <h1 className="text-xl text-gray-400 font-bold mb-3">Who can contact me?</h1>
                <div className="bg-white w-fit px-4 mt-4">
                    <h1 className="text-xl font-bold mb-7">
                        Only Members matching the below criteria will get to see your contact
                        details
                    </h1>

                    <table className="w-full">
                        <tbody>
                            {UserMemberList.map((members) => (
                                <tr>
                                    <td className=" border-b-2 broder-gray-100 py-2">
                                        {members.title}
                                    </td>
                                    <td className=" border-b-2 broder-gray-100 py-2">
                                        {members.value}
                                    </td>
                                    <td className=" border-b-2 broder-gray-100 py-2text-base text-end font-bold ">
                                        <Link href="/">{members.url}</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </SettingLayout>
    );
};
export default ContactFilter;
