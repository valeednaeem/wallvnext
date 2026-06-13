import mongose, { Schema } from 'mongoose';

const ClientSchema = new Schema(
    {
        company_name: {
            type: String,
            trim: true,
            maxlength: 255,
        },
        contact_person: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        website: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        notes: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
            enum: ['active', 'inactive'],
        },
    }
);

export default mongose.models.Client || mongose.model('Client', ClientSchema);