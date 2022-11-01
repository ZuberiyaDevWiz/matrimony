import { useState, FC, SetStateAction, Dispatch } from 'react';
import clx from 'utils/clx';
import Dashboard from './Dashboard';
import MyProfile from './Myprofile';
import PartnerPreferences from './PartnerPreferences';
import Settings from './Settings';
import More from './More';
import MyPhotos from './MyPhotos';

const SubProfileNavbar1: FC<{ setNavStep: Dispatch<SetStateAction<number>> }> = ({
    setNavStep,
}) => {
    const [next, setNext] = useState(1);

    const NavbarSteps = () => {
        switch (next) {
            case 1:
                return <Dashboard setNext={setNext} />;
            case 2:
                return <MyProfile setNext={setNext} />;
            case 3:
                return <MyPhotos setNext={setNext} />;
            case 4:
                return <PartnerPreferences setNext={setNext} />;
            case 5:
                return <Settings setNext={setNext} />;
            case 6:
                return <More setNext={setNext} />;
            default:
                <Dashboard setNext={setNext} />;
        }
    };

    return (
        <section className="shadow-2xl bg-gray-300 space-x-20 px-10 py-10 text-lg ">
            <button
                type="button"
                className={clx(
                    'step',
                    next === 1 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Dashboard
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 2 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                MyProfile
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 3 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Myphotos
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 4 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                PartnerPreferences
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 5 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Settings
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 6 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                More
            </button>

            {NavbarSteps()}
        </section>
    );
};

export default SubProfileNavbar1;
