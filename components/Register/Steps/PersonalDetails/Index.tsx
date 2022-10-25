import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { Height } from 'Constant/Height';
import { FC, Dispatch, SetStateAction } from 'react';
import ReactSelect from 'react-select';
import { useRegister } from 'store';
import clx from 'utils/clx';

const PersonalDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    const { registerDetails, setRegister, step, setStep } = useRegister((state) => state);

    return (
        <section className="shadow-2xl px-10 ">
            <div className="my-8 ">
                <h1 className=" text-xl font-semibold text-primary-background">
                    Personal details will fetch better matching results
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 space-y-2">
                    <p className="font-semibold text-lg pl-2">Marital status</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex">
                            <Button
                                text="UnMarried"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1 border-[#cccccc]',
                                    registerDetails.maritialStatus === 'Unmarried' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Unmarried')}
                            />
                            <Button
                                text="Married"
                                additionalButtonStyles={clx(
                                    'rounded-r-md border-l-0 border-[#cccccc]',
                                    registerDetails.maritialStatus === 'Married' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Married')}
                            />
                        </div>
                        <div className="col-span-2 flex">
                            <Button
                                text="Divorced"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1 border-[#cccccc]',
                                    registerDetails.maritialStatus === 'Divorced' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Divorced')}
                            />
                            <Button
                                text="Separated"
                                additionalButtonStyles={clx(
                                    'rounded-r-md border-l-0 border-[#cccccc]',
                                    registerDetails.maritialStatus === 'Separated' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Separated')}
                            />
                        </div>
                        <div className="w-full">
                            <Button
                                text="Widow"
                                additionalButtonStyles={clx(
                                    'rounded-md  border-[#cccccc]',
                                    registerDetails.maritialStatus === 'Widow' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Widow')}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <p className="font-semibold text-lg pl-2">Family Status</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex">
                            <Button
                                text="Middle Class"
                                additionalButtonStyles={clx(
                                    'rounded-l-md border-r-1 border-[#cccccc]',
                                    registerDetails.familyStatus === 'Middle Class' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('familyStatus', 'Middle Class')}
                            />
                            <Button
                                text="Upper Middle Class"
                                additionalButtonStyles={clx(
                                    'rounded-r-md border-l-0 border-[#cccccc]',
                                    registerDetails.familyStatus === ' Upper Middle Class' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('familyStatus', ' Upper Middle Class')}
                            />
                        </div>
                        <div className="w-full">
                            <Button
                                text="Rich/Affluent"
                                additionalButtonStyles={clx(
                                    'rounded-md  border-[#cccccc]',
                                    registerDetails.familyStatus === 'Rich/Affluent' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('familyStatus', 'Rich/Affluent')}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-2">
                    <p className="font-semibold text-lg pl-2">Family Type</p>
                    <div className="w-full flex">
                        <Button
                            text="Nuclear Family"
                            additionalButtonStyles={clx(
                                'rounded-l-md border-r-1 border-[#cccccc]',
                                registerDetails.familyType === 'Nuclear Family' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('familyType', 'Nuclear Family')}
                        />
                        <Button
                            text="Joint Family"
                            additionalButtonStyles={clx(
                                'rounded-r-md border-l-0 border-[#cccccc]',
                                registerDetails.familyType === 'Joint Family' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('familyType', 'Joint Family')}
                        />
                    </div>
                </div>

                <div className="col-span-1 space-y-2">
                    <p className="font-semibold text-lg pl-2">Physical Status</p>
                    <div className="w-full flex     ">
                        <Button
                            text="Normal"
                            additionalButtonStyles={clx(
                                'rounded-l-md border-r-1 border-[#cccccc]',
                                registerDetails.physicalStatus === 'Normal' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('physicalStatus', 'Normal')}
                        />
                        <Button
                            text="Physically Challeneged"
                            additionalButtonStyles={clx(
                                'rounded-r-md border-l-0 border-[#cccccc]',
                                registerDetails.physicalStatus === 'PhysicallyChallenged' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('physicalStatus', 'PhysicallyChallenged')}
                        />
                    </div>
                </div>
                <div className="space-y-2 ">
                    <span className="text-lg font-semibold pl-2">Height</span>
                    <ReactSelect
                        isMulti={false}
                        name="select"
                        value={{
                            label: registerDetails.height,
                            value: registerDetails.height,
                        }}
                        options={Height.map((x) => ({
                            label: x,
                            value: x,
                        }))}
                        onChange={(e) => {
                            if (e) setRegister('height', e?.value);
                        }}
                    />
                </div>

                <Input label="Weight" placeholder="Enter weight.." rounded />
            </div>

            <div className="flex flex-row py-14 space-x-6 font-semibold">
                <div className="w-full flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                    <Button text="Previous" rounded onClick={() => setNextStep(2)} />
                </div>
                <div className="w-full flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                    <Button text="Continue" rounded onClick={() => setNextStep(4)} />
                </div>
            </div>
        </section>
    );
};
export default PersonalDetails;
