import { FC, Dispatch, SetStateAction } from 'react';

const ScreenProfile: FC<{ setProfNext: Dispatch<SetStateAction<number>> }> = ({ setProfNext }) => (
    <form className="py-20">
        <section className="shadow-2xl bg-gray-300 mx-auto lg:w-[35%] px-5 space-y-4 pt-6 py-5">
            <h1 className="font-semibold lg:text-2xl text-base flex justify-center">
                Please Wait while we Screen your Profile
            </h1>
            <p className="font-base text-sm flex justify-center">
                It will be activated within 48 hours, if it passes our screening
            </p>
            <div className="py-8">
                <div className="border-t border-black ">
                    <span className="text-xs hover:underline flex justify-end pt-3">Logout</span>
                </div>
            </div>
        </section>
    </form>
);

export default ScreenProfile;
