import Button from 'components/form/Button';
import { FormEvent, useEffect } from 'react';
import { useRegister } from 'store/index';

const UserProfileCard = () => {
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const {
        firstName,
        lastName,
        residingState,
        residingCity,
        section,
        maritalStatus,
        highestEducation,
        dob,
        select,
        height,
    } = useRegister((state) => state.registerDetails);

    return (
        <form onSubmit={submitHandler} className="w-1/2 mx-auto bg-gray-300 h-full my-8">
            <h1 className="text-primary-background font-semibold text-xl flex justify-center my-4 pt-8">
                Profile Create for My {select}
            </h1>
            <div className="p-8 ">
                <div className="flex space-x-2">
                    <h1 className="text-primary-background">Fullname :</h1>
                    <h1>{`${firstName} ${lastName}`}</h1>
                </div>
                <div className="flex space-x-2">
                    <p className="text-primary-background">Location:</p>
                    <p>{`${residingState} ${residingCity}`}</p>
                </div>
                <div className="flex space-x-2">
                    <p> Muslim, {`${section}`}</p>
                </div>
                <div className="flex space-x-2">
                    <p>{`${maritalStatus}`}</p>
                </div>
                <div className="flex space-x-2">
                    <p>{`${highestEducation}`}</p>
                </div>
                <div className="flex space-x-2">
                    <p>{`${
                        new Date().getFullYear() - new Date(dob).getFullYear()
                    } years, ${height}`}</p>
                </div>
            </div>
            <div className="flex w-1/2 space-x-6 p-6 text-lg text-black">
                <Button text="View Profile" color="one" />
                <Button text="Connect" color="one" />
            </div>
        </form>
    );
};

export default UserProfileCard;
