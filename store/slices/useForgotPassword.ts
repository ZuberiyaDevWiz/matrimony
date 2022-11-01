// import create from 'zustand';
// import { persist } from 'zustand/middleware';

// type Props = {
//     phoneNumber: null | string;
//     otp: null | string;
//     token: null | string;
//     newPassword: null | string;
//     reEnterPassword: null | string;
//     setOtp: (otp: string) => void;
//     setPhoneNumber: (phoneNumber: string) => void;
//     setToken: (token: string) => void;
//     setNewPassword: (newPassword: string) => void;
//     setReEnterPassword: (reEnterPassword: string) => void;
//     reset: () => void;
// };

// const defaultState: Props = {
//     phoneNumber: null,
//     otp: null,
//     token: null,
//     newPassword: null,
//     reEnterPassword: null,
//     setOtp: () => {},
//     setPhoneNumber: () => {},
//     setToken: () => {},
//     setNewPassword: () => {},
//     setReEnterPassword: () => {},
//     reset: () => {},
// };

// const useForgotPasswordStore = create<Props>()(
//     persist(
//         (set) => ({
//             ...defaultState,
//             setOtp: (otp: string) => set({ otp }),
//             setPhoneNumber: (phoneNumber: string) => {
//                 set({ phoneNumber });
//             },
//             setToken: (token) => set({ token }),
//             setNewPassword: (newPassword) => set({ newPassword }),
//             setReEnterPassword: (reEnterPassword) => set({ reEnterPassword }),

//             reset: () => set(defaultState),
//         }),
//         {
//             name: 'sl-ath-fp',
//             getStorage: () => sessionStorage,
//         }
//     )
// );

// export default useForgotPasswordStore;

import create from 'zustand';
import { persist } from 'zustand/middleware';

type Props = {
    phoneNumber: null | String;
    otp: null | String;
    newPassword: null | string;
    reEnterPassword: null | string;
    setPhoneNumber: (phoneNumber: string) => void;
    setOtp: (otp: string) => void;
    setNewPassword: (newPassword: string) => void;
    setReEnterPassword: (reEnterPassword: string) => void;
};

const defaultState: Props = {
    phoneNumber: null,
    otp: null,
    newPassword: null,
    reEnterPassword: null,
    setPhoneNumber: () => {},
    setOtp: () => {},
    setNewPassword: () => {},
    setReEnterPassword: () => {},
};

const useForgotPassword = create<Props>()(
    persist(
        (set) => ({
            ...defaultState,
            setOtp: (otp: string) => set({ otp }),
            setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
            setNewPassword: (newPassword: string) => set({ newPassword }),
            setReEnterPassword: (reEnterPassword: string) => set({ reEnterPassword }),
        }),
        {
            name: 'abc',
            getStorage: () => sessionStorage,
        }
    )
);

export default useForgotPassword;
