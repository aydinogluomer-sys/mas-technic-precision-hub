import { Monitor, Ruler, CheckCircle, Factory } from 'lucide-react';

const capabilities = [
  {
    icon: Monitor,
    title: "Makine Parkuru",
    specs: [
      "5 Eksen CNC Freze (DMG Mori)",
      "CNC Torna (Mazak)",
      "Wire EDM (Sodick)",
      "Fiber Lazer Kesim"
    ]
  },
  {
    icon: Ruler,
    title: "Tolerans Aralıkları",
    specs: [
      "Standart: ±0.05mm",
      "Hassas: ±0.01mm",
      "Ultra Hassas: ±0.005mm",
      "Yüzey: Ra 0.8 - 3.2"
    ]
  },
  {
    icon: CheckCircle,
    title: "CMM & Kalite Kontrol",
    specs: [
      "Zeiss CMM Ölçüm",
      "Optik Tarama",
      "Yüzey Pürüzlülük Testi",
      "Malzeme Sertifikası"
    ]
  },
  {
    icon: Factory,
    title: "Üretim Kapasitesi",
    specs: [
      "Prototip: 1-10 adet",
      "Küçük Seri: 10-500 adet",
      "Seri Üretim: 500+ adet",
      "Max Parça: 2000x1000mm"
    ]
  }
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="industrial-section gradient-dark">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Kabiliyetlerimiz
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 hover:border-primary/50 transition-colors"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary-foreground/10">
                <cap.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary-foreground">
                  {cap.title}
                </h3>
              </div>
              
              {/* Specs */}
              <ul className="space-y-3">
                {cap.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground/70">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
