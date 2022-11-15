import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import clx from 'utils/clx';
import Link from 'next/link';
import { FcConferenceCall, FcQuestions, FcPrivacy } from 'react-icons/fc';

const LinkProfileEdit = [
    { title: 'Shortlists & more', editlink: '/' },
    { title: 'New Matches', editlink: '/' },
    { title: 'My Matches', editlink: '/' },
    { title: 'Near Me', editlink: '/' },
    { title: 'Add Saved Searches', editlink: '/' },
    { title: 'My Help', editlink: '/' },
];

interface SliderProps {
    // eslint-disable-next-line react/no-unused-prop-types
    children?: ReactNode;
    pageTitle: string;
}
const SettingLayoutEdit: FC<SliderProps> = ({ pageTitle }) => {
    const router = useRouter();
    const { pathname } = router;
    const isActive = (currentLink: string) => pathname === currentLink;
    return (
        <div>
            <h1 className="font-bold text-gray-400  bg-white">Quick Links</h1>
            <div className=" bg-white">
                {LinkProfileEdit.map((profilelink) => (
                    <Link key={profilelink.editlink} href={profilelink.editlink}>
                        <li
                            className={clx(
                                'py-2 md:px-2 px-2  border-b-2  border-gray-400 hover:bg-gray-400 flex items-center cursor-pointer ',
                                isActive(profilelink.editlink)
                            )}
                        >
                            {profilelink.title}
                        </li>
                    </Link>
                ))}
            </div>
            <p className="pb-1 font-bold text-gray-400">Profile ID Search</p>
            <div>
                <input
                    type="text"
                    className=" py-1 px-3 border mr-2 border-gray-400"
                    placeholder="Enter Profile ID"
                    value=""
                    name="dfdf"
                />
                <button
                    className="bg-sky-400  text-white font-bold py-1 px-3 rounded"
                    type="button"
                    name="dfd"
                >
                    Go
                </button>
            </div>
            <div>
                <p className="text-base text-gray-500 mb-3 font-bold pt-2">Usefull Links</p>
                <div className="inline-grid text-sky-400 text-base font-bold space-y-3">
                    <div className="flex">
                        <span className="text-2xl mr-2">
                            <FcConferenceCall />
                        </span>
                        <Link href="/">Refer A Friend</Link>
                    </div>
                    <div className="flex">
                        <span className="text-2xl mr-2">
                            <FcQuestions />
                        </span>
                        <Link href="/">Need Help ?</Link>
                    </div>
                    <div className="flex">
                        <span className="text-2xl mr-2">
                            <FcPrivacy />
                        </span>
                        <Link href="/">Security Tips</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingLayoutEdit;
