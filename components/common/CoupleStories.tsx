import { FC, useState } from 'react';
import Image from 'next/image';

export interface CoupleStoriesProps {
    img: string;
    title: string;
    message: string;
}

const CoupleStoriesCard: FC<CoupleStoriesProps> = (props) => {
    const { img, title, message } = props;

    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="bg-white relative text-black h-full text-ellipsis shadow-2xl smooth scale-90  rounded-md cursor-pointer  ">
            <Image
                onClick={() => setShowMessage(!showMessage)}
                src={img}
                alt={title}
                width="150"
                height="150"
                layout="responsive"
                className="rounded-t-md smooth object-cover  "
            />

            <div className="py-2">
                <h2 className="font-bold relative  text-lg text-primary-background bg-white  text-center">
                    {title}
                </h2>
            </div>
            {showMessage && (
                <div className="absolute z-10 opacity-50 text-justify text-white p-3 bg-black bottom-10">
                    <p>{message}</p>
                </div>
            )}
            {/*
            <div className=" p-3 absolute text-justify bg-black opacity-70  text-white  ">
                <div className=""></div>
            </div>
    */}
        </div>
    );
};

export default CoupleStoriesCard;
