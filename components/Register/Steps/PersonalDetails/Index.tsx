import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { useState, FC, Dispatch, SetStateAction } from 'react';
import Select from 'components/Form/Select';
import { countries } from 'Constant/Countries';
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
            <div className="grid grid-cols-2 gap-8 pb-8">
                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Marital status</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex gap-4">
                            <Button
                                rounded
                                text="UnMarried"
                                additionalButtonStyles={clx(
                                    registerDetails.maritialStatus === 'Unmarried' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Unmarried')}
                            />
                            <Button
                                text="Married"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.maritialStatus === 'Married' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Married')}
                            />
                        </div>
                        <div className="col-span-2 flex gap-4">
                            <Button
                                text="Divorced"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.maritialStatus === 'Divorced' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Divorced')}
                            />
                            <Button
                                text="Separated"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.maritialStatus === 'Separated' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Separated')}
                            />
                        </div>
                        <div className="w-[96%]">
                            <Button
                                text="Widow"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.maritialStatus === 'Widow' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('maritialStatus', 'Widow')}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Family Status</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex gap-4">
                            <Button
                                text="Middle Class"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.familyStatus === 'Middle Class' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('familyStatus', 'Middle Class')}
                            />
                            <Button
                                text="Upper Middle Class"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.familyStatus === ' Upper Middle Class' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('familyStatus', ' Upper Middle Class')}
                            />
                        </div>
                        <div className="w-[96%]">
                            <Button
                                text="Rich/Affluent"
                                rounded
                                additionalButtonStyles={clx(
                                    registerDetails.familyStatus === 'Rich/Affluent' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('familyStatus', 'Rich/Affluent')}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Family Type</p>
                    <div className="w-full flex gap-4 ">
                        <Button
                            text="Nuclear Family"
                            rounded
                            additionalButtonStyles={clx(
                                registerDetails.familyType === 'Nuclear Family' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('familyType', 'Nuclear Family')}
                        />
                        <Button
                            text="Joint Family"
                            rounded
                            additionalButtonStyles={clx(
                                registerDetails.familyType === 'Joint Family' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('familyType', 'Joint Family')}
                        />
                    </div>
                </div>

                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Physical Status</p>
                    <div className="w-full flex gap-4">
                        <Button
                            text="Normal"
                            rounded
                            additionalButtonStyles={clx(
                                registerDetails.physicalStatus === 'Normal' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('physicalStatus', 'Normal')}
                        />
                        <Button
                            text="Physically Challeneged"
                            rounded
                            additionalButtonStyles={clx(
                                registerDetails.physicalStatus === 'PhysicallyChallenged' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('physicalStatus', 'PhysicallyChallenged')}
                        />
                    </div>
                </div>
                <div className="">
                    <Select
                        label="Height"
                        options={[
                            { key: 'op1', value: '---Feet/Inches---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
                        name="select"
                    />
                </div>

                <Input label="Weight" placeholder="Enter weight.." rounded />
            </div>

            <div className="flex flex-row py-8 space-x-6 ">
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
