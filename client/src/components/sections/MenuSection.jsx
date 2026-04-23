import { MENU_ITEMS } from "../../data/menuItems";
import MenuCard from "../ui/MenuCard";

export default function MenuSection() {
  return (
    <section className="menu-section">
      <div className="section-eyebrow">
        <div className="section-eyebrow-line" />
        PARA TODOS LOS GUSTOS
        <div className="section-eyebrow-line" />
      </div>

      <h2 className="section-title">CONOCÉ NUESTRO MENÚ</h2>
      <div className="section-star">★</div>

      <div className="menu-grid">
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}