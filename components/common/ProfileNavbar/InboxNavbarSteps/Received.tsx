import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const Received: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Received"
            color="one"
            onClick={() => {
                setNext(2);
            }}
        />
    </div>
);

export default Received;
