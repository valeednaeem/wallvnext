import Image from 'next/image'
import React from 'react'

const productsList = [
  {
        id: 1,
        name: "Product 1",
        description: "This is a great product that you will love!",
        price: "$19.99",
        image: "https://via.placeholder.com/300x200",
        href: "/shop/products/1"
  },
    {
        id: 2,
        name: "Product 2",
        description: "This is another great product that you will love!",
        price: "$29.99",
        image: "https://via.placeholder.com/300x200",
        href: "/shop/products/2"
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is yet another great product that you will love!",
        price: "$39.99",
        image: "https://via.placeholder.com/300x200",
        href: "/shop/products/3"
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is a fantastic product that you will love!",
        price: "$49.99",
        image: "https://via.placeholder.com/300x200",
        href: "/shop/products/4"
    },
];


function page() {
  return (
      <>
          <div className="container py-12 px-6">
            <h1 className="text-3xl font-bold mb-6">Shop</h1>
            <p className="text-lg text-muted-foreground mb-8">
                  Explore our wide range of products and find the perfect fit for your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {productsList.map((product) => (
                    <a href={`/shop/products/${product.id}`} key={product.id} className="border rounded-lg p-4 block h-full w-full max-w-md transition-opacity hover:opacity-80">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4"
                        width={300}
                        height={200}
                    />
                          <h2 className="text-xl font-semibold mb-2">{ product.name }</h2>
                    <p className="text-muted-foreground mb-4">
                          { product.description }
                          </p>
                            <p className="text-lg font-bold mb-4">{ product.price }</p>
                    <button className="bg-primary text-white px-4 py-2 rounded">
                          Add to Cart
                    </button>
                    </a>
                    ))}
            </div>
          </div>
    </>
  )
}

export default page