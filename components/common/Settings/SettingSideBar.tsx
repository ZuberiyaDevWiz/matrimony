import { FC } from 'react';
import UserSettingLink from '../../Usersetting/UserSettingLink';

// eslint-disable-next-line arrow-body-style
const SettingSideBar: FC = () => {
    return (
        <div className="w-[15%] pl-10 items-center border- my-6 bg-gray-100">
            <div className="w-[]">
                <h1 className="text-xl font-bold py-3  pl-4">Settings</h1>
                <UserSettingLink title="Account Setting" url="/" />
                <UserSettingLink title="Contact Filters " url="/" />
                <UserSettingLink title="Email / SMS Alerts" url="/" />
                <UserSettingLink title="Privacy Options" url="/" />
                <UserSettingLink title="Hide / Delete Profile" url="/" />
            </div>
        </div>
    );
};

export default SettingSideBar;
