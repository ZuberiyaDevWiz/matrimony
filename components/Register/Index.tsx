/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import clx from 'utils/clx';
import RegisterDetails from './Steps/RegisterDetail/Index';
import ReligionDetails from './Steps/ReligionDetails/Index';
import ProfessionalDetails from './Steps/ProfessionalDetails/Index';
import PersonalDetails from './Steps/PersonalDetails/Index';
import BreifIntro from './Steps/BriefIntro/Index';

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
            default:
                return <RegisterDetails setNextStep={setNextStep} />;
        }
    };

    return (
        <section className="w-[80%]  shadow-xl absolute z-30 top-[76px] left-32  pt-2 ">
            <div className="flex justify-center ">
                <ul className="steps w-full grid grid-cols-5 justify-between items-center  bg-white rounded-t-md ">
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold ',
                            nextStep === 1
                                ? ' col-span-1 border-b-[3px] text-secondary-text border-primary-background py-[22px]'
                                : ''
                        )}
                    >
                        Register Details
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold ',
                            nextStep === 2
                                ? 'col-span-1 border-b-[3px] text-secondary-text border-primary-background py-[22px]'
                                : ''
                        )}
                    >
                        Religion Details
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold  ',
                            nextStep === 3
                                ? 'col-span-1 border-b-[3px] text-secondary-text border-primary-background py-[22px]'
                                : ''
                        )}
                    >
                        Personal Details
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold  ',
                            nextStep === 4
                                ? 'col-span-1 border-b-[3px] text-secondary-text border-primary-background py-[22px]'
                                : ''
                        )}
                    >
                        Professional Details
                    </button>
                    <button
                        type="button"
                        className={clx(
                            'step transition-all text-lg font-semibold ',
                            nextStep === 5
                                ? 'col-span-1 border-b-[3px] text-secondary-text border-primary-background py-[22px]'
                                : ''
                        )}
                    >
                        Breif Intro
                    </button>
                </ul>
            </div>
            {Pages()}
        </section>
    );
};

export default RegisterHome;
