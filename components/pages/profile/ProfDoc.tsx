import { FC, Dispatch, SetStateAction } from 'react';
import UploadFile from 'components/form/FileInput';
import Button from 'components/form/Button';

const ProfDoc: FC<{ setProfNext: Dispatch<SetStateAction<number>> }> = ({ setProfNext }) => (
    <section className="shadow-2xl bg-gray-300 mx-auto lg:w-[40%] p-2 lg:py-6">
        <h1 className="font-bold md:text-2xl text-sm lg:py-4 pb-4">ID Proof Required</h1>
        <p className="font-bold lg:text-2xl text-sm">
            {' '}
            In order to provide a safe & authentic platform to our members, we sometimes ask users
            for verifications.
        </p>
        <p className="lg:py-10 lg:text-2xl text-sm pt-3">
            To proceed, please provide a valid ID proof, e.g. Passport, PAN card, Voter ID, Driving
            License
        </p>

        <UploadFile label="Select Document" />
        <p className="text-xs text-gray-700 font-semibold">
            *must be less than 15 MB and in jpg, gif, png, bmp or tiff format
        </p>
        <div className="py-8 text-white">
            <Button text="Submit" color="one" onClick={() => setProfNext(3)} />
        </div>
    </section>
);

export default ProfDoc;
