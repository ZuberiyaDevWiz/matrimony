import { FC } from 'react';
import CheckBox from 'components/form/Checkbox';
import Radio from 'components/form/Radio';
import Button from 'components/form/Button';
import SettingLayout from 'Layouts/SettingSideBar';

// eslint-disable-next-line arrow-body-style
const UserEmailAlert: FC = () => {
    return (
        <SettingLayout pageTitle="Helloo">
            <section>
                <div className=" bg-gray-200">
                    <h1 className="text-xl text-gray-400 font-bold mb-3">My Alerts Manager</h1>
                    <p className="mb-5 pl-4">
                        Manage your subscription to .com Alerts on email listed below. You can also
                        subscribe to .com and .com Newsletters
                    </p>

                    <h1 className="text-xl text-gray-400 font-bold mb-4">My Alerts </h1>
                    <form className="">
                        <div className=" bg-white pt-5 text-base w-full">
                            <div className=" grid grid-cols-2 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4">
                                    <h4 className="font-bold mb-2">
                                        Match Mail & Photo Match Mail
                                    </h4>
                                    <p className="">Personalized matches</p>
                                    <CheckBox
                                        name="broaderMatch"
                                        label=" Send me Broader Matches if there are no new Preferred Matches"
                                        options={['Send']}
                                    />
                                </div>
                                <div className=" ">
                                    <h4 className="font-bold mb-5">Email Alert</h4>

                                    <Radio
                                        name="matech"
                                        options={[
                                            ' Daily',
                                            ' Tri-weekly',
                                            ' Weekly',
                                            ' Unsubscribe',
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Premium Match Mail</h4>
                                    <p className="">An email notification</p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio name="premium" options={[' Weekly', ' Unsubscribe']} />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Recent Visitor Email</h4>
                                    <p className="">An email notification of Members who h</p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="recentvisitor"
                                        options={[' Daily', ' Unsubscribe']}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">
                                        Member who shortlisted your email
                                    </h4>
                                    <p className="">
                                        Members who have recently shortlisted your Profile
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="membershorlisted"
                                        options={[' Daily', ' Unsubscribe']}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Viewed Profiles Email</h4>
                                    <p className="">
                                        Members who have recently shortlisted your Profile
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="viewprofileemail"
                                        options={[' Weekly', ' Unsubscribe']}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Similar Profiles Email</h4>
                                    <p className="">
                                        Members who have recently shortlisted your Profile
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="similarprofile"
                                        options={[' Bi-Weekly', ' Unsubscribe']}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Contact Alert</h4>
                                    <p className="">
                                        Members who have recently shortlisted your Profile
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="contactalert"
                                        options={[
                                            ' Instant- A mail for every response',
                                            ' Daily - A digital of all response received in a day',
                                            ' Unsubscribe',
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Massage Received Alert</h4>
                                    <p className="">
                                        An email notification of new messages received recently
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="messagereceivedllart"
                                        options={[
                                            ' Daily - A digital of all response received in a day',
                                            ' Unsubscribe',
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">SMS Alert</h4>
                                    <p className="">Sms will sent to 22222222</p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <CheckBox
                                        label=" For every intivation received (max 2 per/day"
                                        name="smsalertforinvrec"
                                        options={['Send']}
                                    />
                                    <CheckBox
                                        name="xmxalertforacceptinv"
                                        label=" For every Accept to my invitation (max 2 per/day)"
                                        options={['Send']}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">.com Profile Blaster</h4>
                                    <p className="">Sms will sent to 22222222</p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="profileblaster"
                                        options={[' Subscribe', ' Unsubscribe']}
                                    />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-xl mt-5 font-bold pl-4">.com Newsletters </h1>
                        <div className=" bg-white pt-5 text-base">
                            <div className=" grid grid-cols-2 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4">
                                    <h4 className="font-bold mb-2">Shaadi Specials</h4>
                                    <p className="">
                                        Personalized matches for you delivered via email
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="shaadispcial"
                                        options={[
                                            ' Occasional - Not more than twice a month',
                                            ' Unsubscribe',
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 py-4 border-b-2 border-gray-200 space-x-6 ">
                                <div className="pl-4 ">
                                    <h4 className="font-bold mb-2">Shaadi InSite</h4>
                                    <p className="">
                                        An email notification containing your Matches
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="font-bold mb-2">Email Alert</h4>
                                    <Radio
                                        name="yourmatchs"
                                        options={[' Monthly', ' Unsubscribe']}
                                    />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-xl mt-5 font-bold pl-4">Shaadi Times Newsletters</h1>

                        <div className=" bg-white pt-5 pb-10 text-base">
                            <div className=" grid grid-cols-2 space-x-6 ">
                                <div className="pl-4">
                                    <p className="">
                                        Personalized matches for you delivered via email
                                    </p>
                                </div>
                                <div className="flex ">
                                    <a className="text-blue-400 inline mr-2" href="/">
                                        Click
                                    </a>
                                    <p>To Manage the Subscriptions</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-10">
                            <div className=" w-fit justify-self-end">
                                <span className="mx-6 text-white">
                                    <Button text="Update" color="two" rounded submit />
                                </span>
                            </div>
                            <div className="mt-2 text-xl ml-10">
                                <a href="/">Reset</a>
                            </div>
                        </div>
                        <div className="flex justify-between mt-10">
                            <p>
                                All your Shaadi.com emails and shaadi times newsletters will be
                                dlivered to
                                <span className="text-blue-500">rasheedsk14131@gmail.com.</span>
                                <p>
                                    Note : This is also the email for logging into your .com
                                    account.
                                </p>
                            </p>

                            <a href="/">Edit</a>
                        </div>
                    </form>
                </div>
            </section>
        </SettingLayout>
    );
};

export default UserEmailAlert;
