/* eslint-disable import/no-duplicates */

import { FC, useState } from 'react';
import SettingLayoutEdit from 'Layouts/EditProfileSideBar';
import Image from 'next/image';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
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
    const [isHumburgerActive, setHumburgerActive] = useState(false);

    const [countCharacter, setCountCharacters] = useState(0);

    return (
        <section className="bg-[url('/images/img-12.jpg')] bg-auto bg-gray-200">
            <div>
                <Navbar />
            </div>

            <div className=" flex pt-10 pb-5 px-4 md:px-10 md:!w-auto">
                <div className="hidden md:block">
                    <SettingLayoutEdit pageTitle="hellow" />
                </div>

                <div className="flex flex-col w-full md:w-4/5">
                    <div className="flex justify-between">
                        <h1 className="text-xl md:pl-4  mb-2 font-bold text-gray-400">
                            Edit Personal Profile
                        </h1>
                        <GoThreeBars
                            className="text-2xl z-10 absolute right-0 text-transparent md:hidden"
                            onClick={() => setHumburgerActive(!isHumburgerActive)}
                        />
                        {isHumburgerActive ? (
                            <AiOutlineClose className="text-2xl md:hidden" />
                        ) : (
                            <GoThreeBars className="text-3xl mt-[-2px] md:hidden" />
                        )}
                    </div>
                    {isHumburgerActive && (
                        <div className="md:hidden pb-3 md:pb-0">
                            <SettingLayoutEdit pageTitle="hellow" />
                        </div>
                    )}
                    <div className="w-full md:w-[97%]  lg:w-full">
                        <button
                            type="button"
                            onClick={() => setIsActive(!isActive)}
                            className="flex w-full px-1 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-3  flex items-center justify-between ">
                                <div>
                                    <p>Basic Info</p>
                                </div>
                            </div>
                            <div className="pr-3">
                                {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive && (
                            <div className="md:mx-4 w-full  bg-white pt-3">
                                <div className="grid md:grid-cols-2 py-4 px-3 space-y-4">
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
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive1(!isActive1)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
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
                            <div className="md:mx-4 bg-white w-full">
                                <div className="grid md:grid-cols-2  py-4 px-3 space-y-4">
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
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive2(!isActive2)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
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
                            <div className="md:mx-4 bg-white w-full">
                                <div className="grid md:grid-cols-2 py-3  px-3 space-y-4">
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
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive3(!isActive3)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>More Religious Details</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive3 && (
                            <div className="md:mx-4 bg-white w-full">
                                <div className="grid md:grid-cols-2 py-3  px-3 space-y-4">
                                    {MoreReligious.map((moreredetails) => (
                                        // eslint-disable-next-line react/jsx-key

                                        <>
                                            <div className="font-bold md:font-normal">
                                                {moreredetails.title}
                                            </div>
                                            <div className="">{moreredetails.value}</div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive4(!isActive4)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>Education & Career</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive4 && (
                            <div className="md:mx-4 bg-white w-full">
                                <div className="grid md:grid-cols-2 py-3  px-3 space-y-4">
                                    {EducationDetails.map((edudetails) => (
                                        // eslint-disable-next-line react/jsx-key

                                        <>
                                            <div className="font-bold md:font-normal">
                                                {edudetails.title}
                                            </div>
                                            <div className="">{edudetails.value}</div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive5(!isActive5)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>Diet</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive5 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive5 && (
                            <div className="md:mx-4 bg-white w-full">
                                <div className="grid md:grid-cols-2 py-3  px-3 space-y-4">
                                    <>
                                        <div className="font-bold md:font-normal mt-4">Diet</div>
                                        <div className="">
                                            <ul>
                                                <li>
                                                    <input type="radio" name="Veg" value="Veg" />
                                                    <label className="pl-3">Veg</label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        name="Non-Veg"
                                                        value="Non-Veg"
                                                    />
                                                    <label className="pl-3">Non-Veg</label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        name="Occasionally-Non-Veg"
                                                        value="VegOccasionally-Non-Veg"
                                                    />
                                                    <label className="pl-3">
                                                        Occasionally Nom Veg
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        name="Eggetarian"
                                                        value="Eggetarian"
                                                    />
                                                    <label className="pl-3">Eggetarian</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="Jain" value="Jain" />
                                                    <label className="pl-3">Jain</label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        name="Vegan"
                                                        value="Vegan"
                                                    />
                                                    <label className="pl-3">Vegan</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive6(!isActive6)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4  flex items-center justify-between ">
                                <div>
                                    <p>Location of Groom</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive6 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive6 && (
                            <div className="md:mx-4 bg-white w-full">
                                <div className="grid md:grid-cols-2 py-3  px-3 space-y-4">
                                    {LocationDetails.map((groomlocation) => (
                                        // eslint-disable-next-line react/jsx-key

                                        <>
                                            <div className="font-bold md:font-normal">
                                                {groomlocation.title}
                                            </div>
                                            <div className="">{groomlocation.value}</div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-[97%] lg:w-full md:mt-2 mt-1 ">
                        <button
                            type="button"
                            onClick={() => setIsActive7(!isActive7)}
                            className="flex w-full px-0 md:mx-4 justify-between rounded bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 pl-4 text-sm md:text-base flex items-center justify-between ">
                                <div>
                                    <p>More About Yourself, Partner and Family</p>
                                </div>
                            </div>
                            <div className="pr-4">
                                {isActive7 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </div>
                        </button>
                        {isActive7 && (
                            <div className="md:mx-4 pb-6 px-3 bg-white w-full pt-3">
                                <div className="">
                                    <>
                                        <div className="font-bold md:font-normal">
                                            <p className="text-2xl">
                                                This section will help you make a strong impression
                                                on your pontential partner.so, express yourself.
                                            </p>
                                            <p className="text-xl font-bold">
                                                (Note : This section will be screened everytime you
                                                update it. Allow upto 24 hours for it to go live)
                                            </p>
                                        </div>
                                        <div className="pt-10">
                                            <div className="pb-3">
                                                <textarea
                                                    className="w-full h-32 px-3"
                                                    placeholder="Enter your text"
                                                    onChange={(count) =>
                                                        setCountCharacters(
                                                            count.target.value.length
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex">
                                                <table className="table-auto w-full">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Characers count :
                                                                <span className="text-gray-400">
                                                                    {' '}
                                                                    {countCharacter}
                                                                </span>
                                                            </td>

                                                            <td>min 50 max 8000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="ml-2">
                                                    <button
                                                        className="bg-sky-400 py-1 px-3 rounded text-white underline"
                                                        type="button"
                                                    >
                                                        Abc
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=" pb-6 col-start-2 col-span-6 col-end-6 w-full text-center items-center">
                <button
                    type="button"
                    className="bg-sky-400 py-1 px-4 rounded text-center items-center text-2xl text-white"
                >
                    Submit
                </button>
            </div>
        </section>
    );
};

export default EditProfiles;
