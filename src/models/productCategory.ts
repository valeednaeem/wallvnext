import mongose, { Schema, Document, Model } from 'mongoose';

export interface IProductCategory extends Document {
    name: string;
    slug: string;
    description: string;
    image: string;
    status: 'active' | 'inactive';
    createdBy: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}


const ProductCategorySchema = new Schema<IProductCategory>(
    {

        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
            unique: true,
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
            required: true,
            trim: true,
            maxlength: 255,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
            enum: ['active', 'inactive'],
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    });

const ProductCategory: Model<IProductCategory> =
  mongose.models
    .ProductCategory ||
  mongose.model<IProductCategory>(
    "ProductCategory",
    ProductCategorySchema
  );
export default ProductCategory;
