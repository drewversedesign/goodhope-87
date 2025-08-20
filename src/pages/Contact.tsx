
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+256 790 281 993", "+256 746 472 388"],
      color: "bg-blue-100 text-blue-600",
      onClick: () => redirectToWhatsApp("general")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@kaweesaministry.org", "programs@kaweesaministry.org"],
      color: "bg-green-100 text-green-600",
      onClick: () => redirectToWhatsApp("general")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Kampala, Uganda", "P.O. Box 12345"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      color: "bg-purple-100 text-purple-600"
    }
  ];
  
  return (
    <PageLayout>
      <SEO 
        title="Contact Us - Good Hope Ministries" 
        description="Get in touch with Good Hope Ministries. Contact us for volunteering, donations, partnerships, or general inquiries."
        keywords={['contact children ministry', 'Uganda charity contact', 'ministry contact information']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We'd love to hear from you. Whether you want to volunteer, make a donation, 
                partner with us, or just learn more about our work, we're here to help.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full text-center hover:shadow-lg transition-shadow duration-300 ${info.onClick ? 'cursor-pointer' : ''}`}
                        onClick={info.onClick}>
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Main Office</h3>
                    <p className="text-gray-600 mb-2">
                      Our main office is located in the heart of Kampala, making it easily accessible 
                      for visitors, volunteers, and partners.
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Address:</strong> Kampala Road, Central Division<br />
                      Kampala, Uganda<br />
                      P.O. Box 12345
                    </p>
                    <p className="text-gray-600">
                      <strong>Public Transport:</strong> Accessible by taxi, boda-boda, and public buses. 
                      Near the main taxi park and central business district.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <button 
                      onClick={() => redirectToWhatsApp("general")}
                      className="w-full flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div className="text-left">
                        <h4 className="font-semibold text-blue-900">General Inquiries</h4>
                        <p className="text-blue-700 text-sm">info@kaweesaministry.org</p>
                      </div>
                    </button>
                    <button 
                      onClick={() => redirectToWhatsApp("general")}
                      className="w-full flex items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-green-600 mr-3" />
                      <div className="text-left">
                        <h4 className="font-semibold text-green-900">Emergency Contact</h4>
                        <p className="text-green-700 text-sm">+256 790 281 993</p>
                      </div>
                    </button>
                    <button 
                      onClick={() => redirectToWhatsApp("programs")}
                      className="w-full flex items-center p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                    >
                      <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                      <div className="text-left">
                        <h4 className="font-semibold text-orange-900">Program Sites</h4>
                        <p className="text-orange-700 text-sm">Multiple locations across Uganda</p>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-xl mb-6 text-orange-100">
                Join our mission to transform children's lives. Every conversation starts with a simple message.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => redirectToWhatsApp("volunteer")}
                  className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Volunteer Today
                </button>
                <Link 
                  to="/donate" 
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold border border-orange-400"
                >
                  Make a Donation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
