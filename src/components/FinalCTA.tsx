import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  return (
    <section className="py-20 gradient-industrial">
      <div className="industrial-container text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Projenizi Hayata Geçirmeye Hazır mısınız?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Mühendislik ekibimiz projenizi incelemek ve size en uygun çözümü sunmak için hazır.
        </p>
        <Button variant="industrial-dark" size="xl">
          Teklif Al
        </Button>
      </div>
    </section>
  );
};
