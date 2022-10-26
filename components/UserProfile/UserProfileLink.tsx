import { FC } from 'react';
import Link from 'next/link';

interface UserProfileLinkProps {
    title: string;
    url: string;
    additionalStyles?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserProfileLink: FC<UserProfileLinkProps> = ({ title, url, additionalStyles }) => (
    <>
        <Link href={url}>
            <div className="hover:text-sky-400 cursor-pointer">{title}</div>
        </Link>
    </>
);

export default UserProfileLink;
