import Radio from 'components/form/Radio';
import CheckBox from 'components/form/Checkbox';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';
import { CgGirl, CgBoy } from 'react-icons/cg';
import { FcPrivacy } from 'react-icons/fc';

const ProfileEdit = [
    {
        id: 1,
        title: <p className="mt-4">Profile created by</p>,
        value: (
            <select className="border md:w-52 w-full  border-gray-400">
                <option>Sibling</option>
                <option>Friend</option>
                <option>Myself</option>
            </select>
        ),
    },
    {
        id: 2,
        title: 'Gender',
        value: 'Male',
    },
    {
        id: 3,
        title: 'Date of Birth ',
        value: (
            <>
                <div className="flex">
                    <p>08 February 1996</p>

                    <span className="px-1">|</span>
                    <span className="text-sky-500 font-bold">
                        <Link href="/">Edit</Link>
                    </span>
                </div>
            </>
        ),
    },
    {
        id: 4,
        title: 'Martial status',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Never Married</option>
                <option>Divorce</option>
            </select>
        ),
    },
    {
        id: 5,
        title: 'Height',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>5ft 4in - 162cm</option>
                <option>5ft 5in - 165cm</option>
                <option>5ft 6in - 167cm</option>
                <option>5ft 7in - 170cm</option>
                <option>5ft 8in - 172cm</option>
                <option>5ft 9in - 175cm</option>
                <option>5ft 10in - 177cm</option>
                <option>5ft 11in - 180cm</option>
                <option>6ft - 182cm</option>
            </select>
        ),
    },
    {
        id: 6,
        title: 'Health Information',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Select</option>
                <option>Good</option>
            </select>
        ),
    },
    {
        id: 7,
        title: 'Any Disability ?',
        value: (
            <div className="flex items-start">
                <Radio name="disability" options={[' None ', ' Physical Disability ']} />
            </div>
        ),
    },
    {
        id: 8,
        title: 'Blood Group',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
            </select>
        ),
    },
];

export const ReligiousBackground = [
    {
        id: 1,
        title: 'Religion',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Muslim</option>
                <option>Hindu</option>
                <option>Chirstain</option>
                <option>Jain</option>
                <option>Buddis</option>
                <option>Sikh</option>
            </select>
        ),
    },
    {
        id: 2,
        title: 'Mother Tongue',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Assamese</option>
                <option>Bengali</option>
                <option>Bodo</option>
                <option>Dogri</option>
                <option>Gujarati</option>
                <option>Hindi</option>
                <option>Kannada</option>
                <option>Kashmiri</option>
                <option>Konkani</option>
                <option>Malayalam</option>
                <option>Manipuri</option>
                <option>Marathi</option>
                <option>Maithili</option>
                <option>Nepali</option>
                <option>Oriya</option>
                <option>Punjabi</option>
                <option>Sanskrit</option>
                <option>Santhali</option>
                <option>Sindhi</option>
                <option>Tamil</option>
                <option>Telugu</option>
                <option>Urdu</option>
            </select>
        ),
    },
    {
        id: 3,
        title: 'Community ',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Sunni</option>
                <option>Lebbai</option>
                <option>Shiaa</option>
            </select>
        ),
    },
    {
        id: 4,
        title: 'Sub-Community',
        value: (
            <>
                <div className="inline-grid">
                    <input
                        type="text"
                        className="md:w-52 w-full border border-gray-400"
                        value=""
                        name="dfdf"
                    />
                    <div className="py-4">
                        <CheckBox
                            options={['send']}
                            label=" Not particular about my Partner's Caste / Sect (Caste No Bar) "
                            name="df"
                        />
                    </div>
                </div>
            </>
        ),
    },
];

