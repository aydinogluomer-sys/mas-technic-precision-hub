import { Target, Gauge, Clock, Wrench } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Hassasiyet & Tolerans Disiplini",
    description: "±0.01mm toleranslarla çalışan, ISO standartlarına uygun üretim."
  },
  {
    icon: Gauge,
    title: "Proses Kontrollü Üretim",
    description: "Her adımda kalite kontrolü ve izlenebilir üretim süreçleri."
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description: "%98 zamanında teslimat oranı ile güvenilir lojistik."
  },
  {
    icon: Wrench,
    title: "Mühendislik Desteği",
    description: "DFM analizi ve teknik danışmanlık hizmetleri."
  }
];

export const WhyMasTechnic = () => {
  return (
    <section className="industrial-section bg-background">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="industrial-divider mx-auto mb-6" />
          <h2 className="industrial-heading mb-4">Neden Mas Technic?</h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-8 border-t-4 border-primary bg-industrial-light"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-primary flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-industrial-dark mb-3">
                {value.title}
              </h3>
              <p className="text-industrial-gray text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
