import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/form/Button';

const BasicSearch: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Basic Search"
            color="one"
            onClick={() => {
                setNext(2);
            }}
        />
    </div>
);

export default BasicSearch;
