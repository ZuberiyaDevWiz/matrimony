import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/form/Button';

const MoreMatches: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="More Matches"
            color="one"
            onClick={() => {
                setNext(1);
            }}
        />
    </div>
);

export default MoreMatches;
