import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen premium-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/0a663ab7-7e8a-4cd4-8e98-c0223afd0c23.png)",
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-deep-red rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in">
          <h1 className="premium-text text-6xl md:text-8xl font-bold text-deep-red mb-6">
            Славянка
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-warm-brown mb-8 max-w-3xl mx-auto leading-relaxed">
            Настоящий славянский дух в благородном напитке! Ароматная медовая
            настойка с ягодами и травами, созданная по старинным рецептам.
          </p>

          <div className="slide-up flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-2">🌿</div>
              <p className="text-warm-brown font-semibold">Лесные травы</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🫐</div>
              <p className="text-warm-brown font-semibold">Лесные ягоды</p>
            </div>
          </div>

          <button className="bg-deep-red hover:bg-deep-red/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
