import { FC, useState } from 'react';
import Image from 'next/image';

export interface CoupleStoriesProps {
    img: string;
    title: string;
    message: string;
}

const CoupleStoriesCard: FC<CoupleStoriesProps> = (props) => {
    const { img, title, message } = props;

    return (
        <div className="bg-white text-black w-64 h-full text-ellipsis shadow-2xl smooth scale-90 py-2 rounded-md cursor-pointer  ">
            <Image
                src={img}
                alt={title}
                width="150"
                height="150"
                layout="responsive"
                className="rounded-t-md smooth object-cover  "
            />
            <div className="p-4">
                <p>{message}</p>
                <h2 className="font-bold text-lg py-2 text-primary-background bg-white text-center">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default CoupleStoriesCard;
