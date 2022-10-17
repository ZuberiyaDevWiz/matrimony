import { Schema, models, Model, model } from 'mongoose';

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['MALE', 'FEMALE'],
    },
    section: {
        type: String,
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    willingToMarryFrom: {
        type: String,
        required: true,
    },
    wearsHijab: {
        type: String,
    },
    ReadsQuran: {
        type: String,
        required: true,
    },
    ReligiousValues: {
        type: String,
        required: true,
    },
    maritialStatus: {
        type: String,
        required: true,
    },
    familyStatus: {
        type: String,
        required: true,
    },
    familyType: {
        type: String,
        required: true,
    },
    physicallyChallenged: {
        type: Boolean,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    highestEducation: {
        type: String,
        required: true,
    },
    employedAt: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    annualIncome: {
        type: Number,
        required: true,
    },
    workLocation: {
        type: String,
        required: true,
    },
    residingState: {
        type: String,
        required: true,
    },
    residingCity: {
        type: String,
        required: true,
    },
    citizenShip: {
        type: String,
        required: true,
    },
});

export default (models.UserSchema as Model<TypeUser>) || model<TypeUser>('User', UserSchema);
