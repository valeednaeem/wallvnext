import Link from "next/link";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ProductsPage() {

  const products =
    await getProducts();

  return (
    <div className="space-y-6">

      <div className="flex justify-between">

        <h1 className="text-2xl font-bold">
          Products
        </h1>

        <Link
          href="/dashboard/products/new"
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Add Product
        </Link>

      </div>

      <div className="rounded-md border">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">
                Product
              </th>

              <th className="p-3 text-left">
                Category
              </th>

              <th className="p-3 text-left">
                Type
              </th>

              <th className="p-3 text-left">
                Price
              </th>

              <th className="p-3 text-left">
                Stock
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {products.map(
              (product: any) => (
                <tr
                  key={product._id}
                  className="border-b"
                >
                  <td className="p-3">
                    {product.title}
                  </td>

                  <td className="p-3">
                    {
                      product
                        .category_id
                        ?.title
                    }
                  </td>

                  <td className="p-3">
                    {product.type}
                  </td>

                  <td className="p-3">
                    ${product.price}
                  </td>

                  <td className="p-3">
                    {product.stock}
                  </td>

                  <td className="p-3 flex gap-2">

                    <Link
                      href={`/dashboard/products/${product._id}`}
                    >
                      Edit
                    </Link>

                    <button>
                      Delete
                    </button>

                  </td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}