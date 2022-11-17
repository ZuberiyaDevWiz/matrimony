import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/form/Button';

const Settings: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Settings"
            color="one"
            onClick={() => {
                setNext(6);
            }}
        />
    </div>
);

export default Settings;
