/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-body-style */
import { FC } from 'react';
import Image from 'next/image';
import UserProfileLink from './UserProfileLink';

const UserProfile: FC = () => {
    return (
        <>
            <div className="mx-10">
                <section>
                    <div className="profileName grid grid-4 mx-5 h-10 leading-10 text-center bg-slate-100">
                        <h1 className="text-slate-400 pl-4 font-bold">BIO-DATA</h1>
                    </div>
                    <div className="profileDetails py-4 mx-5 border-b-4 border-red-400">
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
                                <h1 className="font-bold text-lg h-8 pr-2 leading-6 bg-slate-100 text-red-400">
                                    Rasheed Khan <span className="text-xs">( S12345678 )</span>
                                </h1>
                                <p>Age / Height </p>
                                <p>Marital Status</p>
                                <p>Posted by</p>
                                <p>Religion / Community</p>
                                <p>Location</p>
                                <p>Mother Tongue</p>
                            </div>
                            <div className="border-r-2 pt-[35px]">
                                <p className="pl-4">: 5' : 7' </p>
                                <p className="pl-4">: Never Married</p>
                                <p className="pl-4">: Sibling</p>
                                <p className="pl-4">: Muslim, Sunni</p>
                                <p className="pl-4">: Bengaluru / Bangalore</p>
                                <p className="pl-4">: Urdu</p>
                            </div>
                            <div className=" space-y-3 ml-4">
                                <h1 className="font-bold text-xl  text-red-400">Manage Profiles</h1>

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
                        <a href="/">
                            {' '}
                            <h1 className="text-white p-1 mt-7 font-bold inline text-center bg-red-400">
                                About Him
                            </h1>
                        </a>
                        <a href="/">
                            {' '}
                            <h1 className="text-white p-1 mt-2 font-bold inline text-center bg-gray-400">
                                Partner Preferences
                            </h1>
                        </a>
                    </div>

                    <div className="userFamilydetails lg mx-5 pt-3  ">
                        <div className="flex justify-between border-b-2 border-gray-200">
                            <h1 className="font-bold text-lg text-red-400 ">
                                Personality, Family Details, Career, Partnes Expectations ect.
                            </h1>
                            <div className="">
                                <a className=" text-md text-red-400" href="/">
                                    Edit
                                </a>
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
                    <div className="flex justify-between lg mx-5 pt-3 border-b-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Basics & Lifestyle</h1>

                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>

                    <div className="userBasicdetails grid grid-cols-4 mx-5 my-4">
                        <div className="space-y-1">
                            <p>Age</p>
                            <p>Date of Birth</p>
                            <p>Marital Status</p>
                            <p>Height</p>
                            <p>Grew up in</p>
                        </div>

                        <div className="  border-r-2 space-y-1">
                            <p>: 26</p>
                            <p>: 08-Feb-1996</p>
                            <p>: Never Married</p>
                            <p>: 5' 4' (162cm)</p>
                            <p>: India</p>
                        </div>
                        <div className=" pl-4">
                            <p>Diet</p>
                            <p>Personal Values</p>
                            <p>Sun Sign</p>
                            <p>Blood Group</p>
                            <p>Health Information</p>
                            <p>Disability</p>
                        </div>

                        <div className=" ">
                            <p>: Non-Veg</p>
                            <p>: Will tell you later</p>
                            <p>: Aquarius</p>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>
                            <p>: Not Specified</p>
                            <p>: None</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="userFamilydetails flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Religious Background</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userreligiondetails pb-3 grid grid-cols-4 mx-5  my-4">
                        <div className="">
                            <p>Religion</p>
                            <p>Community</p>
                            <p>Sub Community</p>
                            <p>Mother Tongue</p>
                            <p>Can Speak</p>
                        </div>

                        <div className="">
                            <p>: Muslim</p>
                            <p>: Sunni</p>
                            <p>: Not Specified</p>
                            <p>: Urdu</p>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userFamilydetails flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Family details</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userFamilydetails pb-3 grid grid-cols-4  mx-5 my-4">
                        <div className="">
                            <p>Father's Status</p>
                            <p>Mother's Status</p>
                            <p>Family Location</p>
                            <p>Native Place</p>
                        </div>

                        <div className="border-r-2">
                            <a className="text-red-400 flex " href="/">
                                : Enter Now
                            </a>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>
                            <p>: Bengaluru, Karnataka, India</p>
                            <p>: Not Specified</p>
                        </div>

                        <div className="mx-5">
                            <p>No. of Brothers</p>
                            <p>No. of Sisters</p>
                            <p>Family Type</p>
                            <p>Family Values</p>
                            <p>Family Affluence</p>
                        </div>

                        <div className="">
                            <a className="text-red-400 flex" href="/">
                                : Enter Now
                            </a>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>

                            <p>: Not Specified</p>
                            <p>: Not Specified</p>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userEduCarrerdetails flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Education & Career</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userEduCarrerdetails pb-3 grid grid-cols-4 mx-5  my-4">
                        <div className="">
                            <p>Highest Qualification</p>
                            <p>College(s) Attended</p>
                            <p>Annual Income</p>
                        </div>

                        <div className="border-r-2">
                            <p>: B.E / B.Tech - Engineering</p>
                            <p>: Jawaharlal Nehru Krishi Vishwa Vidyalaya</p>
                            <p>: INR 2 Lakh to 4 Laks</p>
                        </div>

                        <div className="mx-5">
                            <p>Working With</p>
                            <p>Working As</p>
                            <p>Employer Name</p>
                        </div>

                        <div className="">
                            <p>: Private Company</p>
                            <p>: Software Developer/ Programmer</p>
                            <p>: webranc</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userLocationdetails flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Location of Groom</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userLocationrdetails pb-3 grid grid-cols-4 mx-5 my-4">
                        <div className="">
                            <p>Current Residence</p>
                            <p>State of Residence</p>
                        </div>

                        <div className="border-r-2">
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
                    <div className="userLocationdetails flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">
                            Hobbies, Interests & more
                        </h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userLocationrdetails pb-3 grid grid-cols-4 mx-5  my-4">
                        <div className="">
                            <p>Hobbies</p>
                            <p>Interests</p>
                            <p>Favorite Reads</p>
                        </div>

                        <div className="border-r-2 ">
                            <a className="text-red-400 flex " href="/">
                                : Enter Now
                            </a>
                            <a className="text-red-400 flex " href="/">
                                : Enter Now
                            </a>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>
                        </div>

                        <div className="mx-5">
                            <p>Sport / Fitness Activities</p>
                            <p>Favourite Cuisine</p>
                            <p>Preferred Dress Style</p>
                        </div>

                        <div className="">
                            <a className="text-red-400 flex " href="/">
                                : Enter Now
                            </a>
                            <a className="text-red-400 flex " href="/">
                                : Enter Now
                            </a>
                            <a className="text-red-400 " href="/">
                                : Enter Now
                            </a>
                        </div>
                    </div>
                </section>

                <div className="Partnerpreference lg mx-5 h-8 leading-8 bg-gray-100">
                    <h1 className=" ml-1 text-lg font-bold text-gray-400"> Partner Perferance </h1>
                </div>
                <section>
                    <div className="userprefernce flex justify-between mx-5  py-3 border-b-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Basic Info</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5 my-4">
                        <div className="">
                            <p>Age</p>
                            <p>Height</p>
                            <p>Religion / Community</p>
                        </div>

                        <div className="border-r-2">
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
                    <div className="userprefernce flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Location Details</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5  my-4">
                        <div className="">
                            <p>Country living in</p>
                            <p>State living in</p>
                            <p>City / District</p>
                        </div>

                        <div className="border-r-2">
                            <p>: India</p>
                            <p>: Karnataka, Maharashtra</p>
                            <p>: Doesn't Matter </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="userprefernce flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Education & Career</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5 my-4">
                        <div className="">
                            <p>Education</p>
                            <p>Working with</p>
                            <p>Profession area</p>
                        </div>

                        <div className="border-r-2">
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
                    <div className="userprefernce flex justify-between mx-5  py-3 border-y-2 border-gray-200 ">
                        <h1 className="font-bold text-lg text-red-400 ">Other Details</h1>
                        <div className="">
                            <a className=" text-md text-red-400" href="/">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="userprefernce pb-3 grid grid-cols-4 mx-5 border-b-2 border-gray-200 my-4">
                        <div className="">
                            <p>Profile created by</p>
                        </div>

                        <div className="border-r-2">
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
            </div>
        </>
    );
};

export default UserProfile;
