import { Button } from '@/components/ui/button';
import { Cog, Circle, Layers, Zap, Package } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: "CNC Freze",
    description: "3, 4 ve 5 eksen CNC freze işlemleri ile karmaşık geometrilerde hassas üretim."
  },
  {
    icon: Circle,
    title: "CNC Torna",
    description: "Yüksek hassasiyetli CNC torna ile silindirik parça üretimi."
  },
  {
    icon: Layers,
    title: "Talaşlı İmalat",
    description: "Geleneksel ve CNC destekli talaşlı imalat çözümleri."
  },
  {
    icon: Zap,
    title: "Lazer Kesim",
    description: "Fiber lazer teknolojisi ile hassas ve hızlı kesim operasyonları."
  },
  {
    icon: Package,
    title: "Kalıp & Döküm",
    description: "Plastik enjeksiyon ve metal döküm kalıpları üretimi."
  }
];

export const ServicesSection = () => {
  return (
    <section className="industrial-section bg-background">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="industrial-divider mx-auto mb-6" />
          <h2 className="industrial-heading mb-4">Hizmetlerimiz</h2>
          <p className="industrial-subheading mx-auto">
            Kapsamlı CNC Üretim Çözümleri
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="industrial-card group hover:border-primary transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-industrial-dark mb-3">
                {service.title}
              </h3>
              <p className="text-industrial-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* CTAs */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  İncele
                </Button>
                <Button variant="industrial" size="sm">
                  Teklif Al
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
