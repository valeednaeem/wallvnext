import ProductForm
  from "@/components/forms/category-form";

export default async function EditProductPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">
        Edit Product
      </h1>

      <ProductForm />
    </div>
  );
}
