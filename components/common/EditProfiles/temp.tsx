/* eslint-disable import/no-duplicates */

import { FC, useState } from 'react';
import SettingLayoutEdit from 'Layouts/EditProfileSideBar';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Radio from 'components/form/Radio';
import Navbar from '../Navbar/Navbar';
import ProfileEdit from './EditProfileList';
import {
    ReligiousBackground,
    FamilDetails,
    MoreReligious,
    EducationDetails,
    LocationDetails,
} from './EditProfileList';

const EditProfiles1: FC = () => {
    const [isActive, setIsActive] = useState(true);
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const [isActive3, setIsActive3] = useState(true);
    const [isActive4, setIsActive4] = useState(true);
    const [isActive5, setIsActive5] = useState(true);
    const [isActive6, setIsActive6] = useState(true);
    const [isActive7, setIsActive7] = useState(true);

    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-4 bg-gray-200 pt-6 text-xl font-bold text-gray-400">
                <div className="col-start-2">
                    <h1>Edit Personal Profile</h1>
                </div>
            </div>
            <div className="grid grid-cols-5 bg-gray-200 px-20 py-10 space-x-5">
                <div className="max-sm:hidden">
                    <SettingLayoutEdit pageTitle="hellow" />
                </div>

                <div className="text-right grid col-start-2 col-span-6 col-end-6 w-full  h-fit ">
                    <button
                        type="button"
                        onClick={() => setIsActive(!isActive)}
                        className="flex justify-between bg-white items-center border-b-2  border-gray-200"
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
                        <div className="px-4 bg-white pt-3">
                            <table className="table-auto">
                                <tbody>
                                    {ProfileEdit.map((predit) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <td className="text-start py-3 w-[250px]">
                                                {predit.title}
                                            </td>
                                            <td className="text-start flex">
                                                <span className="pr-3">: </span> {predit.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between bg-white items-center w-full ">
                        <button
                            type="button"
                            onClick={() => setIsActive1(!isActive1)}
                            className="flex w-full justify-between bg-white items-center border-b-2  border-gray-200"
                        >
                            <div className="py-3 px-4 bg-white flex justify-between w-full ">
                                <div>
                                    <p>Religious Background</p>
                                </div>
                                <div className="">
                                    {isActive1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </div>
                            </div>
                        </button>
                    </div>
                    {isActive1 && (
                        <div className=" bg-white px-4 pt-3">
                            <table className="table-auto">
                                <tbody>
                                    {ReligiousBackground.map((repedit) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <td className="text-start py-3 w-[250px]">
                                                {repedit.title}
                                            </td>
                                            <td className="text-start flex">
                                                <span className="pr-3">: </span> {repedit.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between items-center cursor-pointer border-b-2 border-gray-200">
                        <button
                            onClick={() => setIsActive2(!isActive2)}
                            type="button"
                            className="py-3 bg-white w-full flex items-center justify-between "
                        >
                            <div className="flex justify-between w-full px-4">
                                <div>
                                    <p>Family</p>
                                </div>
                                <div>{isActive2 ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                            </div>
                        </button>
                    </div>
                    {isActive2 && (
                        <div className="px-4 bg-white pt-3">
                            <table className="table-auto">
                                <tbody>
                                    {FamilDetails.map((fdetails) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <td className="text-start py-3 w-[250px]">
                                                {fdetails.title}
                                            </td>
                                            <td className="text-start flex">
                                                <span className="pr-3">: </span> {fdetails.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between items-center cursor-pointer border-b-2 border-gray-200">
                        <button
                            onClick={() => setIsActive3(!isActive3)}
                            type="button"
                            className=" bg-white w-full py-3 flex items-center justify-between "
                        >
                            <div className="flex justify-between w-full px-4">
                                <div>
                                    <p>More Religious Details</p>
                                </div>
                                <div>{isActive3 ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                            </div>
                        </button>
                    </div>
                    {isActive3 && (
                        <div className="px-4 bg-white pt-3">
                            <table className="table-auto">
                                <tbody>
                                    {MoreReligious.map((moreredetails) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <td className="text-start py-3 w-[250px]">
                                                {moreredetails.title}
                                            </td>
                                            <td className="text-start flex">
                                                <span className="pr-3">: </span>{' '}
                                                {moreredetails.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between items-center cursor-pointer border-b-2 border-gray-200">
                        <button
                            onClick={() => setIsActive4(!isActive4)}
                            type="button"
                            className=" py-3 w-full bg-white flex items-center justify-between "
                        >
                            <div className="flex justify-between w-full px-4">
                                <div>
                                    <p>Education & Career</p>
                                </div>
                                <div>{isActive4 ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                            </div>
                        </button>
                    </div>
                    {isActive4 && (
                        <div className=" bg-white px-4 pt-3">
                            <table className="table-auto">
                                <tbody>
                                    {EducationDetails.map((edudetails) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <td className="text-start py-3 w-[250px]">
                                                {edudetails.title}
                                            </td>
                                            <td className="text-start flex ">
                                                <span className="pr-3">: </span> {edudetails.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between items-center cursor-pointer border-b-2 border-gray-200">
                        <button
                            onClick={() => setIsActive5(!isActive5)}
                            type="button"
                            className="py-3 bg-white w-full flex items-center justify-between "
                        >
                            <div className="flex justify-between w-full px-4">
                                <div>
                                    <p>Lifestyle</p>
                                </div>
                                <div>{isActive5 ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                            </div>
                        </button>
                    </div>
                    {isActive5 && (
                        <div className=" bg-white px-4 pt-3">
                            <table className="table-auto">
                                <tbody>
                                    <tr>
                                        <td className="text-start py-3 w-[250px]">Diet</td>

                                        <td className="text-start flex ">
                                            <span className="pr-3">: </span>
                                            <Radio
                                                name="diet"
                                                options={[
                                                    ' Veg',
                                                    ' Non-Veg',
                                                    ' Occasionally Nom Veg',
                                                    ' Eggetarian',
                                                    ' Jain',
                                                    ' Vegan',
                                                ]}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between items-center cursor-pointer border-b-2 border-gray-200">
                        <button
                            onClick={() => setIsActive6(!isActive6)}
                            type="button"
                            className="py-3 w-full bg-white flex items-center justify-between "
                        >
                            <div className="flex justify-between px-4 w-full">
                                <div>
                                    <p>Location of Groom</p>
                                </div>
                                <div>{isActive6 ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                            </div>
                        </button>
                    </div>
                    {isActive6 && (
                        <div className=" bg-white px-4 pt-3">
                            <table className="table-auto">
                                <tbody>
                                    {LocationDetails.map((groomlocation) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <td className="text-start py-3 w-[250px]">
                                                {groomlocation.title}
                                            </td>
                                            <td className="text-start  ">
                                                <span className="pr-3">: </span>{' '}
                                                {groomlocation.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex mt-2 justify-between items-center cursor-pointer border-b-2 border-gray-200">
                        <button
                            type="button"
                            onClick={() => setIsActive7(!isActive7)}
                            className="py-3 w-full bg-white flex items-center justify-between "
                        >
                            <div className="flex justify-between px-4 w-full">
                                <div>
                                    <p>More About Yourself, Partner and Family</p>
                                </div>
                                <div>{isActive7 ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                            </div>
                        </button>
                    </div>
                    {isActive7 && (
                        <div className="px-4 py-4 bg-white text-start text-xl">
                            <p>
                                This section will help you make a strong impression on your
                                pontential partner.so, express yourself.
                            </p>
                            <p className="mb-20">
                                (Note : This section will be screened everytime you update it. Allow
                                upto 24 hours for it to go live)
                            </p>
                            <div className="pb-3">
                                <textarea
                                    className="w-full h-32"
                                    value="Hello, here is a quick introduction about my brother. He has completed his B.E/B.Tech. He believes in having a blend of modern & traditional values and balancing professional & family life. Looking for someone who will be complatible with him."
                                />
                            </div>
                            <div className="flex">
                                <table className="table-auto w-full border-2 border-gray-400">
                                    <tbody>
                                        <tr>
                                            <td>Characers count</td>
                                            <td className="text-gray-400">244</td>
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
                    )}
                </div>

                <div className=" pt-6 col-start-2 col-span-6 col-end-6 w-full text-center items-center">
                    <button
                        type="button"
                        className="bg-sky-400 py-2 px-4 rounded text-center items-center text-2xl text-white"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EditProfiles1;
