
import { motion } from "framer-motion";
import { Clock, Users, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VolunteerOpportunitiesPreview = () => {
  const opportunities = [
    {
      title: "Teaching Assistant",
      commitment: "4 hours/week",
      description: "Help children with homework and reading skills",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Meal Preparation",
      commitment: "2 hours/week",
      description: "Assist in preparing nutritious meals for children",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Event Coordinator",
      commitment: "Flexible",
      description: "Help organize and run community events",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our mission and make a direct impact in children's lives through volunteering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${opportunity.color} rounded-full flex items-center justify-center mb-4`}>
                    {opportunity.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{opportunity.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    {opportunity.commitment}
                  </div>
                  <p className="text-gray-600 text-sm">{opportunity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/volunteer">
            <Button variant="outline" size="lg">
              Learn More About Volunteering
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesPreview;
