import { motion } from "framer-motion";
import { BookOpen, Heart, Shield, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsPreview = () => {
  const programs = [
    {
      title: "Education Support",
      description: "School fees, supplies, and scholarships for quality education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      served: "30+ children",
      image: "/lovable-uploads/27147af8-7d65-44dd-a212-5ab5d61073c9.png",
      activities: ["Scholarships", "School Supplies", "Tutoring Programs"]
    },
    {
      title: "Health & Nutrition",
      description: "Healthcare, meals, and health education programs",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
      served: "45+ children",
      image: "/lovable-uploads/5f2a0b08-6176-4c6a-9b43-f1897db8d0cf.png",
      activities: ["Health Screenings", "Nutrition Programs", "Health Education"]
    },
    {
      title: "Child Protection",
      description: "Safe environments and protection from harm",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      served: "15+ children",
      image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true",
      activities: ["Safe Spaces", "Counseling", "Legal Support"]
    },
    {
      title: "Family Empowerment",
      description: "Skills training and microfinance for families",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      served: "25+ families",
      image: "/lovable-uploads/1aef3f11-afc1-4188-84e6-1b175af029f8.png",
      activities: ["Skills Training", "Microfinance", "Business Support"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Key Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support systems designed to nurture and empower children and families
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className={`w-16 h-16 ${program.color.replace('text-', 'text-white bg-').replace('bg-', 'bg-white/20 ')} rounded-full flex items-center justify-center mx-auto mb-2`}>
                        {program.icon}
                      </div>
                      <p className="text-sm font-medium">View Program Details</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{program.title}</h3>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {program.served}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.activities.map((activity, activityIndex) => (
                        <span 
                          key={activityIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/programs">
            <Button variant="outline" size="lg">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
