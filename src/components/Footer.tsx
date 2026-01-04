import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-primary-foreground">
      <div className="industrial-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">MAS TECHNIC</span>
                <p className="text-xs text-primary-foreground/60 -mt-0.5">Precision Manufacturing</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              CNC Freze, Torna ve Talaşlı İmalatta hassasiyet ve güvenilirlik odaklı mühendislik çözümleri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hızlı Erişim</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kabiliyetler</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Malzemeler</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kariyer</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hizmetler</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">CNC Freze</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CNC Torna</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Talaşlı İmalat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lazer Kesim</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kalıp & Döküm</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Organize Sanayi Bölgesi, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+902125551234" className="hover:text-primary transition-colors">
                  +90 212 555 12 34
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@mastechnic.com" className="hover:text-primary transition-colors">
                  info@mastechnic.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="industrial-container py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2024 Mas Technic. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-primary transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
