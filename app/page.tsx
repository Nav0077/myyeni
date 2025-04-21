import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome to MYYENI
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-xl">
          This is a simple homepage !
        </p>
      </main>
    </>
  );
}
