import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import DonationModal from "@/components/DonationModal";
import { redirectToWhatsApp } from "@/utils/whatsappHelper";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: email,
        message: `New newsletter subscription request from the Good Hope Ministries website.`,
        to_name: 'Good Hope Ministries Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Good Hope Ministries</h3>
              <p className="text-gray-300 mb-6">
                Transforming lives through love and care. We are dedicated to nurturing, protecting, and empowering children in Uganda through comprehensive programs that address their educational, health, and developmental needs.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                  <span>Kampala, Uganda</span>
                </div>
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-orange-400" />
                  <span>info@kaweesaministry.org</span>
                </button>
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-orange-400" />
                  <span>+256 790 281 993</span>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Get Involved</h3>
              <ul className="space-y-3 mb-6">
                <li><Link to="/donate" className="text-gray-300 hover:text-orange-400 transition-colors">Make a Donation</Link></li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("sponsor")}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Sponsor a Child
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("volunteer")}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Volunteer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("event")}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Upcoming Events
                  </button>
                </li>
              </ul>
              <Button 
                onClick={handleDonateClick}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
              >
                Donate Now
              </Button>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Learn More</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-orange-400 transition-colors">Our Programs</Link></li>
                <li><Link to="/impact" className="text-gray-300 hover:text-orange-400 transition-colors">Our Impact</Link></li>
                <li><Link to="/testimonials" className="text-gray-300 hover:text-orange-400 transition-colors">Success Stories</Link></li>
                <li><Link to="/resources" className="text-gray-300 hover:text-orange-400 transition-colors">Resources</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Good Hope Ministries. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Registration Number: 80020080436892 | Company Limited by Guarantee
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default Footer;
