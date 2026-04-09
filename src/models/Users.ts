import mongose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Users: Model<IUser> = mongose.model<IUser>("Users", userSchema);

export default Users;