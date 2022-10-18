import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const RecentlyViewed: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Recently Viewed"
            color="one"
            onClick={() => {
                setNext(6);
            }}
        />
    </div>
);

export default RecentlyViewed;
