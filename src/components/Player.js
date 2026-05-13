export default function Player({ url }) {
  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden">
      <iframe src={url} className="w-full h-full" allowFullScreen />
    </div>
  );
    }
