import Head from "next/head";
import { useEffect, useState } from "react";
import HomeProduct from "../components/HomeProduct";
import getCommerce from "../utils/commerce";

export default function Home({ products }) {
  const [searchInput, setSearchInput] = useState("");
  console.log(products);
  const filtered = [];
  if (searchInput) {
    products.map((product) => {
      if (product.name.toUpperCase().includes(searchInput.toUpperCase())) {
        console.log(product);
        filtered.push(product);
      }
    });
  }

  return (
    <div className="flex w-full flex-col justify-center p-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <p className="mt-4 text-2xl font-bold">CommerceJS Tutorial</p>
        <p className="mt-4 font-semibold">Categories</p>
        <div className="flex space-x-2 mt-4">
          <button className="outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2">
            All
          </button>
          <button className="outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2">
            Home
          </button>
          <button className="outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2">
            Furniture
          </button>
          <button className="outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2">
            Electronics
          </button>
          <button className="outline-none hover:outline-none focus:outline-none border border-yellow-200 rounded-lg bg-yellow-50 px-2">
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
        {searchInput.length > 0
          ? filtered.map((product) => <HomeProduct product={product} />)
          : products.map((product) => <HomeProduct product={product} />)}
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
