/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import ProfImage from './ProfImage';
import ProfDoc from './ProfDoc';
import ScreenProfile from './ScreenProfile';

const Profile = () => {
    const [profNext, setProfNext] = useState(1);

    return (
        <>
            {profNext === 1 ? (
                <ProfImage setProfNext={setProfNext} />
            ) : profNext === 2 ? (
                <ProfDoc setProfNext={setProfNext} />
            ) : (
                <ScreenProfile setProfNext={setProfNext} />
            )}
        </>
    );
};

export default Profile;
