export default function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <img className="card-img" src={item.imgUrl} alt={item.title} />
      <div className="card-overlay" />
      <div className="card-content">
        <div className="card-icon">{item.icon}</div>
        <div className="card-title">{item.title}</div>
        <div className="card-underline" />
      </div>
    </div>
  );
}