import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-500">
      <nav className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <Link href="/" className="text-white font-bold text-2xl">
          Home Blog
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blogs" className="text-white hover:text-gray-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/api/auth/signin" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
