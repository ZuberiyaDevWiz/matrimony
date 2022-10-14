import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const MyPhotos: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Myphotos"
            color="one"
            onClick={() => {
                setNext(4);
            }}
        />
    </div>
);

export default MyPhotos;
