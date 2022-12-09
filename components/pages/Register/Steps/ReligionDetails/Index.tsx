import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/form/Button';
import Select from 'react-select';
import { useRegister } from 'store';
import clx from 'utils/clx';

const ReligionDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    const { registerDetails, setRegister } = useRegister((state) => state);

    return (
        <section className="shadow-2xl md:px-10 p-4 ">
            <div className="md:my-10 my-4">
                <h1 className=" text-xl font-semibold text-primary-background">
                    Please provide us with Religion Details
                </h1>
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-8 md:py-6 pt-0">
                <div className="col-span-1 space-y-2 pb-5 md:pb-0">
                    <p className="font-semibold text-lg pl-2">Willing to marry from ?</p>
                    <div className="w-full flex ">
                        <Button
                            text="Same Division"
                            additionalButtonStyles={clx(
                                'rounded-l-md border-r-1 border-[#cccccc] text-sm md:text-[16px]',
                                registerDetails.willingToMarryFrom === 'Same Division' &&
                                    'bg-primary-background text-white '
                            )}
                            onClick={() => setRegister('willingToMarryFrom', 'Same Division')}
                        />
                        <Button
                            text="Other Division Also"
                            additionalButtonStyles={clx(
                                'rounded-r-md border-l-0 border-[#cccccc] text-sm md:text-[16px]',
                                registerDetails.willingToMarryFrom === 'Other Division also' &&
                                    'bg-primary-background text-white '
                            )}
                            onClick={() => setRegister('willingToMarryFrom', 'Other Division also')}
                        />
                    </div>
                </div>

                <div className="col-span-1 space-y-2 ">
                    <p className="font-semibold text-lg pl-2">Do you wear ?</p>
                    <div className="w-full flex ">
                        <Button
                            text="Hijab"
                            additionalButtonStyles={clx(
                                'rounded-l-md border-r-1  border-[#cccccc] text-sm md:text-[16px]',
                                registerDetails.wearsHijab === 'Hijab' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('wearsHijab', 'Hijab')}
                        />
                        <Button
                            text="Niqab"
                            additionalButtonStyles={clx(
                                'rounded-l-0 border-l-0 border-r-1 border-[#cccccc] text-sm md:text-[16px]',
                                registerDetails.wearsHijab === 'Niqab' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('wearsHijab', 'Niqab')}
                        />
                        <Button
                            text="None"
                            additionalButtonStyles={clx(
                                'rounded-r-md border-l-0  border-[#cccccc] text-sm md:text-[16px]',
                                registerDetails.wearsHijab === 'None' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('wearsHijab', 'None')}
                        />
                    </div>
                </div>
            </div>

            <div className=" lg:grid lg:grid-cols-2 gap-8 py-6">
                <div className="col-span-1 space-y-2">
                    <p className="text-lg font-semibold pl-2">Quraan reading details</p>
                    <div className="md:flex grid grid-cols-2">
                        <Button
                            text="Regularly"
                            additionalButtonStyles={clx(
                                'rounded-l-md border-r-1 text-sm md:text-[16px] border-[#cccccc]',
                                registerDetails.ReadsQuran === 'Regularly' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('ReadsQuran', 'Regularly')}
                        />
                        <Button
                            text="Only Jumah/Friday"
                            additionalButtonStyles={clx(
                                ' text-sm border-l-1 md:text-[16px] border-[#cccccc]',
                                registerDetails.ReadsQuran === 'Only Jumah/Friday' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('ReadsQuran', 'Only Jumah/Friday')}
                        />
                        <Button
                            text="Occasionally"
                            additionalButtonStyles={clx(
                                ' border-r-1 text-sm md:text-[16px] border-[#cccccc]',
                                registerDetails.ReadsQuran === 'Occasionally' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('ReadsQuran', 'Occasionally')}
                        />
                        <Button
                            text="Never Read"
                            additionalButtonStyles={clx(
                                'rounded-r-md border-l-1 text-sm md:text-[16px] border-[#cccccc]',
                                registerDetails.ReadsQuran === 'Never Read' &&
                                    'bg-primary-background text-white'
                            )}
                            onClick={() => setRegister('ReadsQuran', 'Never Read')}
                        />
                    </div>
                </div>
                <div className="pt-4 md:pt-0">
                    <h1 className="  space-y-2  ">
                        <span className="text-lg font-semibold pl-2">Select Religious Values</span>
                        <Select
                            name="select"
                            options={[
                                { vaue: 'op1', label: '--Select--' },
                                { vaue: 'op2', label: 'Islam is truth' },
                                { vaue: 'op3', label: 'Very islamic' },
                                { vaue: 'op4', label: 'Pray 5 times a day' },
                                { vaue: 'op4', label: 'Go to Jumma Namaz' },
                            ]}
                        />
                    </h1>
                </div>
            </div>

            <div className="flex flex-row md:py-14 space-x-6 font-semibold ">
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
