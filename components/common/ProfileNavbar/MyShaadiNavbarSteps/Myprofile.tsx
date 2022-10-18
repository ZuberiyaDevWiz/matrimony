import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const MyProfile: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="MyProfile"
            color="one"
            onClick={() => {
                setNext(3);
            }}
        />
    </div>
);

export default MyProfile;
