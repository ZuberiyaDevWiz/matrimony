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
        <div className="bg-white text-black w-64 h-full text-ellipsis pb-10 shadow-2xl smooth scale-90 py-2 rounded-md cursor-pointer  ">
            <Image
                src={img}
                alt={title}
                width="150"
                height="150"
                layout="responsive"
                className="rounded-t-md smooth object-cover  "
            />

            <div>
                <h2 className="font-bold text-lg py-2 text-primary-background bg-white text-center">
                    {title}
                </h2>
                <div className=" relative z-6 px-4 hover:h-[256px] b-0 r-0 hover:text-white -mt-[300px] h-[256px] hover:bg-black text-transparent hover:opacity-70 ">
                    <div className="text-center">{title}</div>
                    <p
                        className="text-justify font-normal 
                 w-full transition-transform "
                    >
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoupleStoriesCard;
