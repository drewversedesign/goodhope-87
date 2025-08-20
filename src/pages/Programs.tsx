
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Shield, Users, Utensils, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Education Support & Scholarships",
      description: "Providing quality education opportunities, school supplies, uniforms, and scholarships to children from vulnerable families.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
      benefits: ["School fees coverage", "Learning materials", "Uniforms and supplies", "After-school tutoring"],
      served: "30+ children"
    },
    {
      id: 2,
      title: "Health & Nutrition Programs",
      description: "Ensuring children receive proper healthcare, regular health screenings, and nutritious meals for healthy development.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-red-100 text-red-600",
      benefits: ["Regular health checkups", "Nutritious daily meals", "Vaccination programs", "Health education"],
      served: "45+ children"
    },
    {
      id: 3,
      title: "Child Protection Services",
      description: "Creating safe environments and protecting children from abuse, exploitation, and harmful situations.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
      benefits: ["Safe shelter programs", "Counseling services", "Legal protection", "Emergency response"],
      served: "15+ children"
    },
    {
      id: 4,
      title: "Family Empowerment Initiatives",
      description: "Supporting families with skills training, microfinance, and resources to become self-reliant and stable.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
      benefits: ["Skills training", "Microfinance loans", "Parenting support", "Income generation"],
      served: "25+ families"
    },
    {
      id: 5,
      title: "Emergency Assistance",
      description: "Providing immediate support during crises, natural disasters, and urgent family situations.",
      icon: <Utensils className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      benefits: ["Emergency food aid", "Temporary shelter", "Medical emergency support", "Crisis intervention"],
      served: "20+ families"
    },
    {
      id: 6,
      title: "Vocational Training",
      description: "Equipping older children and youth with practical skills for employment and entrepreneurship.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-indigo-100 text-indigo-600",
      benefits: ["Technical skills training", "Business mentorship", "Job placement support", "Entrepreneurship guidance"],
      served: "12+ youth"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Our Programs - Good Hope Ministries" 
        description="Discover our comprehensive programs supporting children in Uganda through education, health, protection, and family empowerment initiatives."
        keywords={['children programs', 'education support', 'child protection', 'family empowerment', 'Uganda charity programs']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Programs
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive support systems designed to nurture, protect, and empower children and families in Uganda
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mb-4`}>
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">What We Provide:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {program.served}
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-6 text-orange-100">
            Your support helps us expand these vital programs and reach more children in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate" 
              className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Support Our Programs
            </Link>
            <Link 
              to="/sponsor-child" 
              className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold border border-orange-400"
            >
              Sponsor a Child
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Programs;
