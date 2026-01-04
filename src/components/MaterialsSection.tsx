import { Button } from '@/components/ui/button';

const materials = [
  { name: "Alüminyum", variants: "6061, 7075, 2024" },
  { name: "Çelik", variants: "1045, 4140, S355" },
  { name: "Paslanmaz", variants: "304, 316, 17-4PH" },
  { name: "Pirinç", variants: "C360, C260" },
  { name: "Plastik", variants: "Delrin, PEEK, Nylon" },
];

export const MaterialsSection = () => {
  return (
    <section className="industrial-section bg-industrial-light">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="industrial-divider mx-auto mb-6" />
          <h2 className="industrial-heading mb-4">Çalıştığımız Malzemeler</h2>
          <p className="industrial-subheading mx-auto">
            50'den fazla malzeme arasından seçim yapın
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {materials.map((material, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 text-center hover:border-primary transition-colors cursor-pointer group"
            >
              <h3 className="text-lg font-bold text-industrial-dark mb-2 group-hover:text-primary transition-colors">
                {material.name}
              </h3>
              <p className="text-sm text-industrial-gray">
                {material.variants}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="industrial-outline" size="lg">
            Tüm Malzemeler
          </Button>
        </div>
      </div>
    </section>
  );
};
