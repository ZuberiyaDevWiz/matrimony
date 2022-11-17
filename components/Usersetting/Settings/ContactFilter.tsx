/* eslint-disable react/jsx-key */
import { FC } from 'react';
import { UserMemberList } from 'constants/SettingLinks';
import SettingLayout from 'Layouts/SettingSideBar';
import Row from './Row';

// eslint-disable-next-line arrow-body-style
const ContactFilter: FC = () => {
    return (
        <SettingLayout pageTitle="Hello">
            <section>
                <h1 className="text-xl text-gray-400 font-bold mb-3">Who can contact me?</h1>
                <div className=" pl-5 bg-white w-full px-4 mt-4">
                    <h1 className="text-xl font-bold mb-7">
                        Only Members matching the below criteria will get to see your contact
                        details
                    </h1>

                    <table className="w-full">
                        <tbody>
                            {UserMemberList.map((members) => (
                                <Row key={members.url} {...members} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </SettingLayout>
    );
};
export default ContactFilter;
