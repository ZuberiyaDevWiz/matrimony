import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const AdvancedSearch: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Advanced Search"
            color="one"
            onClick={() => {
                setNext(1);
            }}
        />
    </div>
);

export default AdvancedSearch;
