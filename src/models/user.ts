import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    role_id: { type: Number, default: 2 }, // 1 for admin, 2 for regular user
    department_id: { type: Number, default: 1 }, // Default department - Visitor or Customer
    status: { type: String, default: 'active' }, // active, inactive, banned
    phone: {type: String },
});

// Use existing model if it exists to avoid OverwriteModelError
const User = models.User || model('User', UserSchema);
export default User;