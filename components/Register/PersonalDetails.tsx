import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { useState, FC, Dispatch, SetStateAction } from 'react';

const PersonalDetails: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({
    setNextStep,
}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    return (
        <section className="shadow-2xl bg-slate-300 w-1/2 mx-auto">
            <h1 className="mt-14 px-4 text-lg font-semibold">
                please help us provide your personal details
            </h1>
            <div className="flex px-4 pt-6  space-x-3 ">
                <p>Marital status</p>
                <div className="flex flex-row w-[85%]  space-x-4 ">
                    <Button color="three" text="Unmarried" rounded />
                    <Button color="three" text="Widow" rounded />
                    <Button color="three" text="Divorced" rounded />
                    <Button color="three" text="Separated" rounded />
                    <Button color="three" text="Married" rounded />
                </div>
            </div>

            <div className=" px-4 pt-6 relative">
                <Input
                    label="Height"
                    placeholder="---Feet/Inches---"
                    required
                    type="text"
                    rounded
                />
                {show ? (
                    <RiArrowDropUpLine
                        onClick={() => setShow(!show)}
                        className="absolute top-1/2 translate-y-3 right-6 text-xl"
                    />
                ) : (
                    <RiArrowDropDownLine
                        onClick={() => setShow(!show)}
                        className="absolute top-1/2 translate-y-3 right-6 text-xl"
                    />
                )}
            </div>

            <div className="flex px-4 pt-6  space-x-3 ">
                <p className="">Family Status</p>
                <div className="flex flex-row  w-[85%]  space-x-4 ">
                    <Button color="three" text="Middle Class" rounded />
                    <Button color="three" text="Upper Middle Class" rounded />
                    <Button color="three" text="Rich/Affluent" rounded />
                </div>
            </div>

            <div className="flex px-4 pt-6  space-x-3 ">
                <p>Family Type</p>
                <div className="flex flex-row w-1/2 space-x-4 ">
                    <Button color="three" text="Joint Family" rounded />
                    <Button color="three" text="Nuclear Family" rounded />
                </div>
            </div>

            <div className="flex px-4 pt-6  space-x-3 ">
                <p>Physical Status</p>
                <div className="flex flex-row w-1/2 space-x-4 ">
                    <Button color="three" text="Normal" rounded />
                    <Button color="three" text="Physically challenged" rounded />
                </div>
            </div>

            <div className="flex flex-row px-4 py-8 space-x-6 ">
                <div className=" w-1/6 bg-violet-400 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 ">
                    <Button text="previous" rounded onClick={() => setNextStep(2)} />
                </div>
                <div className=" w-1/6 bg-violet-400 hover:bg-violet-600  focus:outline-none focus:ring focus:ring-violet-300 ">
                    <Button text="continue" rounded onClick={() => setNextStep(4)} />
                </div>
            </div>
        </section>
    );
};

export default PersonalDetails;
