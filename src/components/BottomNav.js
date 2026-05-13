export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-2xl border-t border-white/10 p-3 flex justify-around items-center z-50">
      <div className="flex flex-col items-center text-neonBlue">
        <span className="text-xl">🏠</span>
        <span className="text-[10px] font-bold">Home</span>
      </div>
      <div className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
        <span className="text-xl">📺</span>
        <span className="text-[10px]">Live</span>
      </div>
      <div className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
        <span className="text-xl">📅</span>
        <span className="text-[10px]">Schedule</span>
      </div>
      <div className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
        <span className="text-xl">⚙️</span>
        <span className="text-[10px]">Admin</span>
      </div>
    </div>
  );
    }
