import { useState, FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';
import Select from 'react-select';
import { useRegister } from 'store';
import clx from 'utils/clx';

const ReligionDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const { registerDetails, setRegister } = useRegister((state) => state);

    return (
        <section className="shadow-2xl px-10 ">
            <div className="my-10">
                <h1 className=" text-xl font-semibold text-primary-background">
                    Please provide us with Religion Details
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Willing to marry from</p>
                    <div className="w-full flex ">
                        <Button
                            text="Same Division"
                            additionalButtonStyles={clx(
                                'rounded-l-md border-r-0',
                                registerDetails.willingToMarryFrom === 'Same Division' &&
                                    'bg-primary-background text-white '
                            )}
                            onClick={() => setRegister('willingToMarryFrom', 'Same Division')}
                        />
                        <Button
                            text="Other Division Also"
                            additionalButtonStyles={clx(
                                'rounded-r-md border-l-0',
                                registerDetails.willingToMarryFrom === 'Other Division also' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('willingToMarryFrom', 'Other Division also')}
                        />
                    </div>
                </div>

                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Do you wear?</p>
                    <div className="w-full flex">
                        <Button
                            rounded
                            text="Hijab"
                            additionalButtonStyles={clx(
                                registerDetails.wearsHijab === 'Hijab' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('wearsHijab', 'Hijab')}
                        />
                        <Button
                            rounded
                            text="Niqab"
                            additionalButtonStyles={clx(
                                registerDetails.wearsHijab === 'Niqab' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('wearsHijab', 'Niqab')}
                        />
                        <Button
                            rounded
                            text="None"
                            additionalButtonStyles={clx(
                                registerDetails.wearsHijab === 'None' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('wearsHijab', 'None')}
                        />
                    </div>
                </div>
                <div className="col-span-1 space-y-2">
                    <p className="font-semibold">Read Quran</p>
                    <div className="flex justify-between gap-4">
                        <div className="w-full space-y-4">
                            <Button
                                rounded
                                text="Regularly"
                                additionalButtonStyles={clx(
                                    registerDetails.ReadsQuran === 'Regularly' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('ReadsQuran', 'Regularly')}
                            />

                            <Button
                                rounded
                                text="Occasionally"
                                additionalButtonStyles={clx(
                                    registerDetails.ReadsQuran === 'Occasionally' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('ReadsQuran', 'Occasionally')}
                            />
                        </div>
                        <div className="w-full space-y-4">
                            <Button
                                rounded
                                text="Only Jumah/Friday"
                                additionalButtonStyles={clx(
                                    registerDetails.ReadsQuran === 'Only Jumah/Friday' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('ReadsQuran', 'Only Jumah/Friday')}
                            />
                            <Button
                                rounded
                                text="Never Read"
                                additionalButtonStyles={clx(
                                    registerDetails.ReadsQuran === 'Never Read' &&
                                        'bg-primary-background text-white'
                                )}
                                onClick={() => setRegister('ReadsQuran', 'Never Read')}
                            />
                        </div>
                    </div>
                </div>

                <h1 className="  space-y-2 font-semibold pt-2 ">
                    Select Religious Values
                    <Select
                        name="select"
                        options={[
                            { vaue: 'op1', label: '--select--' },
                            { vaue: 'op2', label: 'Islam is truth' },
                            { vaue: 'op3', label: 'Very islamic' },
                            { vaue: 'op4', label: 'Pray 5 times a day' },
                            { vaue: 'op4', label: 'Go to Jumma Namaz' },
                        ]}
                    />
                </h1>
            </div>

            <div className="flex flex-row py-20 space-x-6 ">
                <div className="w-full flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                    <Button text="Previous" rounded onClick={() => setNextStep(1)} />
                </div>
                <div className="w-full flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                    <Button text="Continue" rounded onClick={() => setNextStep(3)} />
                </div>
            </div>
        </section>
    );
};
export default ReligionDetails;
