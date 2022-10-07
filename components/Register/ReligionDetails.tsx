import { useState } from 'react';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const ReligionDetails = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);

    return (
        <section className="shadow-2xl bg-slate-300 w-1/2 mx-auto">
            <h1 className="mt-20 px-4 text-lg font-semibold">
                please provide us with religion details
            </h1>

            <div className="flex px-4 pt-6  space-x-3 ">
                <p className="">Willing to marry from</p>
                <div className="flex flex-row  space-x-3 w-1/2">
                    <Button color="two" rounded text="Same Division" />
                    <Button color="two" rounded text="Other Division Also" />
                </div>
            </div>

            <div className="flex px-4 pt-7  space-x-3 ">
                <p className="">Do you wear</p>
                <div className="flex flex-row w-1/2  space-x-3 ">
                    <Button color="two" rounded text="Hijab" />
                    <Button color="two" rounded text="Niqab" />
                    <Button color="two" rounded text="None" />
                </div>
            </div>

            <div className="flex px-4 pt-6  space-x-3 ">
                <p className="">Read Quran</p>
                <div className="flex flex-row w-[55%] space-x-3 ">
                    <Button color="two" rounded text="Regularly" />
                    <Button color="two" rounded text="Occasionally" />
                </div>
            </div>
            <div className="flex flex-row w-[85%] px-28 space-x-3 pt-6">
                <Button color="two" rounded text="Only Jumah/Friday" />
                <Button color="two" rounded text="Never Read" />
            </div>

            <div className="px-4 pt-6 relative">
                <Input
                    label="Religious Values"
                    placeholder="Select Religious Values"
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

            <div className="flex flex-row px-4 py-8 space-x-6 ">
                <div className="w-1/6 bg-violet-400 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 w ">
                    <Button text="previous" rounded />
                </div>
                <div className="w-1/6 bg-violet-400 hover:bg-violet-600  focus:outline-none focus:ring focus:ring-violet-300 ">
                    <Button text="continue" rounded />
                </div>
            </div>
        </section>
    );
};
export default ReligionDetails;
