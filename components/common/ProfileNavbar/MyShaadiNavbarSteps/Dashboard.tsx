import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const Dashboard: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <div className="pt-20 w-1/2 text-white">
        <Button
            text="Dashboard"
            color="one"
            onClick={() => {
                setNext(2);
            }}
        />
    </div>
);

export default Dashboard;
