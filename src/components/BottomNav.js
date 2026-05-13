export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 p-4 flex justify-around z-50">
      <div className="text-neon flex flex-col items-center">
        <span className="text-xl">🏠</span>
        <span className="text-[10px]">Home</span>
      </div>
      <div className="text-white/50 flex flex-col items-center">
        <span className="text-xl">📺</span>
        <span className="text-[10px]">Live</span>
      </div>
      <div className="text-white/50 flex flex-col items-center">
        <span className="text-xl">📅</span>
        <span className="text-[10px]">Schedule</span>
      </div>
      <div className="text-white/50 flex flex-col items-center">
        <span className="text-xl">⚙️</span>
        <span className="text-[10px]">Admin</span>
      </div>
    </div>
  );
    }
