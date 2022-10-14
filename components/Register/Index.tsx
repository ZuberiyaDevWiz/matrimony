/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import clx from 'utils/clx';
import RegisterDetails from './Steps/RegisterDetails';
import PersonalDetails from './Steps/PersonalDetails';
import ReligionDetails from './Steps/ReligionDetails';
import ProfessionalDetails from './Steps/ProfessionalDetails';
import BreifIntro from './Steps/BreifIntro';
import VerifyMobile from './Steps/VerifyMobile';

const RegisterHome = () => {
    const [nextStep, setNextStep] = useState(1);

    const Pages = () => {
        switch (nextStep) {
            case 1:
                return <RegisterDetails setNextStep={setNextStep} />;
            case 2:
                return <ReligionDetails setNextStep={setNextStep} />;
            case 3:
                return <PersonalDetails setNextStep={setNextStep} />;
            case 4:
                return <ProfessionalDetails setNextStep={setNextStep} />;
            case 5:
                return <BreifIntro setNextStep={setNextStep} />;
            case 6:
                return <VerifyMobile setNextStep={setNextStep} />;
            default:
                return <RegisterDetails setNextStep={setNextStep} />;
        }
    };

    return (
        <section className="w-full bg-slate-200 ">
            <div className="flex justify-center ">
                <ul className="steps w-full space-x-20 py-8 px-16 shadow-2xl bg-white ">
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold ',
                            nextStep === 1 ? 'border-b-2 border-primary-background' : ''
                        )}
                    >
                        RegisterDetails
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold ',
                            nextStep === 2 ? 'border-b-2 border-primary-background' : ''
                        )}
                    >
                        ReligionDetails
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold  ',
                            nextStep >= 2 && 'step-accent'
                        )}
                    >
                        PersonalDetails
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold  ',
                            nextStep >= 2 && 'step-accent'
                        )}
                    >
                        ProfessionalDetails
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold ',
                            nextStep >= 2 && 'step-accent'
                        )}
                    >
                        BreifIntro
                    </button>

                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold  ',
                            nextStep >= 2 && 'step-accent'
                        )}
                    >
                        VerifyMobile
                    </button>
                </ul>
            </div>
            {Pages()}
        </section>
    );
};

export default RegisterHome;
