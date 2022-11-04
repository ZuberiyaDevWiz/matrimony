import create from 'zustand';
import { persist } from 'zustand/middleware';
import defaultRegister from 'constants/defaultRegisterDetails';
import { CityProp } from 'types/TypeCityProps';

interface TypeRegister {
    registerDetails: TypeUser;
    setRegister: (key: string, value: string | number | boolean | Date | CityProp | null) => void;
    step: number;
    setStep: (value: number) => void;
}

const useRegister = create<TypeRegister>()(
    persist(
        (set) => ({
            registerDetails: defaultRegister,

            step: 0,

            setRegister: (
                key: string,
                value: string | number | boolean | Date | CityProp | null
            ) => {
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
