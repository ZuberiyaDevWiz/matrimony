/* eslint-disable react-hooks/rules-of-hooks */
import Button from 'components/Form/Button';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FC, Dispatch, SetStateAction } from 'react';
import { useRegister } from 'store';
import Select from 'react-select';
import { countries } from 'Constant/Countries';
import clx from 'utils/clx';

const ProfessionalDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    const { registerDetails, setRegister } = useRegister((state) => state);
    return (
        <section className="shadow-2xl px-10 ">
            <div className="my-8 ">
                <h1 className=" text-xl font-semibold text-primary-background">
                    Please provide us your professional details
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Highest Education</span>

                    <Select
                        name="select"
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
                    <Select
                        name="select"
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
                <div className="col-span-1 ">
                    <div className="w-full">
                        <div className="flex gap-4 ">
                            <div className="w-full space-y-4">
                                <span className="text-lg font-semibold pl-4">Select Currency</span>
                                <Select
                                    name="select"
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
                            <div className="w-full space-y-4">
                                <span className="text-lg font-semibold pl-4">
                                    Select Amount Per Annum
                                </span>
                                <Select
                                    name="select"
                                    options={[
                                        { key: 'op1', value: '---Select Amount---' },
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
                </div>

                <div className="col-span-1 space-y-4">
                    <span className="text-lg font-semibold pl-4">Work Location</span>
                    <Select
                        name="select"
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
                    <span className="text-lg font-semibold pl-4">Residing State</span>
                    <Select
                        name="select"
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
                    <span className="text-lg font-semibold pl-4">Residing City</span>
                    <Select
                        name="select"
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
                    <span className="text-lg font-semibold pl-4">Citizenship</span>
                    <Select
                        name="select"
                        options={countries.map((c) => ({
                            key: c.name,
                            value: c.name,
                        }))}
                    />
                </div>
            </div>
            <div className="flex flex-row py-14 font-semibold space-x-6 ">
                <div className="w-[49%] flex gap-8  hover:bg-primary-background hover:text-white hover:rounded">
                    <Button text="Previous" rounded onClick={() => setNextStep(2)} />
                </div>
                <div className="w-[49%] flex gap-8  hover:bg-primary-background hover:text-white hover:rounded ">
                    <Button text="Continue" rounded onClick={() => setNextStep(5)} />
                </div>
            </div>
        </section>
    );
};
export default ProfessionalDetails;
