
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: string;
}

interface PhotoGridProps {
  images: GalleryImage[];
  onImageSelect: (image: GalleryImage) => void;
}

const PhotoGrid = ({ images, onImageSelect }: PhotoGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden group"
            onClick={() => onImageSelect(image)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-3 md:p-6">
              <h3 className="text-sm md:text-lg font-bold mb-1">{image.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{image.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;
