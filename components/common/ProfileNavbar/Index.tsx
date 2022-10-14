/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import ProfileNavbar from './ProfNavbar';
import SubProfileNavbar1 from './MyShaadiNavbarSteps/Index';
import SubProfileNavbar2 from './MatchesNavbarSteps/Index';
import SubProfileNavbar3 from './SearchNavbarSteps/Index';
import SubProfileNavbar4 from './InboxNavbarSteps/Index';

const ProfileNavbars = () => {
    const [navStep, setNavStep] = useState(1);

    return (
        <>
            <ProfileNavbar setNavStep={setNavStep} />
            <>
                {navStep === 1 ? (
                    <SubProfileNavbar1 setNavStep={setNavStep} />
                ) : navStep === 2 ? (
                    <SubProfileNavbar2 setNavStep={setNavStep} />
                ) : navStep === 3 ? (
                    <SubProfileNavbar3 setNavStep={setNavStep} />
                ) : (
                    <SubProfileNavbar4 setNavStep={setNavStep} />
                )}
            </>
        </>
    );
};

export default ProfileNavbars;
