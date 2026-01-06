import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, X, FileText, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UploadedFile {
  file: File;
  id: string;
}

export const QuoteForm = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: '',
  });

  const allowedExtensions = ['.step', '.stp', '.iges', '.igs', '.dxf', '.dwg', '.pdf', '.stl'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateFile = (file: File): boolean => {
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      toast({
        title: "Desteklenmeyen dosya formatı",
        description: `Desteklenen formatlar: ${allowedExtensions.join(', ')}`,
        variant: "destructive",
      });
      return false;
    }
    if (file.size > 50 * 1024 * 1024) {
      toast({
        title: "Dosya çok büyük",
        description: "Maksimum dosya boyutu 50MB",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    
    const validFiles: UploadedFile[] = [];
    Array.from(files).forEach(file => {
      if (validateFile(file)) {
        validFiles.push({
          file,
          id: Math.random().toString(36).substr(2, 9),
        });
      }
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Eksik bilgi",
        description: "Lütfen ad ve e-posta alanlarını doldurun.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Teklif talebiniz alındı",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-industrial-light border-2 border-primary p-12 text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-industrial-dark mb-4">
          Talebiniz Başarıyla Gönderildi
        </h3>
        <p className="text-industrial-anthracite mb-8">
          Teklif talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <Button 
          variant="industrial" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', company: '', description: '' });
            setUploadedFiles([]);
          }}
        >
          Yeni Talep Oluştur
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-industrial-dark font-semibold">
            Ad Soyad <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Adınız ve soyadınız"
            className="border-industrial-gray/30 focus:border-primary bg-white"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-industrial-dark font-semibold">
            E-posta <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ornek@sirket.com"
            className="border-industrial-gray/30 focus:border-primary bg-white"
            required
          />
        </div>
      </div>

      {/* Company */}
      <div className="space-y-2">
        <Label htmlFor="company" className="text-industrial-dark font-semibold">
          Şirket
        </Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Şirket adı"
          className="border-industrial-gray/30 focus:border-primary bg-white"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-industrial-dark font-semibold">
          Proje Açıklaması
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Projeniz hakkında detaylı bilgi verin: malzeme, adet, tolerans gereksinimleri, teslimat tarihi vb."
          className="border-industrial-gray/30 focus:border-primary bg-white min-h-[120px] resize-none"
        />
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <Label className="text-industrial-dark font-semibold">
          CAD Dosyaları
        </Label>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`
            border-2 border-dashed p-8 text-center cursor-pointer transition-all
            ${dragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-industrial-gray/30 hover:border-primary/50 bg-white'
            }
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={allowedExtensions.join(',')}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
          <Upload className={`w-10 h-10 mx-auto mb-4 ${dragActive ? 'text-primary' : 'text-industrial-gray'}`} />
          <p className="text-industrial-dark font-medium mb-2">
            Dosyaları sürükleyip bırakın veya tıklayın
          </p>
          <p className="text-sm text-industrial-anthracite">
            Desteklenen formatlar: STEP, IGES, DXF, DWG, PDF, STL (Max 50MB)
          </p>
        </div>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <Label className="text-industrial-dark font-semibold">
            Yüklenen Dosyalar ({uploadedFiles.length})
          </Label>
          <div className="space-y-2">
            {uploadedFiles.map((uploadedFile) => (
              <div 
                key={uploadedFile.id}
                className="flex items-center justify-between bg-industrial-light border border-industrial-gray/20 p-3"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-industrial-dark truncate max-w-[200px] md:max-w-[400px]">
                      {uploadedFile.file.name}
                    </p>
                    <p className="text-xs text-industrial-anthracite">
                      {formatFileSize(uploadedFile.file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(uploadedFile.id)}
                  className="p-1 hover:bg-industrial-gray/20 transition-colors"
                >
                  <X className="w-4 h-4 text-industrial-anthracite" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="industrial" 
        size="xl" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Gönderiliyor...' : 'Teklif Talebi Gönder'}
      </Button>

      <p className="text-xs text-industrial-anthracite text-center">
        Formunuzu göndererek, bilgilerinizin teklif hazırlama amacıyla kullanılmasını kabul etmiş olursunuz.
      </p>
    </form>
  );
};
