import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { useState, FC, Dispatch, SetStateAction } from 'react';
import Select from 'components/Form/Select';
import { countries } from 'Constant/Countries';

const PersonalDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    return (
        <section className="shadow-2xl px-10 ">
            <div className="my-8 ">
                <h1 className=" text-lg font-semibold">
                    Personal details will fetch better matching results
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-8 pb-8">
                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Marital status</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex gap-4">
                            <Button text="Unmarried" rounded />
                            <Button text="Widow" rounded />
                        </div>
                        <div className="col-span-2 flex gap-4">
                            <Button text="Divorced" rounded />
                            <Button text="Separated" rounded />
                        </div>
                        <div className="w-[96%]">
                            <Button text="Married" rounded />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Family Status</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex gap-4">
                            <Button text="Middle Class" rounded />
                            <Button text="Upper Middle Class" rounded />
                        </div>
                        <div className="w-[96%]">
                            <Button text="Rich/Affluent" rounded />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Family Type</p>
                    <div className="w-full flex gap-4 ">
                        <Button text="Joint Family" rounded />
                        <Button text="Nuclear Family" rounded />
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Physical Status</p>
                    <div className="w-full flex gap-4">
                        <Button text="Normal" rounded />
                        <Button text="Physically challenged" rounded />
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
            </div>

            <div className="flex flex-row py-8 space-x-6 ">
                <div className="w-full flex gap-8 text-primary-text">
                    <Button
                        text="Previous"
                        additionalStyles="text-black"
                        rounded
                        onClick={() => setNextStep(2)}
                    />
                    <Button text="Continue" color="one" rounded onClick={() => setNextStep(4)} />
                </div>
            </div>
        </section>
    );
};

export default PersonalDetails;
