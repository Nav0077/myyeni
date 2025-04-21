// components/NavBar.tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MYYENI</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}
