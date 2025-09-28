import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center p-4">
          <h1>TILE GAME</h1> <Link href="/game">Login</Link>
        </nav>
        <section>
          <h2 className="text-2xl font-bold">Welcome to Tile game</h2>
          <p>
            A fantaisy game where you explore a vast world and write your own
            destiny
          </p>
        </section>
      </div>
    </div>
  );
}
