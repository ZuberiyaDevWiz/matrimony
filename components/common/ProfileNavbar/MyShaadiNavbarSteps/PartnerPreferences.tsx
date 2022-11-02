import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/form/Button';

const PartnerPreferences: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="PartnerPreferences"
            color="one"
            onClick={() => {
                setNext(5);
            }}
        />
    </div>
);

export default PartnerPreferences;
