export default function MatchCard({ title }) {
  return (
    <div className="glass p-5 rounded-3xl mb-4 border border-white/10 shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] text-neon font-bold uppercase tracking-widest animate-pulse">● Live Now</span>
      </div>
      <h2 className="font-bold text-lg leading-tight">{title}</h2>
      <button className="mt-5 w-full bg-neonBlue text-black font-black py-3 rounded-2xl shadow-lg shadow-neonBlue/20 active:scale-95 transition-all">
        Watch Now
      </button>
    </div>
  );
}
