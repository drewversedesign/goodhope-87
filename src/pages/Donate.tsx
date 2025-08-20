
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Heart, Users, BookOpen, Utensils, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';
import DonationModal from '@/components/DonationModal';

const Donate = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const donationOptions = [
    {
      amount: "$25",
      description: "Provides school supplies for one child for a month",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      amount: "$50",
      description: "Feeds a child nutritious meals for one month",
      icon: <Utensils className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      amount: "$100",
      description: "Covers medical care and health screenings for one child",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-red-100 text-red-600"
    },
    {
      amount: "$200",
      description: "Sponsors a child's education for one term",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];
  
  const handleDonationClick = (amount?: string) => {
    setSelectedAmount(amount || '');
    setIsDonationModalOpen(true);
  };
  
  return (
    <PageLayout>
      <SEO 
        title="Donate - Good Hope Ministries" 
        description="Make a difference in a child's life. Your donation helps provide education, healthcare, nutrition, and protection for vulnerable children in Uganda."
        keywords={['donate to children', 'Uganda charity donation', 'sponsor a child', 'children ministry donation']}
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
              <h1 className="text-4xl font-bold mb-6">Make a Difference Today</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your generous donation directly transforms the lives of vulnerable children in Uganda. 
                Every contribution, no matter the size, creates hope and opens doors to brighter futures.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {donationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{option.amount}</h3>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      <Button 
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        onClick={() => handleDonationClick(option.amount)}
                      >
                        Donate {option.amount}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center mb-16"
            >
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Monthly Sponsorship</h2>
              <p className="text-xl mb-6 text-orange-100">
                Become a monthly sponsor and provide ongoing support for a child's education, healthcare, and wellbeing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">$30/month</div>
                  <div className="text-orange-100">Basic Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$50/month</div>
                  <div className="text-orange-100">Full Sponsorship</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$100/month</div>
                  <div className="text-orange-100">Family Support</div>
                </div>
              </div>
              <Button 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => handleDonationClick()}
              >
                Start Monthly Sponsorship
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Your Donation Matters</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Direct Impact:</strong> 100% of program donations go directly to helping children</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Transparency:</strong> Regular updates and reports on how your donation is used</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Local Impact:</strong> Supporting communities in Uganda with sustainable solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Long-term Change:</strong> Creating lasting transformation in children's lives</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4">Other Ways to Give</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Mobile Money (Uganda)</h4>
                    <p className="text-gray-600 text-sm">MTN: 0790281993 | Airtel: 0746472388</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">In-Kind Donations</h4>
                    <p className="text-gray-600 text-sm">School supplies, medical equipment, clothing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Corporate Partnerships</h4>
                    <p className="text-gray-600 text-sm">Partner with us for sustained impact</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fundraising Events</h4>
                    <p className="text-gray-600 text-sm">Organize events in your community</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg"
                onClick={() => handleDonationClick()}
              >
                Make a Custom Donation
              </Button>
              <p className="text-gray-600 mt-4">
                Have questions about donating? <Link to="/contact" className="text-orange-600 hover:underline">Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
        amount={selectedAmount}
      />
    </PageLayout>
  );
};

export default Donate;
