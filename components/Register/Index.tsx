/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import BreifIntro from './BreifIntro';
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import ReligionDetails from './ReligionDetails';
import VerifyMobile from './VerifyMobile';
import RegisterDetails from './RegisterDetails';

const RegisterHome = () => {
    const [nextStep, setNextStep] = useState(1);
    const [profileComplete, setProfileComplete] = useState(20);

    return (
        <>
            {nextStep === 1 ? (
                <RegisterDetails
                    setNextStep={setNextStep}
                    setProfileComplete={setProfileComplete}
                />
            ) : nextStep === 2 ? (
                <ReligionDetails setNextStep={setNextStep} />
            ) : nextStep === 3 ? (
                <PersonalDetails setNextStep={setNextStep} />
            ) : nextStep === 4 ? (
                <ProfessionalDetails setNextStep={setNextStep} />
            ) : nextStep === 5 ? (
                <BreifIntro setNextStep={setNextStep} />
            ) : (
                <VerifyMobile setNextStep={setNextStep} />
            )}
        </>
    );
};

export default RegisterHome;
