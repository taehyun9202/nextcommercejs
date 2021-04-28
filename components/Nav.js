import Link from "next/link";
function Nav() {
  return (
    <div>
      <Link href="/">
        <div className="flex fixed z-10 h-11 w-full top-0 cursor-pointer md:hidden opacity-70 hover:shadow-lg hover:opacity-100">
          <div className="w-full items-center justify-center text-center pt-2 border bg-yellow-50">
            <p>CommerceJS Tutorial</p>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="fixed z-10 h-11 top-6 left-10 hidden cursor-pointer md:flex opacity-70 hover:shadow-lg hover:opacity-100 rounded-md overflow-hidden">
          <div className="items-center justify-center text-center pt-2 px-2 border bg-yellow-50">
            <p>Home</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
