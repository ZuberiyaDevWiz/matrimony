/* eslint-disable react-hooks/rules-of-hooks */
import Button from 'components/Form/Button';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FC, Dispatch, SetStateAction } from 'react';
import { useRegister } from 'store';
import clx from 'utils/clx';
import ReactSelect from 'react-select';
import { Countries } from 'Constant/Countries';
import { Education } from 'Constant/Education';
import Occupation from 'Constant/Occupation';
import Currency from 'Constant/Currency';
import AnnualIncome from 'Constant/AnnualIncome';
import ResidingState from 'Constant/ResidingState';

const ProfessionalDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    const { registerDetails, setRegister } = useRegister((state) => state);
    return (
        <section className="shadow-2xl px-10 ">
            <div className="my-8 ">
                <h1 className=" text-lg font-semibold">
                    Please provide us your professional details
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Highest Education</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.highestEducation,
                            value: registerDetails.highestEducation,
                        }}
                        options={Education.map((z) => ({
                            label: z,
                            value: z,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('highestEducation', e?.value);
                        }}
                        isOptionDisabled={(option) => option.value === '-ENGINEERING-'}
                    />
                </div>

                <div className="col-span-1 space-y-4">
                    <p className="font-semibold text-lg pl-4">Employed In</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex">
                            <Button
                                text="Government"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1 border-[#cccccc]',
                                    registerDetails.employedAt === 'Government' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('employedAt', 'Government')}
                            />
                            <Button
                                text="Defence"
                                additionalButtonStyles={clx(
                                    'border-l-0 border-r-1 border-[#cccccc]',
                                    registerDetails.employedAt === 'Private' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('employedAt', 'Private')}
                            />
                            <Button
                                text="Private"
                                additionalButtonStyles={clx(
                                    'border-l-0 rounded-r-md border-[#cccccc]',
                                    registerDetails.employedAt === 'Defence' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('employedAt', 'Defence')}
                            />
                        </div>
                        <div className="col-span-2 flex">
                            <Button
                                text="Business"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1 border-[#cccccc]',
                                    registerDetails.employedAt === 'Business' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('employedAt', 'Business')}
                            />
                            <Button
                                text="Self Employed"
                                additionalButtonStyles={clx(
                                    'border-l-0 border-r-1 border-[#cccccc]',
                                    registerDetails.employedAt === 'Self Employed' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('employedAt', 'Self Employed')}
                            />
                            <Button
                                text="Not Working"
                                additionalButtonStyles={clx(
                                    'border-l-0 rounded-r-md border-[#cccccc]',
                                    registerDetails.employedAt === 'Not Working' &&
                                        'bg-primary-background text-white '
                                )}
                                onClick={() => setRegister('employedAt', 'Not Working')}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Occupation</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.occupation,
                            value: registerDetails.occupation,
                        }}
                        options={Occupation.map((z) => ({
                            label: z,
                            value: z,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('occupation', e?.value);
                        }}
                    />
                </div>
                <div className="col-span-1 ">
                    <div className="w-full">
                        <div className="flex gap-4 ">
                            <div className="w-full space-y-4">
                                <span className="text-lg font-semibold pl-4">Select Currency</span>
                                <ReactSelect
                                    isMulti={false}
                                    name="select"
                                    value={{
                                        label: registerDetails.currency,
                                        value: registerDetails.currency,
                                    }}
                                    options={Currency.map((z) => ({
                                        label: z,
                                        value: z,
                                    }))}
                                    onChange={(e) => {
                                        if (e) setRegister('currency', e?.value);
                                    }}
                                />
                            </div>
                            <div className="w-full space-y-4">
                                <span className="text-lg font-semibold pl-4">
                                    Select Annual Income
                                </span>
                                <ReactSelect
                                    isMulti={false}
                                    name="select"
                                    value={{
                                        label: registerDetails.annualIncome,
                                        value: registerDetails.annualIncome,
                                    }}
                                    options={AnnualIncome.map((z) => ({
                                        label: z,
                                        value: z,
                                    }))}
                                    onChange={(e) => {
                                        if (e) setRegister('annualIncome', e?.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Work Location</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.workLocation,
                            value: registerDetails.workLocation,
                        }}
                        options={Countries.map((z) => ({
                            label: z.name,
                            value: z.name,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('workLocation', e?.value);
                        }}
                    />
                </div>
                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Residing State</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.residingState,
                            value: registerDetails.residingState,
                        }}
                        options={ResidingState.map((z) => ({
                            label: z,
                            value: z,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('residingState', e?.value);
                        }}
                    />
                </div>

                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Residing City</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.highestEducation,
                            value: registerDetails.highestEducation,
                        }}
                        options={Education.map((z) => ({
                            label: z,
                            value: z,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('highestEducation', e?.value);
                        }}
                    />
                </div>
                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Citizenship</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.citizenShip,
                            value: registerDetails.citizenShip,
                        }}
                        options={Countries.map((z) => ({
                            label: z.name,
                            value: z.name,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('citizenShip', e?.value);
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-row py-14 font-semibold space-x-6 ">
                <div className="w-full flex gap-8 text-primary-text">
                    <Button
                        text="Previous"
                        additionalStyles="text-black"
                        rounded
                        onClick={() => setNextStep(2)}
                    />
                    <Button text="Continue" color="one" rounded onClick={() => setNextStep(5)} />
                </div>
            </div>
        </section>
    );
};
export default ProfessionalDetails;
