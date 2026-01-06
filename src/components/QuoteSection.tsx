import { QuoteForm } from '@/components/QuoteForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const QuoteSection = () => {
  return (
    <section id="quote" className="py-24 bg-background">
      <div className="industrial-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Teklif Formu
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-industrial-dark mb-6">
            Teklif Talebi Oluşturun
          </h2>
          <p className="text-lg text-industrial-anthracite max-w-2xl mx-auto">
            CAD dosyalarınızı yükleyin, projenizi açıklayın. Teknik ekibimiz en kısa sürede sizinle iletişime geçsin.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-industrial-light border border-industrial-gray/20 p-8 md:p-10">
              <QuoteForm />
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-industrial-dark p-8">
              <h3 className="text-xl font-bold text-primary-foreground mb-6">
                Hızlı İletişim
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">Telefon</p>
                    <p className="text-primary-foreground font-semibold">+90 (212) 555 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">E-posta</p>
                    <p className="text-primary-foreground font-semibold">info@mastechnic.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">Adres</p>
                    <p className="text-primary-foreground font-semibold">İstanbul, Türkiye</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">Çalışma Saatleri</p>
                    <p className="text-primary-foreground font-semibold">Pzt - Cmt: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary/5 border border-primary/20 p-8">
              <h3 className="text-lg font-bold text-industrial-dark mb-4">
                Neden Bizimle Çalışmalısınız?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-industrial-anthracite">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-sm">24 saat içinde teklif</span>
                </li>
                <li className="flex items-center gap-3 text-industrial-anthracite">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-sm">Ücretsiz teknik danışmanlık</span>
                </li>
                <li className="flex items-center gap-3 text-industrial-anthracite">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-sm">ISO 9001 sertifikalı üretim</span>
                </li>
                <li className="flex items-center gap-3 text-industrial-anthracite">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-sm">Zamanında teslimat garantisi</span>
                </li>
              </ul>
            </div>

            {/* Supported Formats */}
            <div className="border border-industrial-gray/20 p-6 bg-white">
              <h4 className="text-sm font-bold text-industrial-dark mb-3 uppercase tracking-wider">
                Desteklenen Formatlar
              </h4>
              <div className="flex flex-wrap gap-2">
                {['STEP', 'IGES', 'DXF', 'DWG', 'PDF', 'STL'].map((format) => (
                  <span 
                    key={format}
                    className="px-3 py-1 bg-industrial-light text-industrial-anthracite text-xs font-medium border border-industrial-gray/20"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
