import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  emoji: string;
  accentColor: "gold" | "amber" | "deep-red";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  features,
  emoji,
  accentColor,
}) => {
  const colorClasses = {
    gold: "border-gold/30 hover:border-gold/50 text-gold",
    amber: "border-amber/30 hover:border-amber/50 text-amber",
    "deep-red": "border-deep-red/30 hover:border-deep-red/50 text-deep-red",
  };

  return (
    <div
      className={`premium-card p-8 ${colorClasses[accentColor]} max-w-md mx-auto`}
    >
      <div className="text-6xl mb-6 text-center">{emoji}</div>

      <h3
        className={`premium-text text-3xl font-bold mb-4 text-center ${colorClasses[accentColor].split(" ")[2]}`}
      >
        {title}
      </h3>

      <p className="text-gray-700 mb-6 leading-relaxed text-center">
        {description}
      </p>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={`${colorClasses[accentColor].split(" ")[2]} text-lg`}
            >
              ✔️
            </span>
            <span className="text-gray-700 text-sm leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full mt-8 bg-${accentColor} hover:bg-${accentColor}/90 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105`}
      >
        Подробнее
      </button>
    </div>
  );
};

export default ProductCard;
