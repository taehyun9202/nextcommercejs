import { useEffect, useState } from "react";
import getCommerce from "../../utils/commerce";
import Link from "next/link";

function Product({ product, imgArray, categories, related }) {
  const [images, setImages] = useState(imgArray[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity > product.inventory.available) {
      setQuantity(product.inventory.available);
    } else if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-10 sm:space-x-4 sm:space-y-0 sm:flex-row justify-center items-center py-10 px-10 md:px-20 lg:w-[900px] lg:m-auto md:mt-10 lg:mt-10">
        <div className="flex flex-col w-full sm:1/2">
          <img
            src={images}
            alt={`${product.name}_${imgArray.length - 1}`}
            className="w-full object-contain top-0 left-0 max-h-[300px] min-h-[200px]"
          />
          <div className="flex mt-4 justify-center items-center h-20 overflow-x-scroll pl-20">
            {imgArray.map((img, index) => (
              <img
                src={img}
                alt={`${product.name}_${index}`}
                className="w-12 h-12 border mx-1 object-contain hover:ring-4 hover:ring-yellow-300 cursor-pointer"
                onClick={() => setImages(img)}
              />
            ))}
          </div>
        </div>
        <div className="w-full sm:1/2 flex flex-col">
          <p className="font-bold text-3xl">{product.name}</p>
          <div className="flex space-x-2 my-4">
            {categories.map((category) => (
              <div className="bg-yellow-50 rounded-full px-2 py-1 font-semibold">
                {category}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Price</p>
            <p className="text-right text-lg font-semibold">
              {product.price.formatted_with_code}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Inventory</p>
            <p
              className={`text-right ${
                product.inventory.available < 21 && `text-red-500`
              }`}
            >
              {product.inventory.available > 0 ? (
                <>{product.inventory.available} left(s)</>
              ) : (
                <>No Stocks</>
              )}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Quantity</p>
            <input
              type="number"
              min="0"
              max={product.inventory.available}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-black rounded-md focus:outline-none pl-2"
            />
          </div>
          <div className="product__description">
            <p className="font-semibold">Description</p>
            <p className="text-xs mt-1">{product.description.slice(11, -5)}</p>
          </div>
          <button className="border w-full rounded-lg border-yellow-300 bg-yellow-50 mt-6">
            Add to Card
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-x-scroll py-10 px-10 md:px-20 lg:w-[900px] lg:m-auto md:mt-10 lg:mt-10 space-x-2">
        <p className="text-2xl font-semibold">Related Items</p>
        <div className="flex">
          {related.map((item) => (
            <Link href={`/products/${item.permalink}`}>
              <div className="flex flex-col w-48 justify-center items-center p-2 cursor-pointer">
                <div className=" p-4 relative group ring-2 ring-black">
                  <img
                    src={item.media.source}
                    alt={item.name}
                    className="h-16 sm:h-24 w-full  transform object-contain duration-1000 group-hover:scale-110 ease-in-out "
                  />
                </div>
                <div className="px-1">
                  <p className="text-xs line-clamp-1">{item.name}</p>
                  <p className="text-xs text-right">$ {item.price.raw}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const commerce = getCommerce();
  const product = await commerce.products.retrieve(id, {
    type: "permalink",
  });
  const imgArray = [];
  const categories = [];
  const related = product.related_products;
  product.assets.map((asset) => imgArray.push(asset.url));
  product.categories.map((category) => categories.push(category.name));

  return {
    props: {
      product,
      imgArray,
      categories,
      related,
    },
  };
}
