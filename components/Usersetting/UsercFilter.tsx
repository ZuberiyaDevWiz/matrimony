/* eslint-disable react/jsx-key */
import { FC } from 'react';
import Link from 'next/link';
import UserMemberList from './UserMembeList';

// eslint-disable-next-line arrow-body-style
const UsercFilter: FC = () => {
    return (
        <section>
            <div className="w-screen bg-gray-200 py-10">
                <div className="w-fit mx-auto">
                    <div className="grid grid-cols-4">
                        <div className="userinfo col-start-2 col-span-4">
                            <h1 className="text-xl font-bold pl-4 mb-3">Who can contact me?</h1>

                            <div className=" bg-white py-5 text-base mt-2">
                                <div className=" w-full">
                                    <h1 className="text-xl font-bold px-4 mb-7">
                                        Only Members matching the below criteria will get to see
                                        your contact details
                                    </h1>
                                    <div className="">
                                        <div className="py-2 px-4">
                                            <table className="w-full py-5 ">
                                                <tbody>
                                                    {UserMemberList.map((members) => (
                                                        <tr>
                                                            <td className=" border-y-2 broder-gray-100 py-2">
                                                                {members.title}
                                                            </td>
                                                            <td className=" border-y-2 broder-gray-100 py-2">
                                                                {members.value}
                                                            </td>
                                                            <td className=" border-y-2 broder-gray-100 py-2text-base text-end font-bold ">
                                                                <Link href="/">{members.url}</Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default UsercFilter;
