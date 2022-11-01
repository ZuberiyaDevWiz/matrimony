import create from 'zustand';
import { persist } from 'zustand/middleware';
import defaultRegister from 'Constant/defaultRegisterDetails';

export interface CityProp {
    'Andhra Pradesh': string[];
    'Arunachal Pradesh': string[];
    Assam: string[];
    Bihar: string[];
    Chhattisgarh: string[];
    'Dadra and Nagar Haveli': string[];
    'Daman and Diu': string[];
    Delhi: string[];
    Goa: string[];
    Gujarat: string[];
    Haryana: string[];
    'Himachal Pradesh': string[];
    'Jammu and Kashmir': string[];
    Jharkhand: string[];
    Karnataka: string[];
    Kerala: string[];
    'Madhya Pradesh': string[];
    Maharashtra: string[];
    Manipur: string[];
    Meghalaya: string[];
    Mizoram: string[];
    Nagaland: string[];
    Orissa: string[];
    'Pondicherry Puduche': string[];
    Punjab: string[];
    Rajasthan: string[];
    Sikkim: string[];
    'Tamil Nadu': string[];
    Tripura: string[];
    'Uttar Pradesh': string[];
    Uttarakhand: string[];
    'West Bengal': string[];
}

interface TypeRegister {
    registerDetails: TypeUser;
    setRegister: (key: string, value: string | number | boolean | Date | CityProp) => void;
    step: number;
    setStep: (value: number) => void;
}

const useRegister = create<TypeRegister>()(
    persist(
        (set) => ({
            registerDetails: defaultRegister,

            step: 0,

            setRegister: (key: string, value: string | number | boolean | Date | CityProp) => {
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
