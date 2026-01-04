import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "Minimum sipariş miktarı nedir?",
    answer: "Prototip için 1 adet, seri üretim için minimum 10 adet sipariş alıyoruz. Miktar ne olursa olsun, aynı kalite standartlarını uyguluyoruz."
  },
  {
    question: "Teklif süreci ne kadar sürer?",
    answer: "Standart parçalar için 24 saat içinde, karmaşık geometriler için 48-72 saat içinde detaylı teklif sunuyoruz."
  },
  {
    question: "Hangi dosya formatlarını kabul ediyorsunuz?",
    answer: "STEP, IGES, Parasolid, DXF, DWG ve SolidWorks dosyalarını kabul ediyoruz. Tercih edilen format STEP'tir."
  },
  {
    question: "Kalite sertifikalarınız nelerdir?",
    answer: "ISO 9001:2015, AS9100D (Havacılık) ve IATF 16949 (Otomotiv) sertifikalarına sahibiz."
  },
  {
    question: "Yurt dışına teslimat yapıyor musunuz?",
    answer: "Evet, Avrupa, Amerika ve Asya'ya düzenli sevkiyat yapıyoruz. DDP ve EXW koşullarında teslimat sunuyoruz."
  }
];

const blogPosts = [
  {
    title: "CNC Freze vs Torna: Hangi Yöntem Ne Zaman?",
    date: "15 Aralık 2024",
    category: "Teknik"
  },
  {
    title: "Malzeme Seçimi: Alüminyum Alaşımları Rehberi",
    date: "10 Aralık 2024",
    category: "Malzeme"
  },
  {
    title: "DFM Analizi ile Maliyetleri Düşürün",
    date: "5 Aralık 2024",
    category: "Mühendislik"
  }
];

export const FaqBlogSection = () => {
  return (
    <section className="industrial-section bg-background">
      <div className="industrial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Column */}
          <div>
            <div className="mb-8">
              <div className="industrial-divider mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-industrial-dark">
                Sıkça Sorulan Sorular
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-industrial-dark hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-industrial-gray pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Blog Column */}
          <div>
            <div className="mb-8">
              <div className="industrial-divider mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-industrial-dark">
                Teknik İçerikler
              </h2>
            </div>

            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <article 
                  key={index} 
                  className="group p-6 border border-border hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-industrial-dark mt-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-industrial-gray mt-2">
                        {post.date}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-industrial-gray group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
