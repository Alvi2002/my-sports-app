export default function MatchCard({ title }) {
  return (
    <div className="glass p-5 rounded-3xl mb-4 border border-white/10 shadow-xl backdrop-blur-md">
      <span className="text-[10px] text-neonBlue font-bold uppercase tracking-widest block mb-2">● Live Now</span>
      <h2 className="font-bold text-lg text-white leading-tight">{title}</h2>
      <button className="mt-5 w-full bg-cyan-500 text-black font-black py-3 rounded-2xl transition-all hover:bg-cyan-400">
        Watch Now
      </button>
    </div>
  );
}
