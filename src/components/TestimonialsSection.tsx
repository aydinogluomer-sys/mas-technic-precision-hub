import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Mas Technic ile 5 yıldır çalışıyoruz. Tolerans disiplinleri ve zamanında teslimat konusunda sektörün en iyileri.",
    author: "Mehmet Yılmaz",
    company: "Aerotech Havacılık",
    role: "Satın Alma Müdürü"
  },
  {
    quote: "Kritik tıbbi cihaz parçalarımızı güvenle teslim ediyorlar. Kalite kontrol süreçleri mükemmel.",
    author: "Dr. Ayşe Kaya",
    company: "MedDevice",
    role: "Üretim Direktörü"
  },
  {
    quote: "Mühendislik destekleri sayesinde tasarımlarımızı optimize ettik ve maliyetleri %20 düşürdük.",
    author: "Can Demir",
    company: "RoboTech",
    role: "Ar-Ge Müdürü"
  }
];

const clients = [
  "Aerotech", "MedDevice", "RoboTech", "AutoParts", "DefenseTech", "SpaceSystems"
];

export const TestimonialsSection = () => {
  return (
    <section className="industrial-section bg-industrial-light">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="industrial-divider mx-auto mb-6" />
          <h2 className="industrial-heading mb-4">Bizi Tercih Edenler</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <p className="text-industrial-anthracite mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-industrial-dark">{testimonial.author}</p>
                <p className="text-sm text-industrial-gray">{testimonial.role}</p>
                <p className="text-sm text-primary font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Band */}
        <div className="border-t border-border pt-10">
          <p className="text-center text-sm text-industrial-gray uppercase tracking-wider mb-6">
            Referanslarımız
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-muted text-industrial-anthracite font-semibold text-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
