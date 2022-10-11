import { FC } from 'react';
import Image from 'next/image';
import Button from 'components/Form/Button';

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
            <div className="bg-orange-200 h-54 space-y-4 text-black w-64 h-full text-ellipsis overflow-visible  shadow-xl smooth scale-90 px-12 py-6 rounded-md cursor-pointer">
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
                <div className="text-center ">
                    <h1 className="font-bold text-lg text-primary-background ">{name}</h1>
                    <div className="flex justify-around">
                        <div className="flex space-x-2 ">
                            <p className="font-semibold">Age:</p>
                            <p> {age}</p>
                        </div>
                        <div className="flex justify-between space-x-2">
                            <p className="font-semibold">Height:</p>
                            <p>{height}</p>
                        </div>
                    </div>
                    <p className="font-semibold">{graduation}</p>
                    <p className="font-semibold">{place}</p>
                </div>
                <div className="text-primary-text">
                    <Button text="View Profile" color="one" rounded />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProfileCard;
