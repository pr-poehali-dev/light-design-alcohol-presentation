import React from "react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Славянка",
      description:
        "Ароматная медовая настойка с ягодами и травами, созданная по старинным рецептам. Насыщенный вкус, теплые пряные ноты и мягкое послевкусие согреют душу и тело.",
      features: [
        "Натуральный состав – мед, травы, лесные ягоды",
        "Идеальна для застолий и душевных посиделок",
        "Отлично сочетается с чаем, подается в чистом виде или со льдом",
      ],
      emoji: "🍯",
      accentColor: "gold" as const,
      imageUrl:
        "https://cdn.poehali.dev/files/0a663ab7-7e8a-4cd4-8e98-c0223afd0c23.png",
    },
    {
      title: "Яблочная водка",
      description:
        "Хрустящая сочность спелых яблок в благородной водочной основе! Идеальный баланс мягкого зернового дистиллята и яркого фруктового вкуса.",
      features: [
        "Чистый вкус с натуральным яблочным акцентом",
        "Универсальность: пейте в чистом виде, со льдом или в коктейлях",
        "Лёгкий аромат, который покоряет с первого глотка",
      ],
      emoji: "🍏",
      accentColor: "amber" as const,
      imageUrl:
        "https://cdn.poehali.dev/files/8b51d8c9-eb74-4df0-8064-0aed6a07c51f.png",
    },
    {
      title: "Сливовая настойка",
      description:
        "Густой аромат лета, терпкость косточки и медовое послевкусие. Готовится по старинным рецептам из отборных слив, выдержанных на зерновом спирте.",
      features: [
        "Натуральный вкус без искусственных добавок",
        "Мягкий согревающий эффект с фруктовой сладостью",
        "Отлично сочетается с кофе, шоколадом или в чистом виде",
      ],
      emoji: "🍑",
      accentColor: "deep-red" as const,
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="premium-text text-5xl font-bold text-deep-red mb-6">
            Наши напитки
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-warm-brown max-w-2xl mx-auto">
            Каждый напиток создан с душой и вниманием к традициям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
