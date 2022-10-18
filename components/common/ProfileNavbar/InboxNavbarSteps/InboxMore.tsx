import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const InboxMore: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="More"
            color="one"
            onClick={() => {
                setNext(1);
            }}
        />
    </div>
);

export default InboxMore;
