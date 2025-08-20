
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import InteractiveImage from './InteractiveImage';
import { GalleryImage } from './PhotoGrid';

interface PhotoLightboxProps {
  selectedImage: GalleryImage | null;
  images: GalleryImage[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const PhotoLightbox = ({ selectedImage, images, onClose, onNavigate }: PhotoLightboxProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
          onClick={() => onNavigate('prev')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
          onClick={() => onNavigate('next')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="max-h-[70vh] overflow-hidden">
          <InteractiveImage
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-full h-full"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
          <p className="text-gray-600">{selectedImage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoLightbox;
