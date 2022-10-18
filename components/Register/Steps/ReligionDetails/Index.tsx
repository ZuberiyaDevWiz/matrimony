import { useState, FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';

const ReligionDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({
        marryFrom: '',
    });

    return (
        <section className="shadow-2xl px-10 ">
            <div className="mt-8 ">
                <h1 className=" text-lg font-semibold">Please provide us with Religion Details</h1>
            </div>
            <div className="my-6 font-semibold space-x-4">
                <span>Division:</span>
                <span>Muslim - Labbay</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Willing to marry from</p>
                    <div className="w-full flex gap-4 ">
                        <Button
                            onClick={() => setInfo({ ...info, marryFrom: 'Same Division' })}
                            rounded
                            text="Same Division"
                        />
                        <Button
                            onClick={() => setInfo({ ...info, marryFrom: 'Other Division' })}
                            rounded
                            text="Other Division Also"
                        />
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Do you wear</p>
                    <div className=" w-full flex gap-4">
                        <Button rounded text="Hijab" additionalStyles="bg-none" />
                        <Button rounded text="Niqab" />
                        <Button rounded text="None" />
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Read Quran</p>
                    <div className="flex justify-between gap-4">
                        <div className="w-full space-y-4">
                            <Button rounded text="Regularly" />
                            <Button rounded text="Occasionally" />
                        </div>
                        <div className="w-full space-y-4">
                            <Button rounded text="Only Jumah/Friday" />
                            <Button rounded text="Never Read" />
                        </div>
                    </div>
                </div>

                <div className="">
                    <Select
                        label="Religious Values"
                        name="select"
                        options={[
                            { key: 'op1', value: 'Select religious values' },
                            { key: 'op2', value: 'Islam is truth' },
                            { key: 'op3', value: 'Very islamic' },
                            { key: 'op4', value: 'Pray 5 times a day' },
                            { key: 'op4', value: 'Go to Jumma Namaz' },
                        ]}
                        additionalStyles="text-lg font-bold"
                    />
                </div>
            </div>

            <div className="flex flex-row py-8 space-x-6 ">
                <div className="w-full flex gap-8 text-primary-text">
                    <Button
                        text="Previous"
                        additionalStyles="text-black"
                        rounded
                        onClick={() => setNextStep(1)}
                    />
                    <Button text="Continue" color="one" rounded onClick={() => setNextStep(3)} />
                </div>
            </div>
        </section>
    );
};
export default ReligionDetails;
