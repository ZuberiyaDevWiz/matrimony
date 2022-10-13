/* eslint-disable react-hooks/rules-of-hooks */
import Select from 'components/Form/Select';
import Button from 'components/Form/Button';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useState, FC, Dispatch, SetStateAction } from 'react';

const ProfessionalDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    const [show, setShow] = useState(false);
    return (
        <section className="shadow-2xl px-10 ">
            <div className="my-8 ">
                <h1 className=" text-lg font-semibold">
                    Please provide us your professional details
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 space-y-4">
                    <Select
                        label="Highest Education"
                        options={[
                            { key: 'op1', value: '---Select---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
                    />
                </div>

                <div className="col-span-1 space-y-4">
                    <p className="text-lg">Employed In</p>
                    <div className="w-full grid grid-cols-2 space-y-4">
                        <div className="col-span-2 flex gap-4">
                            <Button text="Government" rounded />
                            <Button text="Defence" rounded />
                            <Button text="Private" rounded />
                        </div>
                        <div className="col-span-2 flex gap-4">
                            <Button text="Business" rounded />
                            <Button text="Self Employed" rounded />
                            <Button text="Not Working" rounded />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-4">
                    <Select
                        label="Occupation"
                        options={[
                            { key: 'op1', value: '---Select---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
                    />
                </div>

                <div className="col-span-1 space-y-4">
                    <div className="w-full">
                        <p>Annual Income</p>
                        <div className="flex w-full justify-between">
                            <Select
                                options={[
                                    { key: 'op1', value: '---Select Currency---' },
                                    { key: 'op2', value: '4 feet' },
                                    { key: 'op3', value: '4 feet 1 inches' },
                                    { key: 'op4', value: '4 feet 2 inches' },
                                    { key: 'op4', value: '4 feet 3 inches' },
                                    { key: 'op4', value: '4 feet 4 inches' },
                                    { key: 'op4', value: '4 feet 5 inches' },
                                ]}
                            />
                            <Select
                                options={[
                                    { key: 'op1', value: '---Select Currency---' },
                                    { key: 'op2', value: '4 feet' },
                                    { key: 'op3', value: '4 feet 1 inches' },
                                    { key: 'op4', value: '4 feet 2 inches' },
                                    { key: 'op4', value: '4 feet 3 inches' },
                                    { key: 'op4', value: '4 feet 4 inches' },
                                    { key: 'op4', value: '4 feet 5 inches' },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-4">
                    <Select
                        label="Work Location"
                        options={[
                            { key: 'op1', value: '---Select---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
                    />
                </div>

                <div className="col-span-1 space-y-4">
                    <Select
                        label="Residing State"
                        options={[
                            { key: 'op1', value: '---Select---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
                    />
                </div>

                <div className="col-span-1 space-y-4">
                    <Select
                        label="Residing City"
                        options={[
                            { key: 'op1', value: '---Select---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
                    />
                </div>
                <div className="col-span-1 space-y-4">
                    <Select
                        label="Citizenship"
                        options={[
                            { key: 'op1', value: '---Select---' },
                            { key: 'op2', value: '4 feet' },
                            { key: 'op3', value: '4 feet 1 inches' },
                            { key: 'op4', value: '4 feet 2 inches' },
                            { key: 'op4', value: '4 feet 3 inches' },
                            { key: 'op4', value: '4 feet 4 inches' },
                            { key: 'op4', value: '4 feet 5 inches' },
                        ]}
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
                    <Button text="Continue" color="one" rounded onClick={() => setNextStep(5)} />
                </div>
            </div>
        </section>
    );
};
export default ProfessionalDetails;
