// import { Document } from 'mongoose';

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
        firstName: string;
        lastName: string;
        email: string;
        dob: Date;
        password: string;
        gender: string;
        section: string;
        division: string;
        willingToMarryFrom: 'Same Division' | 'Other Division also' | null;
        wearsHijab?: 'Hijab' | 'Niqab' | 'None';
        ReadsQuran: 'Regularly' | 'Only Jumah/Friday' | 'Occasionally' | 'Never Read' | null;
        ReligiousValues: string;
        maritialStatus: 'Unmarried' | 'Married' | 'Widow' | 'Separated' | 'Divorced' | null;
        familyStatus: 'Middle Class' | ' Upper Middle Class' | 'Rich/Affluent' | null;
        familyType: 'Joint Family' | 'Nuclear Family' | 'None';
        physicalStatus: 'Normal' | 'PhysicallyChallenged';
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
        residingState: string;
        residingCity: string;
        citizenShip: string;
        phoneNo: number;
        briefNote: string;
    }
}

export type AuthKeyT = string;
