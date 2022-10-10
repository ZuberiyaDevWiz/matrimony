import { FC } from 'react';
import Image from 'next/image';

export interface FeaturedProfilesProps {
    img: string;
    name: string;
    age: number;
    height: number;
    graduation: string;
    place: string;
}

const FeaturedProfileCard: FC<FeaturedProfilesProps> = (props) => {
    const { img, name, age, height, graduation, place } = props;
    return (
        <section>
            <div className="bg-orange-200 text-black w-64 h-full text-ellipsis overflow-visible  shadow-xl smooth scale-90 px-12 py-6 rounded-md cursor-pointer">
                <div className="blur-sm">
                    <Image
                        src={img}
                        alt={name}
                        width="50"
                        height="50"
                        layout="responsive"
                        className="rounded-full smooth object-cover"
                    />
                </div>
                <div>
                    <h1 className="font-bold text-lg py-2 text-primary-background ">{name}</h1>
                    <div className="flex justify-between">
                        <span>{age}</span>
                        <span>{height}</span>
                    </div>
                    <span>{graduation}</span>
                    <span>{place}</span>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProfileCard;
