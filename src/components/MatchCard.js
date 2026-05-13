export default function MatchCard({ title }) {
  return (
    <div className="glass">
      <div style={{color: '#00d4ff', fontSize: '10px', marginBottom: '5px'}}>● LIVE NOW</div>
      <div style={{fontSize: '16px', fontWeight: 'bold'}}>{title}</div>
      <button className="neon-btn">Watch Now</button>
    </div>
  );
}
