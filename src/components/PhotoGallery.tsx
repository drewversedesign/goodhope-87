import { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoFilters from './PhotoFilters';
import PhotoGrid, { GalleryImage } from './PhotoGrid';
import PhotoLightbox from './PhotoLightbox';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/lovable-uploads/3a8f2e41-a6d3-400f-bb16-b3639668dac5.png',
      alt: 'Children showing love for education',
      title: 'Education Program',
      description: 'Students showing their love for learning and education support programs',
      category: 'education'
    },
    {
      id: '2',
      src: '/lovable-uploads/ae20c692-add7-44e3-8cf7-3dfb41d03120.png',
      alt: 'Children receiving nutritional support',
      title: 'Health & Nutrition',
      description: 'Providing essential nutrition and healthcare support to children in need',
      category: 'health'
    },
    {
      id: '3',
      src: '/lovable-uploads/81c61e84-d015-46ee-86f4-feb111e5bd7c.png',
      alt: 'Community gathering and family empowerment activities',
      title: 'Family Empowerment',
      description: 'Supporting families through community engagement and development programs',
      category: 'empowerment'
    },
    {
      id: '4',
      src: '/lovable-uploads/930dd311-3371-4175-a89c-65d6251b494c.png',
      alt: 'Children in a safe and protected environment',
      title: 'Child Protection',
      description: 'Creating safe environments where children can learn and thrive',
      category: 'protection'
    },
    {
      id: '5',
      src: '/lovable-uploads/e7abe70b-9515-4ba1-8fcd-1a59b534f5c3.png',
      alt: 'Community gathering and events',
      title: 'Community Events',
      description: 'Bringing families and communities together for support and celebration',
      category: 'community'
    },
    {
      id: '6',
      src: '/lovable-uploads/fdfa6be8-c88f-443e-bf11-1bd8ec758fdc.png',
      alt: 'Children engaged in hands-on learning activities',
      title: 'Learning Activities',
      description: 'Children actively participating in educational activities with learning materials and books',
      category: 'education'
    },
    {
      id: '7',
      src: '/lovable-uploads/623f54bd-bf74-4003-a3bd-ebe64b1a6d8b.png',
      alt: 'Children with message of blessings and hope',
      title: 'Community Outreach',
      description: 'Spreading messages of hope and blessings through community engagement',
      category: 'community'
    },
    {
      id: '8',
      src: '/lovable-uploads/4a68a2b4-58ea-4e10-94fd-38c016081bd2.png',
      alt: 'Children participating in programs',
      title: 'Program Participation',
      description: 'Active participation of children in our development programs',
      category: 'education'
    },
    {
      id: '9',
      src: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0168.jpg?raw=true',
      alt: 'Health and wellness activities',
      title: 'Health & Wellness',
      description: 'Promoting health and wellness through various community programs',
      category: 'health'
    },
    {
      id: '10',
      src: '/lovable-uploads/27090a33-68ee-40ec-9160-5d11f87e4799.png',
      alt: 'Children engaged in hands-on learning activities',
      title: 'Interactive Learning Sessions',
      description: 'Children actively participating in educational activities with learning materials and books',
      category: 'education'
    }
  ];

  console.log('PhotoGallery: Total images available:', images.length);
  console.log('PhotoGallery: Current filter:', filter);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'education', label: 'Education' },
    { key: 'health', label: 'Health' },
    { key: 'empowerment', label: 'Empowerment' },
    { key: 'protection', label: 'Protection' },
    { key: 'community', label: 'Community' }
  ];

  const filteredImages = filter === 'all' 
    ? images.slice(0, 9) // Show only first 9 images for compact display
    : images.filter(img => img.category === filter).slice(0, 9);

  console.log('PhotoGallery: Filtered images count:', filteredImages.length);
  console.log('PhotoGallery: Filtered images:', filteredImages.map(img => ({ id: img.id, title: img.title })));

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Pictures</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the real faces and stories behind our ministry's work across Uganda
          </p>
        </motion.div>

        <PhotoFilters 
          categories={categories}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <PhotoGrid 
          images={filteredImages}
          onImageSelect={setSelectedImage}
        />

        <PhotoLightbox
          selectedImage={selectedImage}
          images={filteredImages}
          onClose={() => setSelectedImage(null)}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
