import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import {
    MdOutlineManageAccounts,
    MdOutlineContactSupport,
    MdOutlinePrivacyTip,
} from 'react-icons/md';
import { HiOutlineBell } from 'react-icons/hi';
import { TiDeleteOutline } from 'react-icons/ti';
import Navbar from 'components/common/Navbar/Navbar';
import clx from 'utils/clx';
import Link from 'next/link';

const links = [
    {
        title: (
            <>
                <div className="hidden md:block"> My Account</div>
                <div className="block md:hidden text-3xl">
                    <MdOutlineManageAccounts />
                </div>
            </>
        ),
        link: '/setting/useraccount',
    },
    {
        title: (
            <>
                <div className="hidden md:block"> Contact Filter</div>
                <div className="block md:hidden text-3xl">
                    <MdOutlineContactSupport />
                </div>
            </>
        ),
        link: '/setting/contactfilter',
    },

    {
        title: (
            <>
                <div className="hidden md:block">My Privacy</div>
                <div className="block md:hidden text-3xl">
                    <MdOutlinePrivacyTip />
                </div>
            </>
        ),
        link: '/setting/privacyoption',
    },

    {
        title: (
            <>
                <div className="hidden md:block">My Email / SMS Alert</div>
                <div className="block md:hidden text-3xl">
                    <HiOutlineBell />
                </div>
            </>
        ),
        link: '/setting/useremail',
    },

    {
        title: (
            <>
                <div className="hidden md:block">Profile Status</div>
                <div className="block md:hidden text-3xl">
                    <TiDeleteOutline />
                </div>
            </>
        ),
        link: '/setting/userprofile-status',
    },
];

interface SliderProps {
    children: ReactNode;
    pageTitle: string;
}

// eslint-disable-next-line arrow-body-style
const SettingLayout: FC<SliderProps> = ({ children, pageTitle }) => {
    const router = useRouter();
    const { pathname } = router;
    const isActive = (currentLink: string) => pathname === currentLink;
    return (
        <section>
            <div className="lg:flex   bg-gray-100 md:px-10  py-20">
                <div className=" shrink-0 md:w-[30%]">
                    <h1 className="text-xl font-bold py-3 bg-white pl-4">Settings</h1>
                    <div className="bg-white flex lg:block  ">
                        {links.map((link) => (
                            <Link key={link.link} href={link.link}>
                                <li
                                    className={clx(
                                        'mt-2 py-2 lg:mx-2 rounded-lg   lg:px-4 px-4  flex items-center cursor-pointer capitalize transition-all ',
                                        isActive(link.link)
                                            ? 'bg-light-page-background text-light-card-text '
                                            : ' text-gray-300'
                                    )}
                                >
                                    {link.title}
                                </li>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="lg:px-5 md:w-full ">
                    <p title={pageTitle} />

                    {children}
                </div>
            </div>
        </section>
    );
};

export default SettingLayout;
