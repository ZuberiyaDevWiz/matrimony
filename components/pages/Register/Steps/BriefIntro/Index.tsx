import { FC, Dispatch, SetStateAction, FormEvent, useEffect } from 'react';
import Button from 'components/form/Button';
import { useRegister } from 'store';
import axios from 'axios';

const BreifIntro: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({ setNextStep }) => {
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = {
            firstName: '',
            lastName: '',
            email: '',
            dob: new Date('12/11/2022'),
            password: '',
            gender: '',
            section: '',
            division: '',
            willingToMarryFrom: '',
            wearsHijab: 'Hijab',
            ReadsQuran: 'Only Jumah/Friday',
            maritialStatus: 'unmarried',
            familyStatus: 'sdsdf',
            physicallyChallenged: true,
            height: 'fk',
            highestEducation: 'btech',
            employedAt: 'webranc',
            occupation: 'full stack dev',
            annualIncome: 12312341234,
            workLocation: 'frazerTown',
            residingState: 'karnataka',
            residingCity: 'Bangalore',
            citizenShip: 'india',
            familyType: 'Joint Family',
            ReligiousValues: 'dwadqwda',
        };
        axios
            .post('/api/user/signup', body)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const { registerDetails, setRegister } = useRegister((state) => state);

    useEffect(() => {
        if (!registerDetails.briefNote) {
            setRegister(
                'briefNote',
                `${registerDetails.select} ${registerDetails.firstName} ${registerDetails.lastName} staying at ${registerDetails.residingCity}. I am a simple and practical person with a positive attitude. My beliefs are both modern and traditional. I believe we need to progress and evolve as a society but not lose our traditional moral values. I am currently working for ${registerDetails.employedAt} in ${registerDetails.residingCity} as a ${registerDetails.occupation} I have completed  ${registerDetails.highestEducation}`
            );
        }
    });

    return (
        <section className="shadow-2xl md:px-10 px-4">
            <div className="my-8 ">
                <h1 className=" text-xl font-semibold text-primary-background py-3">
                    Write a breif introduction about you in your own words
                </h1>
            </div>
            <form onSubmit={submitHandler}>
                <h1 className=" text-lg font-semibold">About Your Friend</h1>
                <div className="flex space-x-2 h-24">
                    <textarea
                        className="border border-gray-500 w-full"
                        value={registerDetails.briefNote}
                        onChange={(e) => setRegister('briefNote', e.target.value)}
                    >
                        Hello.
                    </textarea>
                </div>
                <div className=" flex flex-row py-8 space-x-6 ">
                    <div className=" w-[49%] flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                        <Button text="Previous" onClick={() => setNextStep(4)} rounded />
                    </div>
                    <div className="w-[49%] flex gap-8 hover:bg-primary-background hover:text-white hover:rounded">
                        <Button text="Complete Registration" submit rounded />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default BreifIntro;
