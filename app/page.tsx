import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Discover the world with us</h1>
      <p className="mt-4">Explore amazing destinations</p>
      <Link href="/destinos" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Ver destinos
      </Link>
    </main>
  );
}
