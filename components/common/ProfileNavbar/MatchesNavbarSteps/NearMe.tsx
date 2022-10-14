import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const NearMe: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Near Me"
            color="one"
            onClick={() => {
                setNext(5);
            }}
        />
    </div>
);

export default NearMe;
