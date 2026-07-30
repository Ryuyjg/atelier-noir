import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-noir px-6 text-bone">
      <div className="max-w-xl text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.5em] text-champagne">Atelier Noir</p>
        <h1 className="font-display text-6xl">Room not found</h1>
        <p className="mt-5 text-sm leading-7 text-white/60">
          This corridor has gone quiet. Return to the studio index.
        </p>
        <Link className="mt-8 inline-flex border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.28em]" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
