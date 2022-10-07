/* eslint-disable react-hooks/rules-of-hooks */
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useState } from 'react';

const ProfessionalDetails = () => {
    const [show, setShow] = useState(false);
    return (
        <section className="shadow-2xl bg-slate-300 w-1/2 mx-auto">
            <h1 className="mt-14 px-4 text-lg font-semibold ">
                please provide us your professional details
            </h1>

            <div className=" px-4 pt-6 relative">
                <Input
                    label="Highest Education"
                    placeholder="---select---"
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
                <p>Employed In</p>
                <div className="flex flex-row w-[60%] space-x-4 ">
                    <Button color="three" text="Government" rounded />
                    <Button color="three" text="Defence" rounded />
                    <Button color="three" text="Private" rounded />
                </div>
            </div>
            <div className=" px-28  ">
                <div className="flex flex-row w-[85%] space-x-4 pt-6">
                    <Button color="three" text="Business" rounded />
                    <Button color="three" text="Self Employed" rounded />
                    <Button color="three" text="Not Working" rounded />
                </div>
            </div>
            <div className=" px-4 pt-6 relative">
                <Input label="Occupation" placeholder="---select---" required type="text" rounded />
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

            <div className=" px-4 pt-6 relative">
                <Input
                    label="Annual Income"
                    placeholder="---select---"
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

            <div className=" px-4 pt-6 relative">
                <Input
                    label="Work Location"
                    placeholder="---select---"
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

            <div className=" px-4 pt-6 relative">
                <Input
                    label="Residing State"
                    placeholder="---select---"
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

            <div className="px-4 pt-6 relative">
                <Input
                    label="Residing City"
                    placeholder="---select---"
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

            <div className="flex flex-row  py-8 space-x-6 px-5 ">
                <div className="w-1/6 bg-violet-400 hover:bg-violet-600  focus:outline-none focus:ring focus:ring-violet-300 ">
                    <Button text="previous" rounded />
                </div>
                <div className="w-1/6  bg-violet-400 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 ">
                    <Button text="continue" />
                </div>
            </div>
        </section>
    );
};
export default ProfessionalDetails;
