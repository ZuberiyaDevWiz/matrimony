import { useState } from 'react';
import ProfImage from './ProfImage';
import ProfDoc from './ProfDoc';

const Profile = () => {
    const [profNext, setProfNext] = useState(0);

    return <>{profNext === 1 ? <ProfDoc /> : <ProfImage setProfNext={setProfNext} />}</>;
};

export default Profile;
