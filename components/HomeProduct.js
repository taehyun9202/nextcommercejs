import Link from "next/link";

function HomeProduct({ product }) {
  return (
    <Link href={`/products/${product.permalink}`}>
      <div className="flex flex-col justify-center items-center p-6 cursor-pointer border-r-2 border-b-2 shadow-xl group hover:bg-gray-50">
        <div className="w-full p-4 relative group">
          <img
            src={product.media.source}
            alt={product.name}
            className="w-full h-40 object-contain top-0 left-0 transform duration-1000 group-hover:scale-110 ease-in-out"
          />
        </div>
        <p className="line-clamp-1">{product.name}</p>
        <p>
          <span>$ </span>
          {product.price.raw}
        </p>
      </div>
    </Link>
  );
}

export default HomeProduct;
