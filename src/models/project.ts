import mongose, { Schema } from 'mongoose';

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
        },
        slug: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
            unique: true,
        },
        description: {
            type: String,
            trim: true,
            maxlength: 255,
        },
        start_date: {
            type: Date,
            required: true,
        },
        end_date: {
            type: Date,
        },
        status: {
            type: String,
            required: true,
            trim: true,
            enum: ['planned', 'in_progress', 'completed', 'on_hold', 'cancelled'],
        },
        progress: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        client: {
            type: Schema.Types.ObjectId,
            ref: 'Client',
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        assigned_team: {
            type: Schema.Types.ObjectId,
            ref: 'Team',
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    }
);

export default mongose.models.Project || mongose.model('Project', ProjectSchema);