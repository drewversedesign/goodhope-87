import React, { useState } from "react";
import { Heart, Users, Gift, HandHeart, Calendar, Megaphone, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DonationModal from "@/components/DonationModal";
import { redirectToWhatsApp } from "@/utils/whatsappHelper";

const HowToHelp = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>('');

  const handleDonateClick = (amount?: string) => {
    setSelectedAmount(amount || '');
    setIsDonationModalOpen(true);
  };

  const ways = [
    {
      icon: Heart,
      title: "Monthly Sponsorship",
      description: "Sponsor a child's education, health, and basic needs with a monthly commitment starting from $30.",
      action: "Sponsor a Child",
      color: "bg-red-100 text-red-600",
      onClick: () => redirectToWhatsApp("sponsor")
    },
    {
      icon: Gift,
      title: "One-Time Donation",
      description: "Make a single donation to support our programs and help us reach more children in need.",
      action: "Donate Now",
      color: "bg-blue-100 text-blue-600",
      onClick: () => handleDonateClick()
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and directly impact children's lives through your skills and time.",
      action: "Join Our Team",
      color: "bg-green-100 text-green-600",
      onClick: () => redirectToWhatsApp("volunteer")
    },
    {
      icon: HandHeart,
      title: "Partnership",
      description: "Partner with us as an organization, church, or business to amplify our impact in communities.",
      action: "Become a Partner",
      color: "bg-purple-100 text-purple-600",
      onClick: () => redirectToWhatsApp("partner")
    },
    {
      icon: Calendar,
      title: "Fundraising Events",
      description: "Organize or participate in fundraising events to raise awareness and funds for our cause.",
      action: "Plan an Event",
      color: "bg-orange-100 text-orange-600",
      onClick: () => redirectToWhatsApp("event")
    },
    {
      icon: Megaphone,
      title: "Spread the Word",
      description: "Help us reach more people by sharing our mission on social media and in your community.",
      action: "Share Our Story",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Get Involved
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How You Can Make a Difference
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              There are many ways to support our mission and help transform children's lives. 
              Whether through donations, volunteering, or partnerships, every contribution matters.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-6 mb-16">
            {ways.map((way, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <CardContent className="p-3 md:p-6 text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${way.color} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4`}>
                    <way.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-3 text-gray-900">{way.title}</h3>
                  <p className="text-gray-600 mb-2 md:mb-4 leading-relaxed text-xs md:text-base line-clamp-3 md:line-clamp-none">{way.description}</p>
                  <button 
                    onClick={way.onClick || (() => {})}
                    className="px-2 md:px-4 py-1 md:py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-xs md:text-sm flex items-center justify-center mx-auto"
                  >
                    {way.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Lives?</h3>
                <p className="text-green-100 mb-6">
                  Join hundreds of supporters who are already making a difference in children's lives. 
                  Your contribution, no matter the size, creates lasting impact.
                </p>
                <div className="space-y-2 text-green-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                    <span>100% of donations go directly to programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                    <span>Monthly updates on your impact</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                    <span>Tax-deductible receipts provided</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Start Making a Difference Today</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => handleDonateClick("30")}
                    className="w-full py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center"
                  >
                    Donate $30/month - Sponsor a Child
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDonateClick()}
                    className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center"
                  >
                    Make a One-Time Donation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => redirectToWhatsApp("volunteer")}
                    className="w-full py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                  >
                    Learn About Volunteering
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
        amount={selectedAmount}
      />
    </>
  );
};

export default HowToHelp;
