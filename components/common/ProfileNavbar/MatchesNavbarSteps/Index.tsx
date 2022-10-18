import { useState, FC, Dispatch, SetStateAction } from 'react';
import clx from 'utils/clx';
import NewMatches from './NewMatches';
import TodayMatches from "./Today'sMatches";
import MyMatches from './MyMatches';
import NearMe from './NearMe';
import RecentlyViewed from './RecentlyViewed';
import MoreMatches from './MoreMatches';

const SubProfileNavbar2: FC<{ setNavStep: Dispatch<SetStateAction<number>> }> = ({
    setNavStep,
}) => {
    const [next, setNext] = useState(1);

    const NavbarSteps = () => {
        switch (next) {
            case 1:
                return <NewMatches setNext={setNext} />;
            case 2:
                return <TodayMatches setNext={setNext} />;
            case 3:
                return <MyMatches setNext={setNext} />;
            case 4:
                return <NearMe setNext={setNext} />;
            case 5:
                return <RecentlyViewed setNext={setNext} />;
            case 6:
                return <MoreMatches setNext={setNext} />;
            default:
                <NewMatches setNext={setNext} />;
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
                New Matches
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 2 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                TodayMatches{' '}
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 3 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                My Matches
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 4 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Near Me
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 5 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                Recently Viewed
            </button>
            <button
                type="button"
                className={clx(
                    'step',
                    next === 6 ? 'border-b-2 border-primary-background text-primary-background' : ''
                )}
            >
                More Matches
            </button>

            {NavbarSteps()}
        </section>
    );
};

export default SubProfileNavbar2;
