import { useState } from 'react';

import dynamic from 'next/dynamic';

const Profile = () => {
    const [profNext, setProfNext] = useState(1);
    const ProfImage = dynamic(() => import('./ProfImage'));
    const ProfDoc = dynamic(() => import('./ProfDoc'));
    const ScreenProfile = dynamic(() => import('./ScreenProfile'));

    const profRender = () => {
        switch (profNext) {
            case 1:
                return <ProfImage setProfNext={setProfNext} />;
            case 2:
                return <ProfDoc setProfNext={setProfNext} />;
            default:
                return <ScreenProfile setProfNext={setProfNext} />;
        }
    };

    return profRender();
};

export default Profile;
