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
        title: 'My Email / SMS Alert',
        link: '/setting/useremail',
    },
    {
        title: 'My Privacy',
        link: '/setting/privacyoption',
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
        <>
            <section>
                <div>
                    <Navbar />
                </div>
                <div className=" bg-gray-200">
                    <div className="">
                        <div>
                            <div className=" flex">
                                {links.map((link) => (
                                    <Link key={link.link} href={link.link}>
                                        <li
                                            className={clx(
                                                'pt-5 hover:border-gray-500 px-10 flex items-center cursor-pointer capitalize transition-all ',
                                                isActive(link.link)
                                            )}
                                        >
                                            {link.title}
                                        </li>
                                    </Link>
                                ))}
                            </div>

                            <div className=" py-10 pl-5 items-center">
                                <p title={pageTitle} />

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SettingLayout;
