import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <header className="w-full py-6 bg-blue-600 text-center">
        <h1 className="text-4xl font-bold">Perforoc Project Management</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow text-center space-y-6 mt-8">
        <h2 className="text-2xl font-semibold">Welcome to Perforoc App</h2>
        <p>Select an action to get started:</p>
        <ul className="space-y-4">
          <li>
            <Link href="/forage-form" className="text-blue-400 hover:text-blue-500">Forage Form</Link>
          </li>
          <li>
            <Link href="/injection-form" className="text-blue-400 hover:text-blue-500">Injection Form</Link>
          </li>
          <li>
            <Link href="/summary-table" className="text-blue-400 hover:text-blue-500">Summary Table</Link>
          </li>
        </ul>
      </main>

      <footer className="w-full py-4 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">© 2024 Perforoc Project Management</p>
      </footer>
    </div>
  );
}
