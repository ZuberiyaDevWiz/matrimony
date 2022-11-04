/* eslint-disable no-redeclare */
/* eslint-disable import/no-unresolved */
// import { Document } from 'mongoose';

import { States } from '@type/TypeUser';

export type States =
    | 'Andhra Pradesh'
    | 'Arunachal Pradesh'
    | 'Assam'
    | 'Bihar'
    | 'Chhattisgarh'
    | 'Dadra and Nagar Haveli'
    | 'Daman and Diu'
    | 'Delhi'
    | 'Goa'
    | 'Gujarat'
    | 'Haryana'
    | 'Himachal Pradesh'
    | 'Jammu and Kashmir'
    | 'Jharkhand'
    | 'Karnataka'
    | 'Kerala'
    | 'Madhya Pradesh'
    | 'Maharashtra'
    | 'Manipur'
    | 'Meghalaya'
    | 'Mizoram'
    | 'Nagaland'
    | 'Orissa'
    | 'Pondicherry Puduche'
    | 'Punjab'
    | 'Rajasthan'
    | 'Sikkim'
    | 'Tamil Nadu'
    | 'Telangana    '
    | 'Tripura'
    | 'Uttar Pradesh'
    | 'Uttarakhand'
    | 'West Bengal'
    | 'Andaman and Nicobar Islands'
    | 'Chandigarh'
    | 'Lakshadweep'
    | 'Puducherry';

declare global {
    interface TypeUser {
        select: string;
        fullname: string;
        age: number;
        firstName: string;
        lastName: string;
        email: string;
        dob: Date;
        password: string;
        gender: string;
        section: string;
        division: string;
        willingToMarryFrom: 'Same Division' | 'Other Division also' | null;
        wearsHijab?: 'Hijab' | 'Niqab' | 'None' | null;

        ReadsQuran: 'Regularly' | 'Only Jumah/Friday' | 'Occasionally' | 'Never Read' | null;
        ReligiousValues: string;
        maritalStatus: 'Unmarried' | 'Married' | 'Widow' | 'Separated' | 'Divorced' | null;
        familyStatus: 'Middle Class' | ' Upper Middle Class' | 'Rich/Affluent' | null;
        familyType: 'Joint Family' | 'Nuclear Family' | 'None' | null;
        physicalStatus: 'Normal' | 'PhysicallyChallenged' | null;
        height: string;
        highestEducation: string;
        employedAt:
            | 'Government'
            | 'Private'
            | 'Defence'
            | 'Business'
            | 'Self Employed'
            | 'Not Working'
            | null;
        occupation: string;
        currency: string;
        annualIncome: string;
        workLocation: string;
        residingState: States;
        residingCity: string;
        citizenShip: string;
        phoneNo: number;
        briefNote: string;
    }
}
