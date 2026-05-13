import BottomNav from '../components/BottomNav';
import MatchCard from '../components/MatchCard';

export default function Home() {
  return (
    <div className="pb-24">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 px-6 pt-8">
        <h1 className="text-3xl font-black text-neon tracking-tighter italic">
          Alvi<span className="text-white">Sports</span>
        </h1>
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">🔔</div>
      </header>

      {/* Matches Section */}
      <div className="px-4">
        <h2 className="text-xl font-bold mb-4 px-2">Live Now</h2>
        <MatchCard title="Bangladesh vs India - T20 Series" />
        <MatchCard title="Real Madrid vs Barcelona - La Liga" />
      </div>

      <BottomNav />
    </div>
  );
        }
