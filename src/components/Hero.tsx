
import { ArrowRight, Heart, Users, BookOpen, Shield, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault();
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/donate';
  };
  
  return <motion.div className="relative mt-16 md:mt-0 w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          <img src="/hero-image.jpg" alt="Young caregiver and child smiling together - representing our ministry's mission" className={`w-full h-full object-cover opacity-70 ${isMobile ? 'object-right' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Transforming Lives Through Love and Care</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                Good Hope Ministries is dedicated to nurturing, protecting, and empowering children in Uganda through comprehensive programs that address their educational, health, and developmental needs.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 rounded-md flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={handleDonateClick}
                >
                  Donate Now
                  <Heart className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 rounded-md flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 flex items-center justify-center rounded-lg text-orange-600 mb-2 md:mb-3">
              <BookOpen className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Education</h3>
            <p className="text-gray-600 text-xs md:text-sm">Providing quality education and learning opportunities to help children build brighter futures.</p>
          </motion.div>
          
          <motion.div className="bg-white p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 mb-2 md:mb-3">
              <Shield className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Protection</h3>
            <p className="text-gray-600 text-xs md:text-sm">Ensuring children's safety, rights, and wellbeing through comprehensive protection programs.</p>
          </motion.div>
          
          <motion.div className="bg-white p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
              <Users className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Community</h3>
            <p className="text-gray-600 text-xs md:text-sm">Building stronger communities that support and nurture children's growth and development.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
