/* eslint-disable import/no-duplicates */

import { FC, useState } from 'react';
import SettingLayoutEdit from 'Layouts/EditProfileSideBar';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Radio from 'components/Form/Radio';
import Navbar from '../Navbar/Navbar';
import ProfileEdit from './EditProfileList';
import {
    ReligiousBackground,
    FamilDetails,
    MoreReligious,
    EducationDetails,
    LocationDetails,
} from './EditProfileList';

const EditProfiles: FC = () => {
    const [isActive, setIsActive] = useState(true);
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const [isActive3, setIsActive3] = useState(true);
    const [isActive4, setIsActive4] = useState(true);
    const [isActive5, setIsActive5] = useState(true);
    const [isActive6, setIsActive6] = useState(true);
    const [isActive7, setIsActive7] = useState(true);

    return (
        <section className="bg-gray-200">
            <div>
                <Navbar />
            </div>
            <div className=" flex py-10 lg:pl-52 !w-screen">
                <div className="hidden md:block">
                    <SettingLayoutEdit pageTitle="hellow" />
                </div>

                <div className="flex flex-col w-full md:w-4/5">
                    <div className="w-full md:w-4/5 ">
                        <button
                            type="button"
                            onClick={() => setIsActive(!isActive)}
                            className="flex w-full px-0 md:mx-4 justify-between bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>Basic Info</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive && (
                            <div className="md:mx-4 w-full  bg-white w-fullpt-3">
                                <div className="grid md:grid-cols-2 px-3 space-y-4">
                                    {ProfileEdit.map((predit) => (
                                        // eslint-disable-next-line react/jsx-key

                                        <>
                                            <div className="font-bold md:font-normal">
                                                {predit.title}
                                            </div>
                                            <div className="">{predit.value}</div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-4/5 md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive1(!isActive1)}
                            className="flex w-full px-0 md:mx-4 justify-between bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>Religious Background</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive1 && (
                            <div className="md:mx-4 bg-white w-full pt-3">
                                <div className="grid md:grid-cols-2  px-3 space-y-4">
                                    {ReligiousBackground.map((repedit) => (
                                        // eslint-disable-next-line react/jsx-key

                                        <>
                                            <div className="font-bold md:font-normal">
                                                {repedit.title}
                                            </div>
                                            <div className="">{repedit.value}</div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-4/5 md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive2(!isActive2)}
                            className="flex w-full px-0 md:mx-4 justify-between bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>Family</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive2 && (
                            <div className="md:mx-4 bg-white w-full pt-3">
                                <div className="grid md:grid-cols-2  px-3 space-y-4">
                                    {FamilDetails.map((fdetails) => (
                                        // eslint-disable-next-line react/jsx-key

                                        <>
                                            <div className="font-bold md:font-normal">
                                                {fdetails.title}
                                            </div>
                                            <div className="">{fdetails.value}</div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditProfiles;
