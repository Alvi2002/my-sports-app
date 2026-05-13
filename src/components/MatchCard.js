export default function MatchCard({ title }) {
  return (
    <div className="glass p-4 rounded-xl mt-4">
      <h2 className="font-bold">{title}</h2>
      <button className="bg-neonBlue text-black px-4 py-1 rounded-md mt-2">Watch</button>
    </div>
  );
}
