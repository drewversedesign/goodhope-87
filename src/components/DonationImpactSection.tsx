import { motion } from "framer-motion";
import { BookOpen, Heart, Home, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonationImpactSection = () => {
  const donationTiers = [
    {
      amount: "$10",
      impact: "Provides school supplies for 1 child for 2 months",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      amount: "$25",
      impact: "Feeds 3 children nutritious meals for a week",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    },
    {
      amount: "$50",
      impact: "Covers basic healthcare for 1 child for 2 months",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      amount: "$100",
      impact: "Supports a family with skills training for 1 month",
      icon: <Home className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Your Donation Creates Real Impact</h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-lg">
            See exactly how your generosity transforms lives and builds stronger communities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-3 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-3">{tier.amount}</h3>
                  <p className="text-white/90 text-xs md:text-sm line-clamp-3 md:line-clamp-none">{tier.impact}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/donate">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Make a Donation Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonationImpactSection;
