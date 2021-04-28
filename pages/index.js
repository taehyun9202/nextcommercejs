import Head from "next/head";
import { useEffect, useState } from "react";
import HomeProduct from "../components/HomeProduct";
import getCommerce from "../utils/commerce";

export default function Home({ products }) {
  const [searchInput, setSearchInput] = useState("");
  const [type, setType] = useState(null);

  const filteredProducts = () => {
    let filtered = [];
    if (type === null) {
      filtered = products;
    } else {
      products.map((product) => {
        if (product.categories.some((c) => c.name === type)) {
          filtered.push(product);
        }
      });
    }
    if (searchInput.length > 0) {
      let result = [];
      filtered.map((product) => {
        if (product.name.toUpperCase().includes(searchInput.toUpperCase())) {
          result.push(product);
        }
      });
      return result;
    }
    return filtered;
  };

  return (
    <div className="flex w-full flex-col justify-center p-10 md:py-20">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <p className="hidden md:block mt-4 text-2xl font-bold">
          CommerceJS Tutorial
        </p>
        <p className="mt-4 text-lg font-semibold">Categories</p>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => setType(null)}
            className={`outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2 ${
              type === null && `bg-gray-400 border-gray-600`
            }`}
          >
            All
          </button>
          <button
            onClick={() => setType("Home")}
            className={`outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2 ${
              type === "Home" && `bg-gray-400 border-gray-600`
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setType("Furniture")}
            className={`outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2 ${
              type === "Furniture" && `bg-gray-400 border-gray-600`
            }`}
          >
            Furniture
          </button>
          <button
            onClick={() => setType("Electronics")}
            className={`outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2 ${
              type === "Electronics" && `bg-gray-400 border-gray-600`
            }`}
          >
            Electronics
          </button>
          <button
            onClick={() => setType("Appliances")}
            className={`outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2 ${
              type === "Appliances" && `bg-gray-400 border-gray-600`
            }`}
          >
            Appliances
          </button>
        </div>
        <input
          type="text"
          className="border border-black h-8 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 mt-4 pl-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center mt-12 gap-4">
        {filteredProducts().map((product) => (
          <HomeProduct product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
