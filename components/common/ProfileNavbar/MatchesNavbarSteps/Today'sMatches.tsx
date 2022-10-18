/* eslint-disable react/no-unescaped-entities */
import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const TodayMatches: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    <section className="shadow-2xl bg-gray-300 w-[50%] mx-auto p-10 py-10">
        <h1 className="font-bold text-xl">
            Here are Today's Top Matches for you. Connect with them now!
        </h1>
        <div className="py-8">
            <h1>Zareena Anjum</h1>
            <div className="border-b-2 border-gray-500 text-sm pb-8 text-green-800">
                <p>Online now</p>
            </div>
            <div className="flex flex-row space-x-32 pt-6 text-sm">
                <div className="flex flex-col">
                    <p>23 yrs, 5'6"</p>
                    <p>Urdu</p>
                    <p>Muslim, sheikh</p>
                    <p>Bachelor's of Engineering </p>
                </div>
                <div className="flex flex-col">
                    <p>Never Married</p>
                    <p>Lives in Bangalore</p>
                    <p>Software Developer</p>
                    <p>Earns upto INR 5-6 Lakh anually </p>
                </div>
            </div>
        </div>

        <div className="shadow-2xl bg-gray-300 w-[100%] mx-auto p-10 py-10 px-6">
            <div className="">
                <h1 className="py-4 font-bold">Detailed Profile</h1>
                <h1 className="py-4 font-bold"> About Zareen S</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro,
                    dolorum qui accusamus voluptas perspiciatis reiciendis temporibus, voluptatibus
                    repellendus deleniti at beatae molestias cupiditate ut aperiam. Esse explicabo
                    iusto porro?
                </p>
            </div>
            <div>
                <h1 className="py-5 font-bold">Contact Details</h1>
                <div className="flex space-x-3 pb-3">
                    <p>Contact Number </p>
                    <p> +91973XXXXXXX</p>
                </div>
                <div className="flex space-x-3">
                    <p>Email ID</p>
                    <p>XXXXXXXXXXXX@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="pt-20 w-1/2 text-white">
            <Button
                text="Today Match"
                color="one"
                onClick={() => {
                    setNext(3);
                }}
            />
        </div>
    </section>
);

export default TodayMatches;
