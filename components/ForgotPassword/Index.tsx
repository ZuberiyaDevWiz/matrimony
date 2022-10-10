/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import SubmitEmail from './SubmitEmail';
import OTP from './Otp';
import NewPassword from './NewPassword';

const ForgotPasswords = () => {
    const [next, setNext] = useState(1);
    return (
        <>
            {next === 1 ? (
                <SubmitEmail setNext={setNext} />
            ) : next === 2 ? (
                <OTP setNext={setNext} />
            ) : (
                <NewPassword setNext={setNext} />
            )}
        </>
    );
};

export default ForgotPasswords;
