import Link from 'next/link';

export default function DestinosPage() {
  const destinos = [
    { id: 1, nome: "Paris, França", descricao: "Torre Eiffel e gastronomia" },
    { id: 2, nome: "Tóquio, Japão", descricao: "Tecnologia e tradição" },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Destinos Turísticos 🌍</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {destinos.map(destino => (
          <div key={destino.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{destino.nome}</h2>
            <p>{destino.descricao}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Voltar para home
      </Link>
    </main>
  );
}
