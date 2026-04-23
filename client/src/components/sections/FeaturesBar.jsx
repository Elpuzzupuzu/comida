import { FEATURES } from "../../data/features";

export default function FeaturesBar() {
  return (
    <div className="features-bar">
      {FEATURES.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-text">
            <div className="title">{feature.title}</div>
            <div className="sub">{feature.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}