import { useState, FC, Dispatch, SetStateAction } from 'react';
import clx from 'utils/clx';
import Received from './Received';
import Accepted from './Accepted';
import Requests from './Requests';
import Sent from './Sent';
import Expired from './Expired';
import InboxMore from './InboxMore';

const SubProfileNavbar4: FC<{ setNavStep: Dispatch<SetStateAction<number>> }> = ({
    setNavStep,
}) => {
    const [next, setNext] = useState(1);

    const NavbarSteps = () => {
        switch (next) {
            case 1:
                return <Received setNext={setNext} />;
            case 2:
                return <Accepted setNext={setNext} />;
            case 3:
                return <Requests setNext={setNext} />;
            case 4:
                return <Sent setNext={setNext} />;
            case 5:
                return <Expired setNext={setNext} />;
            case 6:
                return <InboxMore setNext={setNext} />;
            default:
                <Received setNext={setNext} />;
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
                Received
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 2 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Accepted
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 3 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Requests
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 4 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Sent
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 5 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Expired
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

export default SubProfileNavbar4;
