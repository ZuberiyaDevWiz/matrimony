import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const Accepted: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Accepted"
            color="one"
            onClick={() => {
                setNext(3);
            }}
        />
    </div>
);

export default Accepted;