export const FamilDetails = [
    {
        id: 1,
        title: 'Fathers Status',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Select</option>
                <option>Alive</option>
                <option>No More</option>
            </select>
        ),
    },
    {
        id: 2,
        title: 'Mother Status',
        value: (
            <select className="md:w-52 w-full border border-gray-400">
                <option>Select</option>
                <option>Alive</option>
                <option>No More</option>
            </select>
        ),
    },
    {
        id: 3,
        title: 'Family Location ',
        value: (
            <>
                <select className="md:w-52 w-full border border-gray-400">
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengalore / Bengaluru</option>
                    <option>Chennai</option>
                    <option>Hydrabad</option>
                    <option>Vijayawada</option>
                    <option>Triputi</option>
                    <option>Vellore</option>
                    <option>Vizag</option>
                </select>
                <span className="pl-5 text-sky-500 font-bold">
                    <CheckBox options={['send']} label="Same as him" name="df" />
                </span>
            </>
        ),
    },
    {
        id: 4,
        title: 'Native Place',
        value: (
            <input
                type="text"
                className="md:w-52 w-full border border-gray-400"
                placeholder="Enter Native Place"
                value=""
                name="dfdf"
            />
        ),
    },
    {
        id: 4,
        title: 'No. of Siblings',
        value: (
            <>
                <div className="flex  items-center">
                    <div className="inline-grid">
                        <input
                            type="text"
                            className="w-8 border border-gray-400 text-center"
                            value=""
                            name="dfdf"
                            placeholder="0"
                        />
                        <p className="">Not Married</p>
                    </div>
                    <CgBoy className="text-6xl text-sky-400" />
                    <div className="md:inline-grid">
                        <input
                            type="text"
                            className="w-8 border border-gray-400 text-center"
                            value=""
                            name="dfdf"
                            placeholder="0"
                        />
                        <p className="">Married</p>
                    </div>
                    <div className="inline-grid pl-7">
                        <input
                            type="text"
                            className="w-8 border border-gray-400 text-center"
                            value=""
                            name="dfdf"
                            placeholder="0"
                        />
                        <p className="">Not Married</p>
                    </div>
                    <CgGirl className="text-6xl text-rose-300" />
                    <div className="inline-grid text-center ">
                        <input
                            type="text"
                            className="w-8 border border-gray-400 text-center"
                            value=""
                            name="dfdf"
                            placeholder="0"
                        />
                        <p className="">Married</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 5,
        title: 'Family Type',
        value: <Radio name="familytype" options={[' Joint ', ' Nuclear ']} />,
    },
    {
        id: 6,
        title: 'Family values',
        value: <Radio name="familyvalues" options={[' Traditional', ' Moderate', ' Liberal']} />,
    },
    {
        id: 7,
        title: 'Family Affluence',
        value: (
            <>
                <select className="md:w-52 w-full border border-gray-400">
                    <option>Select</option>
                    <option>Select</option>
                    <option>Select</option>
                </select>

                <br />
                <span className="pl-3 text-sky-400 flex font-bold">
                    <Link href="/">Add more family details</Link>
                </span>
                <p className="pl-3">& get values to our Select and VIP Members</p>
            </>
        ),
    },
];

export const MoreReligious = [
    {
        id: 1,
        title: 'Namaaz / Salaah',
        value: (
            <select className="w-52 border border-gray-400">
                <option>Select</option>
                <option>5 Alhamdullah</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                <option>Only Friday</option>
            </select>
        ),
    },
    {
        id: 2,
        title: (
            <>
                <p className="flex">
                    Zakaat <FaQuestionCircle />
                </p>
            </>
        ),
        value: <Radio name="zakaat" options={[' Yes', ' No']} />,
    },
    {
        id: 3,
        title: 'Fasting in Ramadan',
        value: <Radio name="fasting" options={[' Yes', ' No']} />,
    },
];

