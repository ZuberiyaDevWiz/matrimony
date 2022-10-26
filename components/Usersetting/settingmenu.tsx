import { FC } from 'react';
import UserSettingLink from './UserSettingLink';

// eslint-disable-next-line arrow-body-style
const UserSettingMenupage: FC = () => {
    return (
        <div className="space-y-0 pr-5">
            <h1 className="text-xl font-bold py-3 bg-white pl-4">Settings</h1>

            <UserSettingLink title="Account Setting" url="/" />

            <UserSettingLink title="Contact Filters " url="/" />
            <UserSettingLink title="Email / SMS Alerts" url="/" />
            <UserSettingLink title="Privacy Options" url="/" />
            <UserSettingLink title="Hind / Delete Profile" url="/" />
        </div>
    );
};

export default UserSettingMenupage;
