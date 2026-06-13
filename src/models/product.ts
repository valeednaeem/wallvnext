import mongose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {

  category_id: mongose.Types.ObjectId;

  title: string;
  slug: string;

  short_description?: string;
  description?: string;

  type:
    | "product"
    | "service"
    | "hosting"
    | "domain";

  price: number;
  sale_price?: number;

  sku?: string;

  stock?: number;

  featured: boolean;

  images: string[];

  status:
    | "draft"
    | "published"
    | "archived";

  createdBy?: string;

  createdAt: Date;
  updatedAt: Date;
}


const ProductSchema = new Schema<IProduct>(
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
        short_description: {
            type: String,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 255,
        },
        type: {
            type: String,
            enum: [
            "product",
            "service",
            "hosting",
            "domain",
            ],
            default: "product",
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: 'ProductCategory',
            required: true,
        },
        images: {
            type: [String],
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

const Product: Model<IProduct> =
  mongose.models.Product ||
  mongose.model<IProduct>(
    "Product",
    ProductSchema
  );

export default Product;