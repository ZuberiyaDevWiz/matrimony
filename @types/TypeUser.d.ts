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
        willingToMarryFrom: 'Same Division' | 'Other Division also';
        wearsHijab?: 'Hijab' | 'Niqab' | 'None';
        ReadsQuran: 'Regularly' | 'Only Jumah/Friday' | 'Occasionally' | 'Never Read';
        ReligiousValues: string;
        maritialStatus: string;
        familyStatus: string;
        familyType: 'Joint Family' | 'Nuclear Family' | 'None';
        physicallyChallenged: boolean;
        height: string;
        highestEducation: string;
        employedAt: string;
        occupation: string;
        annualIncome: number;
        workLocation: string;
        residingState: string;
        residingCity: string;
        citizenShip: string;
    }
}

export {};
