import Link from "next/link";

function cart() {
  return (
    <div>
      <Link href="/">
        <button>from cart</button>
      </Link>
    </div>
  );
}

export default cart;
