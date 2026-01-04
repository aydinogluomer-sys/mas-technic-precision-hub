import { Upload, FileSearch, Settings, Truck } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Dosyanızı Yükleyin",
    description: "CAD dosyanızı yükleyin veya teknik çiziminizi paylaşın."
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Teknik Analiz & Geri Bildirim",
    description: "Mühendislik ekibimiz dosyanızı analiz eder ve size geri döner."
  },
  {
    icon: Settings,
    number: "03",
    title: "Üretim & Kalite Kontrol",
    description: "Üretim sürecinde her adım kalite kontrolden geçer."
  },
  {
    icon: Truck,
    number: "04",
    title: "Sevkiyat & Teslimat",
    description: "Parçalarınız güvenli paketlenerek zamanında teslim edilir."
  }
];

export const HowWeWork = () => {
  return (
    <section className="industrial-section bg-background">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="industrial-divider mx-auto mb-6" />
          <h2 className="industrial-heading mb-4">Nasıl Çalışıyoruz?</h2>
          <p className="industrial-subheading mx-auto">
            Tekliften Teslimata Sorunsuz Üretim Süreci
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border z-0" />
              )}
              
              <div className="industrial-card relative z-10 h-full text-center border-t-4 border-t-primary">
                {/* Step Number */}
                <div className="text-6xl font-bold text-muted/50 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-industrial-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-industrial-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
