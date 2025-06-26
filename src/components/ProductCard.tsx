import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  emoji: string;
  accentColor: "gold" | "amber" | "deep-red";
  imageUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  features,
  emoji,
  accentColor,
  imageUrl,
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
      {imageUrl ? (
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/30">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="text-6xl mb-6 text-center">{emoji}</div>
      )}

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

      {/* Кнопка "Подробнее" удалена */}
    </div>
  );
};

export default ProductCard;
