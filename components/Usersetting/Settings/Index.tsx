import { FC } from 'react';
import ContactFilter from './ContactFilter';
import PrivacyOption from './PrivacyOption';
import UserAccount from './UserAccount';
import UserEmailAlert from './UserEmailSmsAlert';
import UserProfileStatus from './UserProfileStatus';

// eslint-disable-next-line arrow-body-style
const UserSetting: FC = () => {
    return (
        <section>
            <ContactFilter />
            <PrivacyOption />
            <UserAccount />
            <UserEmailAlert />
            <UserProfileStatus />
        </section>
    );
};
export default UserSetting;
