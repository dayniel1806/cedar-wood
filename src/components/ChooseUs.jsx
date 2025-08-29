import { Users, Building, Mountain, Star, Shield, Globe } from "lucide-react";
import "./ChooseUs.css";

export default function ChooseUs() {
  const features = [
    {
      icon: <Users className="icon" />,
      title: "Experienced Staff",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      icon: <Building className="icon" />,
      title: "Extensive Facilities",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      icon: <Mountain className="icon" />,
      title: "Dedicated Support",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    },
    {
      icon: <Star className="icon" />,
      title: "Trusted Reputation",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
      icon: <Shield className="icon" />,
      title: "Safety First",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
    },
    {
      icon: <Globe className="icon" />,
      title: "Global Presence",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">WHY CHOOSE CEDAR-WOOD</h2>
        <p className="why-subtitle">Over a decade of trust makes the difference.</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                {feature.icon}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
