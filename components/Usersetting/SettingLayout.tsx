import { FC, ReactNode, useState } from 'react';
import UserSettingLink from 'components/pages/Usersetting/UserSettingLink';

// eslint-disable-next-line arrow-body-style

const SettingLayout: FC<{
    children: ReactNode;
}> = ({ children }) => (
    <div className=" py-5 px-10 bg-gray-200 w-screen flex">
        <div className="flex w-80">
            <div className=" space-y-0 pr-5 w-full ">
                <h1 className="text-xl font-bold py-3 bg-white pl-4">Settings</h1>

                <UserSettingLink title="Account Setting" url="/usersetting" />

                <UserSettingLink title="Contact Filters " url="/usercfilter" />
                <UserSettingLink title="Email / SMS Alerts" url="/usersmsalert" />
                <UserSettingLink title="Privacy Options" url="/userprivacy" />
                <UserSettingLink title="Hind / Delete Profile" url="/userprofilestatus" />
            </div>
        </div>
        <div className="w-full">{children}</div>
    </div>
);

export default SettingLayout;
