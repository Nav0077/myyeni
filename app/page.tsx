import { useRouter } from "next/navigation";

// app/page.tsx
"use client";


export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/homepage"); // Navigate to the home page
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to My Awesome App!</h1>
      <p className="text-xl mb-4">
        Explore the power of Next.js with TypeScript and build amazing web applications.
      </p>
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
      >
        Get Started
      </button>
    </main>
  );
}
