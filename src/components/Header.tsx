import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-industrial-dark text-primary-foreground py-2">
        <div className="industrial-container flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+902125551234" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              <span>+90 212 555 12 34</span>
            </a>
            <a href="mailto:info@mastechnic.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@mastechnic.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="industrial-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div>
              <span className="font-bold text-xl text-industrial-dark tracking-tight">MAS TECHNIC</span>
              <p className="text-xs text-industrial-gray -mt-0.5">Precision Manufacturing</p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#hizmetler" className="text-sm font-medium text-industrial-anthracite hover:text-primary transition-colors">
              Hizmetler
            </a>
            <a href="#kabiliyet" className="text-sm font-medium text-industrial-anthracite hover:text-primary transition-colors">
              Kabiliyetler
            </a>
            <a href="#malzemeler" className="text-sm font-medium text-industrial-anthracite hover:text-primary transition-colors">
              Malzemeler
            </a>
            <a href="#hakkimizda" className="text-sm font-medium text-industrial-anthracite hover:text-primary transition-colors">
              Hakkımızda
            </a>
            <a href="#iletisim" className="text-sm font-medium text-industrial-anthracite hover:text-primary transition-colors">
              İletişim
            </a>
          </nav>

          {/* CTA */}
          <Button variant="industrial" size="default">
            Teklif Al
          </Button>
        </div>
      </div>
    </header>
  );
};