export const EducationDetails = [
    {
        id: 1,
        title: 'Highest Qualification',
        value: (
            <select className="w-52 border border-gray-400">
                <option>BE / B.Tech</option>
                <option>Bsc / Bacholar of Science</option>
                <option>ME / M.Tech</option>
                <option>B.Com</option>
            </select>
        ),
    },
    {
        id: 2,
        title: ' College Attended',
        value: (
            <>
                <input
                    type="text"
                    className="w-52 border border-gray-400"
                    value="Jawaharlal Nehru Krishi"
                    name="dfdf"
                />
                <br />
                <span className=" text-sky-500 font-bold pl-2">
                    <Link className="" href="/">
                        Add Another
                    </Link>
                </span>
            </>
        ),
    },
    {
        id: 3,
        title: 'Working With ',
        value: (
            <select className="w-52 border border-gray-400">
                <option>Private Company</option>
                <option>Business</option>
                <option>Goverment</option>
                <option>Public Servent</option>
                <option>Social Service</option>
            </select>
        ),
    },
    {
        id: 4,
        title: 'Working As',
        value: (
            <select className="w-52 border border-gray-400">
                <option>Software Developer / Programmer</option>
                <option>IT - Information Technology</option>
                <option>Accounting</option>
                <option>Helper</option>
                <option>Office Assistant</option>
            </select>
        ),
    },
    {
        id: 5,
        title: 'Employer Name',
        value: (
            <input
                type="text"
                className="w-52 border border-gray-400"
                value="webranc"
                name="dfdf"
            />
        ),
    },
    {
        id: 6,
        title: 'Annual Income',
        value: (
            <>
                <>
                    <select className="w-52 border border-gray-400">
                        <option>INR 2 Lakh to 4 Lakh</option>
                        <option>INR 4 Lakh to 5 Lakh</option>
                        <option>INR 5 Lakh to 7 Lakh</option>
                        <option>INR 7 Lakh to 10 Lakh</option>
                    </select>

                    <span className="pl-2">
                        <CheckBox options={['send']} label=" Keep this private" name="df" />
                    </span>
                </>
                <span className="text-2xl">
                    <FcPrivacy />
                </span>
            </>
        ),
    },
];

export const LocationDetails = [
    {
        id: 1,
        title: 'Country Living in',
        value: (
            <select className="w-52 border border-gray-400">
                <option>India</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>America</option>
            </select>
        ),
    },
    {
        id: 2,
        title: ' State Living in',
        value: (
            <>
                <select className="w-52 border border-gray-400">
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Andra Pradesh</option>
                    <option>Kerala</option>
                </select>
            </>
        ),
    },
    {
        id: 3,
        title: (
            <p>
                City Living in <span>(Nearest City)</span>
            </p>
        ),
        value: (
            <>
                <select className="w-52 border border-gray-400">
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengalore / Bengaluru</option>
                    <option>Chennai</option>
                    <option>Hydrabad</option>
                    <option>Vijayawada</option>
                    <option>Triputi</option>
                    <option>Vellore</option>
                    <option>Vizag</option>
                </select>
            </>
        ),
    },
    {
        id: 4,
        title: 'Grew up in',
        value: (
            <>
                <p>Available options</p>
                <div className="flex">
                    <div className="flex justify-start">
                        <div className="h-24 w-52 mr-7 pl-2 border border-gray-300 overflow-y-scroll">
                            <CheckBox options={['send']} label="Australia" name="df" />
                            <CheckBox options={['send']} label="Canada" name="df" />
                            <CheckBox options={['send']} label="New Zealand" name="df" />
                            <CheckBox options={['send']} label="Turkey" name="df" />
                            <CheckBox options={['send']} label="Pakistan" name="df" />
                            <CheckBox options={['send']} label="America" name="df" />
                            <CheckBox options={['send']} label="Italy" name="df" />
                            <CheckBox options={['send']} label="Frence" name="df" />
                            <CheckBox options={['send']} label="England" name="df" />
                            <CheckBox options={['send']} label="Saudi" name="df" />
                        </div>
                    </div>

                    <div>
                        <p className=" mt-[-25px]">My Selection(s)</p>
                        <div className="h-24 pl-2 border w-52 border-gray-300 overflow-y-scroll">
                            <CheckBox options={['send']} label="India" name="df" />
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 5,
        title: 'Ethnic Origin',
        value: (
            <select className="w-52 border border-gray-400">
                <option>India</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>America</option>
            </select>
        ),
    },
    {
        id: 6,
        title: 'Zip/Pin Code',
        value: <input type="text" className="w-52 border border-gray-400" value="" name="dfdf" />,
    },
];
export default ProfileEdit;
