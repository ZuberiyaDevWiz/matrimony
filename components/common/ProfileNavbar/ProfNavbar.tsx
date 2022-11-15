import { useState, FC, Dispatch, SetStateAction } from 'react';
import Select from 'components/form/Select';
import Button from 'components/form/Button';

const ProfileNavbar: FC<{ setNavStep: Dispatch<SetStateAction<number>> }> = ({ setNavStep }) => (
    <>
        <div className="flex bg-red-400 text-lg space-x-8 items-center">
            <div className="flex space-x-16  ">
                <Button text="MyShaadi" onClick={() => setNavStep(1)} />

                <Button text="Matches" onClick={() => setNavStep(2)} />
                <Button text="Search" onClick={() => setNavStep(3)} />
                <Button text="Inbox" onClick={() => setNavStep(4)} />
            </div>
            <div className="flex space-x-4 ">
                <button type="button" className="">
                    Upgrade Now
                </button>
                <div className="pb-6">
                    <Select
                        name="select"
                        options={[
                            {
                                key: 'opt1 ',
                                value: 'Help1',
                            },
                            { key: 'opt1 ', value: 'help1' },
                        ]}
                    />
                </div>
            </div>
        </div>
    </>
);

export default ProfileNavbar;
