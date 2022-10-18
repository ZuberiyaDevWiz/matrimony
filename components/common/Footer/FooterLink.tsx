import { FC } from 'react';
import Link from 'next/link';

export interface FooterLinkProps {
    title: string;
    url: string;
}

const FooterLink: FC<FooterLinkProps> = ({ title, url }) => <Link href={url}>{title}</Link>;

export default FooterLink;
