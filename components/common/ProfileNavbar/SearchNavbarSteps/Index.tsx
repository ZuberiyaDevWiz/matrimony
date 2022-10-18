import { useState, FC, Dispatch, SetStateAction } from 'react';
import clx from 'utils/clx';
import AdvancedSearch from './AdvancedSearch';
import BasicSearch from './BasicSearch';

const SubProfileNavbar3: FC<{ setNavStep: Dispatch<SetStateAction<number>> }> = ({
    setNavStep,
}) => {
    const [next, setNext] = useState(1);

    const NavbarSteps = () => {
        switch (next) {
            case 1:
                return <BasicSearch setNext={setNext} />;
            case 2:
                return <AdvancedSearch setNext={setNext} />;
            default:
                <BasicSearch setNext={setNext} />;
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
                Basic Search
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 2 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Advanced Search
            </button>

            {NavbarSteps()}
        </section>
    );
};

export default SubProfileNavbar3;
