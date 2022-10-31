/* eslint-disable arrow-body-style */
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import clx from 'utils/clx';
import Link from 'next/link';

const links = [
    {
        title: 'Dashboard',
        link: '/setting/contactfilter',
    },

    {
        title: 'My Profile',
        link: '/setting/privacyoption',
    },
    {
        title: 'Account Setting',
        link: '/setting/useraccount',
    },
    {
        title: 'My Photos',
        link: '/setting/useremail',
    },
    {
        title: 'Partner Preference',
        link: '/setting/userprofile-status',
    },
    {
        title: 'More',
        link: '/setting/userprofile-status',
    },
];

interface SliderProps {
    children: ReactNode;
    pageTitle: string;
}

const ProfileDashboard: FC<SliderProps> = ({ children, pageTitle }) => {
    const router = useRouter();
    const { pathname } = router;
    const isActive = (currentLink: string) => pathname === currentLink;
    return (
        <section>
            <div className="px-40 py-5 bg-gray-200 w-screen flex">
                <div className="flex w-80">
                    <div className=" space-y-0 pr-5 w-full ">
                        <h1 className="text-xl font-bold py-3 bg-white pl-4">Settings</h1>
                        {links.map((link) => (
                            <Link key={link.link} href={link.link}>
                                <li
                                    className={clx(
                                        'mt-2 py-2 mx-2 rounded-lg  px-4 flex items-center cursor-pointer capitalize transition-all ',
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
                <div className="w-full items-center">
                    <p title={pageTitle} />

                    {children}
                </div>
            </div>
        </section>
    );
};
export default ProfileDashboard;
