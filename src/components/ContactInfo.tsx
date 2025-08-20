
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-gray-100 relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our programs or want to get involved? Reach out to our team and let's discuss how you can help transform children's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ministry Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call or WhatsApp</h3>
              <p className="text-gray-600 mb-4">Direct contact for immediate assistance</p>
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +256 790 281 993
                </button>
              </div>
            </div>
          </div>

          {/* Email Contact */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us detailed inquiries</p>
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  goodhopeministries113@gmail.com
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-2">Kampala, Uganda</p>
              <p className="text-gray-500 text-sm">P.O. Box 12345, Central Division</p>
            </div>
            <button 
              onClick={() => redirectToWhatsApp("general")}
              className="mt-4 md:mt-0 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
