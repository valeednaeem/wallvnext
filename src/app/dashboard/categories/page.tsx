import Link from "next/link";

async function getCategories() {
  const response =
    await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/categories`,
      {
        cache:
          "no-store",
      }
    );

  return response.json();
}

export default async function CategoriesPage() {
  const categories =
    await getCategories();

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">
          Categories
        </h1>

        <Link
          href="/dashboard/categories/new"
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Add Category
        </Link>
      </div>

      <div className="rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Slug
              </th>

              <th className="p-3 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.map(
              (
                category: {
                  _id: string;
                  name: string;
                  slug: string;
                  status: string;
                }
              ) => (
                <tr
                  key={
                    category._id
                  }
                  className="border-b"
                >
                  <td className="p-3">
                    {
                      category.name
                    }
                  </td>

                  <td className="p-3">
                    {
                      category.slug
                    }
                  </td>

                  <td className="p-3">
                    {
                      category.status
                    }
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