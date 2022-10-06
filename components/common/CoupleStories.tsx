import { FC } from "react";
import Image from "next/image";

export interface CoupleStoriesProps {
    img: string;
    title:string;
    message: string;
}

const CoupleStoriesCard: FC<CoupleStoriesProps> = (props) => {
    const { img, title, message } = props; 
    return (
        <div>
            <Image src={img} alt={title} height="160" width="140" layout="responsive" />
            <div>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default CoupleStoriesCard;