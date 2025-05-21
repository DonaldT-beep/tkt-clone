import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white">
      <Link href="/">
        <span className="text-xl font-bold">TKT</span>
      </Link>
      <div className="space-x-4">
        <Link href="/events">Events</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="space-x-2">
        <Link href="/login">
          <button className="px-4 py-2 border rounded hover:bg-gray-100">Login</button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}
