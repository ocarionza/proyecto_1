export default function Counters({
  wins,
  losses,
}: {
  wins: number;
  losses: number;
}) {
  return (
    <section className="counters">
      <div>Contador de victorias: {wins}</div>
      <div>Contador de derrotas: {losses}</div>
    </section>
  );
}