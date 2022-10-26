import { FC } from 'react';
import Link from 'next/link';

interface UserSettingLinkProps {
    title: string;
    url: string;
    additionalStyles?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserSettingLink: FC<UserSettingLinkProps> = ({ title, url, additionalStyles }) => (
    <Link href={url}>
        <div className="hover:bg-gray-200 cursor-pointer pl-4 border-1   py-3 bg-gray-100">
            {title}
        </div>
    </Link>
);

export default UserSettingLink;
