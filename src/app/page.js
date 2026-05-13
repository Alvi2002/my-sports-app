import BottomNav from '../components/BottomNav';
import MatchCard from '../components/MatchCard';

export default function Home() {
  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neon">StreamPulse</h1>
        <div className="text-xl">🔔</div>
      </header>

      {/* Matches Section */}
      <h2 className="text-lg font-semibold mb-2">Live Now</h2>
      <MatchCard title="Bangladesh vs India - T20 Series" />
      <MatchCard title="Real Madrid vs Barcelona - La Liga" />

      <BottomNav />
    </div>
  );
}
