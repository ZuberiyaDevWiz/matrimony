import { FC } from 'react';
import Image from 'next/image';

export interface CoupleStoriesProps {
    img: string;
    title: string;
    message: string;
}

const CoupleStoriesCard: FC<CoupleStoriesProps> = (props) => {
    const { img, title, message } = props;
    return (
        <div>
            <div className="bg-white text-black w-64 h-full text-ellipsis overflow-hidden  shadow-2xl smooth scale-90 py-2 rounded-md cursor-pointer  ">
                <Image
                    src={img}
                    alt={title}
                    width="50"
                    height="50"
                    layout="responsive"
                    className="rounded-t-md smooth object-cover  "
                />
                <div>
                    <h2 className="font-bold text-lg py-2 text-primary-background text-center">
                        {title}
                    </h2>
                    <p className="text-justify font-normal px-4 line-clamp-2 hover:line-clamp-none w-full transition-all">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoupleStoriesCard;
