const certifications = [
  { name: "ISO 9001:2015", label: "Kalite Yönetimi" },
  { name: "ISO 14001", label: "Çevre Yönetimi" },
  { name: "ISO 45001", label: "İş Sağlığı" },
  { name: "AS9100D", label: "Havacılık" },
  { name: "IATF 16949", label: "Otomotiv" },
];

export const CertificationBand = () => {
  return (
    <section className="py-8 bg-industrial-light border-y border-border">
      <div className="industrial-container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 text-industrial-gray">
              <div className="w-12 h-12 bg-muted flex items-center justify-center">
                <span className="text-xs font-bold text-industrial-anthracite">
                  {cert.name.split(' ')[0]}
                </span>
              </div>
              <div>
                <p className="font-semibold text-industrial-anthracite text-sm">{cert.name}</p>
                <p className="text-xs text-industrial-gray">{cert.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
