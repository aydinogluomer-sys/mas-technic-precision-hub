import { Plane, Car, Heart, Bot } from 'lucide-react';

const industries = [
  { icon: Plane, name: "Havacılık & Uzay" },
  { icon: Car, name: "Otomotiv" },
  { icon: Heart, name: "Tıbbi" },
  { icon: Bot, name: "Robotik" },
];

export const IndustriesBand = () => {
  return (
    <section className="py-12 gradient-dark">
      <div className="industrial-container">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 border border-primary-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <industry.icon className="w-8 h-8 text-primary-foreground/70 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
