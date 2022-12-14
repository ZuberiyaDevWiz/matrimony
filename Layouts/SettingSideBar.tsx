import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Navbar from 'components/common/Navbar/Navbar';
import clx from 'utils/clx';
import Link from 'next/link';

const links = [
    {
        title: 'My Account',
        link: '/setting/useraccount',
    },
    {
        title: 'Contact Filter',
        link: '/setting/contactfilter',
    },

    {
        title: 'My Privacy',
        link: '/setting/privacyoption',
    },

    {
        title: 'My Email / SMS Alert',
        link: '/setting/useremail',
    },

    {
        title: 'Profile Status',
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
        <section className="">
            <div className="lg:flex bg-gray-100 lg:px-32 px-5  py-20">
                <div className="lg:w-[30%] ">
                    <h1 className="text-xl font-bold py-3 bg-white pl-4">Settings</h1>
                    <div className="bg-white flex lg:block  ">
                        {links.map((link) => (
                            <Link key={link.link} href={link.link}>
                                <li
                                    className={clx(
                                        'mt-2 py-2 lg:mx-2 rounded-lg   lg:px-4 px-5  flex items-center cursor-pointer capitalize transition-all ',
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
                <div className="lg:px-5 w-full">
                    <p title={pageTitle} />

                    {children}
                </div>
            </div>
        </section>
    );
};

export default SettingLayout;
