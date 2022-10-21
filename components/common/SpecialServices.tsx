import { FC } from 'react';
import Image from 'next/image';

export interface SpecialServicesProps {
    img: string;
    title: string;
}

const SpecialServices: FC<SpecialServicesProps> = (props) => {
    const { img, title } = props;
    return (
        <div className="bg-white text-black w-64 h-full text-ellipsis overflow-hidden  shadow-2xl smooth scale-90 py-2 rounded-md cursor-pointer  ">
            <Image
                src={img}
                alt={title}
                width="150"
                height="150"
                layout="responsive"
                className="rounded-t-md smooth object-cover  "
            />
            <div>
                <h2 className="font-bold text-lg py-2 text-primary-background text-center">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default SpecialServices;
