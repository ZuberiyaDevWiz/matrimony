/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-body-style */
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    UserBasicList,
    UserBasicList1,
    UserProfileList,
    communityList,
    familyList,
    familysiblingList,
    usercareerList,
    userpersonalList,
    userworkingList,
} from 'constants/UserProfileLinks';
import UserProfileLink from './UserProfileLink';

const UserProfile: FC = () => {
    return (
        <>
            <div className="lg:mx-10">
                <section>
                    <div className="profileName grid grid-4 mx-5 h-10 leading-10 text-center bg-slate-100">
                        <h1 className="text-slate-400 pl-4 font-bold">BIO-DATA</h1>
                    </div>
                    <div className="profileDetails py-4 mx-5 border-b-4 border-sky-400">
                        <div className="grid grid-cols-5 pl-4">
                            <div className=" ">
                                <Image
                                    src="/images/img-7.jpg"
                                    alt="profile"
                                    width="170"
                                    height="177"
                                />
                            </div>
                            <div className="">
                                <h1 className="font-bold text-lg h-8 pr-2 leading-6 bg-sky-400 text-white">
                                    Rasheed Khan <span className="text-xs">( S12345678 )</span>
                                </h1>
                                <div className="">
                                    {UserProfileList.map((userlist) => (
                                        <p>{userlist.title}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="border-r-2 border-sky-200 pt-[35px]">
                                {UserProfileList.map((userlistQ1) => (
                                    <p>{userlistQ1.value}</p>
                                ))}
                            </div>

                            <div className=" space-y-3 ml-4">
                                <h1 className="font-bold text-xl  ">Manage Profiles</h1>

                                <UserProfileLink title="Edit Personal Profile" url="/" />
                                <UserProfileLink title="Edit Partner Profile" url="/" />
                                <UserProfileLink title="Edit Contact Details" url="/" />
                                <UserProfileLink title="View Profile Status" url="/" />
                            </div>
                            <div className=" pt-[39px] space-y-3 ">
                                <UserProfileLink title="Add Photos" url="/" />
                                <UserProfileLink title="Hobbies & Interests" url="/" />
                                <UserProfileLink title="Set Contact Filters" url="/" />
                                <UserProfileLink title="Hide / Delete Profile" url="/" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="userdetails lg mx-5 mt-0 ">
                        <Link href="/">
                            <h1 className="text-white p-1 mr-2 mt-7 font-bold inline text-center bg-sky-400">
                                About Him
                            </h1>
                        </Link>
                        <Link href="/">
                            <h1 className="text-white p-1 mt-2 font-bold inline text-center bg-gray-400">
                                Partner Preferences
                            </h1>
                        </Link>
                    </div>

                    <div className="userFamilydetails lg mx-5 pt-3  ">
                        <div className="flex justify-between border-b-2 border-sky-200">
                            <h1 className="font-bold text-lg  ">
                                Personality, Family Details, Career, Partnes Expectations ect.
                            </h1>
                            <div className=" text-md ">
                                <Link href="/">Edit</Link>
                            </div>
                        </div>
                        <p className="pt-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industries standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages
                        </p>
                    </div>
                </section>
                <section>
                    <div className="flex justify-between lg mx-5 pt-3 border-b-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Basics & Lifestyle</h1>

                        <div className=" text-md ">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>

                    <div className="userBasicdetails md:grid md:grid-cols-4  text-sm md:text-base grid grid-cols-2 mx-5 my-4">
                        <div className="space-y-1">
                            {UserBasicList.map((userbasic) => (
                                <p>{userbasic.title}</p>
                            ))}
                        </div>

                        <div className="  md:border-r-2 md:border-sky-200 space-y-1">
                            {UserBasicList.map((userbasic) => (
                                <p>{userbasic.value}</p>
                            ))}
                        </div>
                        <div className=" md:pl-4">
                            {UserBasicList1.map((userbasic1) => (
                                <p>{userbasic1.title}</p>
                            ))}
                        </div>

                        <div className=" ">
                            {UserBasicList1.map((userbasic1) => (
                                <p>{userbasic1.value}</p>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="userFamilydetails flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Religious Background</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="religiondetails pb-3 md:grid md:grid-cols-4  text-sm md:text-base grid grid-cols-2 mx-5  my-4">
                        <div className="">
                            {communityList.map((userreligious) => (
                                <p>{userreligious.title}</p>
                            ))}
                        </div>

                        <div className="">
                            {communityList.map((userreligious) => (
                                <p>{userreligious.value}</p>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userFamilydetails flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Family details</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userFamilydetails pb-3 md:grid md:grid-cols-4 grid grid-cols-2 text-sm md:text-base  mx-5 my-4">
                        <div className="">
                            {familyList.map((familylist) => (
                                <p>{familylist.title}</p>
                            ))}
                        </div>

                        <div className="md:border-r-2 md:border-sky-200">
                            {familyList.map((famillist) => (
                                <p>{famillist.value}</p>
                            ))}
                        </div>

                        <div className="md:mx-5">
                            {familysiblingList.map((familsibling) => (
                                <p>{familsibling.title}</p>
                            ))}
                        </div>

                        <div className="">
                            {familysiblingList.map((familsibling) => (
                                <p>{familsibling.value}</p>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userEduCarrerdetails flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Education & Career</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userEduCarrerdetails pb-3 md:grid md:grid-cols-4 grid grid-cols-2 text-sm md:text-base mx-5  my-4">
                        <div className="">
                            {usercareerList.map((careerlist) => (
                                <p>{careerlist.title}</p>
                            ))}
                        </div>

                        <div className="md:border-r-2 md:border-sky-200">
                            {usercareerList.map((careerlist) => (
                                <p>{careerlist.value}</p>
                            ))}
                        </div>

                        <div className="md:mx-5">
                            {userworkingList.map((workinglist) => (
                                <p>{workinglist.title}</p>
                            ))}
                        </div>

                        <div className="">
                            {userworkingList.map((workinglist) => (
                                <p>{workinglist.value}</p>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userLocationdetails flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Location of Groom</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userLocationrdetails pb-3 grid grid-cols-4 mx-5 my-4">
                        <div className="">
                            <p>Current Residence</p>
                            <p>State of Residence</p>
                        </div>

                        <div className="border-r-2 border-sky-200">
                            <p>: Bengaluru / Bengalore, India</p>
                            <p>: Karnataka</p>
                        </div>

                        <div className="mx-5">
                            <p>Residency Status</p>
                            <p>Zip / Pin Code</p>
                        </div>

                        <div className="">
                            <p>: Citizen</p>
                            <p>: Not Specified</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userLocationdetails flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Hobbies, Interests & more</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userLocationrdetails pb-3 grid grid-cols-4 mx-5  my-4">
                        <div className="">
                            <p>Hobbies</p>
                            <p>Interests</p>
                            <p>Favorite Reads</p>
                        </div>

                        <div className="border-r-2 border-sky-200">
                            <Link href="/">: Enter Now</Link>
                            <Link href="/">: Enter Now</Link>
                            <Link href="/">: Enter Now</Link>
                        </div>

                        <div className="mx-5">
                            <p>Sport / Fitness Activities</p>
                            <p>Favourite Cuisine</p>
                            <p>Preferred Dress Style</p>
                        </div>

                        <div className="">
                            <Link href="/">: Enter Now</Link>
                            <Link href="/">: Enter Now</Link>
                            <Link href="/">: Enter Now</Link>
                        </div>
                    </div>
                </section>

                <div className="Partnerpreference lg mx-5 h-8 leading-8 bg-gray-100">
                    <h1 className=" ml-1 text-lg font-bold text-gray-400"> Partner Perferance </h1>
                </div>
                <section>
                    <div className="userprefernce flex justify-between mx-5  py-3 border-b-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Basic Info</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5 my-4">
                        <div className="">
                            <p>Age</p>
                            <p>Height</p>
                            <p>Religion / Community</p>
                        </div>

                        <div className="border-r-2 border-sky-200">
                            <p>: 19 to 26</p>
                            <p>: 4' 10'(147cm) to 5'4'(162cm)</p>
                            <p>
                                : Muslim:Ansari, Muslim: Arain, Muslim: Awan, Muslim: Dekkani,
                                Muslim:Dudekula, Muslim:Jat, Muslim Lebbai{' '}
                            </p>
                        </div>

                        <div className="mx-5">
                            <p>Mother tongue</p>
                            <p>Marital status</p>
                        </div>

                        <div className="">
                            <p>: English, Hindi, Urdu</p>
                            <p>: Never Married</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userprefernce flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Location Details</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5  my-4">
                        <div className="">
                            <p>Country living in</p>
                            <p>State living in</p>
                            <p>City / District</p>
                        </div>

                        <div className="border-r-2 border-sky-200">
                            <p>: India</p>
                            <p>: Karnataka, Maharashtra</p>
                            <p>: Doesn't Matter </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userprefernce flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Education & Career</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5 my-4">
                        <div className="">
                            <p>Education</p>
                            <p>Working with</p>
                            <p>Profession area</p>
                        </div>

                        <div className="border-r-2 border-sky-200">
                            <p>: Doesn't Matter </p>
                            <p>: Doesn't Matter </p>
                            <p>: Doesn't Matter </p>
                        </div>
                        <div className="mx-5">
                            <p>Working as</p>
                            <p>Annual income</p>
                        </div>

                        <div className="">
                            <p>: Doesn't Matter</p>
                            <p>: INR less than 1 lakh to 4 lakhs.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userprefernce flex justify-between mx-5  py-3 border-y-2 border-sky-200 ">
                        <h1 className="font-bold text-lg  ">Other Details</h1>
                        <div className="">
                            <Link href="/">Edit</Link>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5 border-b-2 border-sky-200 my-4">
                        <div className="">
                            <p>Profile created by</p>
                        </div>

                        <div className="border-r-2 border-sky-200">
                            <p>: Doesn't Matter </p>
                        </div>
                        <div className="mx-5">
                            <p>Diet</p>
                        </div>

                        <div className="">
                            <p>: Doesn't Matter</p>
                        </div>
                    </div>
                </section>
                <div className="pt-10">
                    <div className="Partnerpreference lg mx-5 h-8 leading-8 bg-gray-100">
                        <h1 className=" ml-1 text-lg font-bold text-gray-400">My Contact detail</h1>
                    </div>
                </div>

                <section>
                    <div className="pt-7">
                        <div className="userpersonaldetails pb-3 border-y-2 border-sky-100 grid grid-cols-4 mx-5 my-4">
                            <div className="">
                                {userpersonalList.map((personallist) => (
                                    <p>{personallist.title}</p>
                                ))}
                            </div>

                            <div className="">
                                {userpersonalList.map((personalsist) => (
                                    <p>{personalsist.value}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex mx-5 pb-6 justify-between  text-l">
                        <Link href="/">Preview your profile</Link>
                        <Link href="/">Print</Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default UserProfile;
