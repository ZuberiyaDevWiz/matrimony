import create from 'zustand';
import { persist } from 'zustand/middleware';
import defaultRegister from 'Constant/defaultRegisterDetails';

interface TypeRegister {
    registerDetails: TypeUser;
    setRegister: (key: string, value: string | number | boolean | Date) => void;
    step: number;
    setStep: (value: number) => void;
}

const useRegister = create<TypeRegister>()(
    persist(
        (set) => ({
            registerDetails: defaultRegister,

            step: 0,

            setRegister: (key: string, value: string | number | boolean | Date) => {
                set((state: TypeRegister) => ({
                    registerDetails: { ...state.registerDetails, [key]: value },
                }));
            },

            setStep: (value: number) => set({ step: value }),
        }),
        {
            name: 'registerDetails',
            getStorage: () => sessionStorage,
        }
    )
);

export default useRegister;
