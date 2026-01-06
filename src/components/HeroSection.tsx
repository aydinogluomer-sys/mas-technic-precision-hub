import { Button } from '@/components/ui/button';
import { RotatingHeadline } from '@/components/RotatingHeadline';
import { Upload } from 'lucide-react';
import heroCnc from '@/assets/hero-cnc.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCnc}
          alt="CNC Machining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/80 to-industrial-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 industrial-container w-full py-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Mas Technic
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <RotatingHeadline />
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl leading-relaxed">
            CNC Freze, Torna ve Talaşlı İmalatta; ölçü hassasiyeti, yüksek doğruluk ve proses kontrollü üretim anlayışıyla, stabil kalite ve zamanında teslimat odaklı mühendislik çözümleri sunuyoruz.
          </p>

          {/* Slogan */}
          <p className="text-primary font-semibold text-lg mb-10 border-l-4 border-primary pl-4">
            "Disiplinli Operasyon, Güvenilir Üretim."
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button 
              variant="industrial" 
              size="xl"
              onClick={() => {
                document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Teklif Al
            </Button>
            <Button 
              variant="industrial-outline" 
              size="xl" 
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-industrial-dark"
              onClick={() => {
                document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Kabiliyetleri Gör
            </Button>
          </div>

          {/* CAD Upload Teaser */}
          <div className="border-2 border-dashed border-primary-foreground/30 bg-industrial-dark/50 p-6 max-w-md hover:border-primary transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">CAD Dosyası Sürükle & Bırak</p>
                <p className="text-primary-foreground/60 text-sm">STEP, IGES, DXF desteklenir</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
