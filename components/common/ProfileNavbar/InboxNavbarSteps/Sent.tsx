import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const Sent: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Sent"
            color="one"
            onClick={() => {
                setNext(5);
            }}
        />
    </div>
);

export default Sent;
