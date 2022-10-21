// import { Document } from 'mongoose';

declare global {
    interface TypeUser {
        firstName: string;
        lastName: string;
        email: string;
        dob: Date;
        password: string;
        gender: 'MALE' | 'FEMALE';
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
        annualIncome: number;
        workLocation: string;
        residingState: string;
        residingCity: string;
        citizenShip: string;
        phoneNo: number;
    }
}

export {};
