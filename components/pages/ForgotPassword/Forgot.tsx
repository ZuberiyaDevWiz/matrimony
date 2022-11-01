import { useState } from 'react';
import dynamic from 'next/dynamic';

const ForgotPassword = () => {
    const [next, setNext] = useState(1);

    const SubmitEmail = dynamic(() => import('./PhoneNumber'));
    const OTP = dynamic(() => import('./Otp'));
    const NewPassword = dynamic(() => import('./NewPassword'));

    const render = () => {
        switch (next) {
            case 1:
                return <SubmitEmail setNext={setNext} />;
            case 2:
                return <OTP setNext={setNext} />;
            default:
                return <NewPassword setNext={setNext} />;
        }
    };

    return render();
};

export default ForgotPassword;
