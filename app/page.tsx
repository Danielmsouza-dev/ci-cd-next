import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Portal de Viagens 🌍</h1>
      <p className="mt-4">Explore os melhores destinos turísticos</p>
      <Link href="/destinos" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Ver destinos
      </Link>
    </main>
  );
}
