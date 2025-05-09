'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center text-gray-800 dark:text-gray-100">
      <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">MYYENI</div>
      
      <div className="flex items-center space-x-6">
        <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link>
        <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
        </button>
      </div>
    </nav>
  );
}
