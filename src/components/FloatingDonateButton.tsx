
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import DonationModal from "@/components/DonationModal";

const FloatingDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDonationModalOpen(true);
  };
  
  if (!isVisible) return null;
  
  return (
    <>
      <Button
        onClick={handleDonateClick}
        variant="glass-orange"
        className="fixed bottom-6 right-6 z-50 rounded-full px-4 py-3 liquid-depth liquid-focus"
        aria-label="Donate Now"
      >
        <Heart className="h-5 w-5" />
        <span className="hidden sm:inline">Donate</span>
      </Button>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default FloatingDonateButton;
