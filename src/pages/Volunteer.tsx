
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Users, BookOpen, Heart, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const volunteerOpportunities = [
    {
      title: "Education Support",
      description: "Help teach children, assist with homework, and support literacy programs",
      icon: <BookOpen className="w-8 h-8" />,
      requirements: ["Love for children", "Basic literacy skills", "Patience and compassion"],
      commitment: "4+ hours per week",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Community Outreach",
      description: "Visit families, assess needs, and connect them with available resources",
      icon: <Users className="w-8 h-8" />,
      requirements: ["Good communication skills", "Cultural sensitivity", "Transportation"],
      commitment: "6+ hours per week",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Healthcare Support",
      description: "Assist with health screenings, basic first aid, and health education",
      icon: <Heart className="w-8 h-8" />,
      requirements: ["Basic health training", "Care for others", "Attention to detail"],
      commitment: "8+ hours per week",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "International Volunteers",
      description: "Long-term volunteers from abroad to support various programs",
      icon: <Globe className="w-8 h-8" />,
      requirements: ["Relevant skills/education", "Cultural adaptability", "Long-term commitment"],
      commitment: "3+ months",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const handleApplyForRole = (roleTitle: string) => {
    redirectToWhatsApp("volunteer", `Hello, I would like to apply for the ${roleTitle} volunteer position at Good Hope Ministries. Can you please provide me with more information about the application process?`);
  };

  const handleStartApplication = () => {
    redirectToWhatsApp("volunteer");
  };

  const handleLearnAboutTraining = () => {
    redirectToWhatsApp("volunteer", "Hello, I would like to learn more about the volunteer training program at Good Hope Ministries. Can you please provide me with details about the training process and requirements?");
  };
  
  return (
    <PageLayout>
      <SEO 
        title="Volunteer - Good Hope Ministries" 
        description="Join our mission to transform children's lives in Uganda. Volunteer opportunities in education, healthcare, community outreach, and more."
        keywords={['volunteer Uganda', 'children ministry volunteer', 'volunteer opportunities', 'help children Uganda']}
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
              <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of transforming children's lives in Uganda. Your time, skills, and passion 
                can make a lasting difference in our communities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${opportunity.color} rounded-full flex items-center justify-center mb-4`}>
                        {opportunity.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {opportunity.requirements.map((req, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-700">Time Commitment: </span>
                        <span className="text-sm text-orange-600 font-semibold">{opportunity.commitment}</span>
                      </div>
                      
                      <Button 
                        onClick={() => handleApplyForRole(opportunity.title)}
                        className="w-full bg-orange-500 hover:bg-orange-600"
                      >
                        Apply for This Role
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
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-16"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Volunteer Training Program</h2>
                <p className="text-xl mb-6 text-orange-100">
                  All volunteers receive comprehensive training to ensure effective and safe interactions with children and families.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40 hours</div>
                    <div className="text-orange-100">Initial Training</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">Monthly</div>
                    <div className="text-orange-100">Ongoing Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">Certificate</div>
                    <div className="text-orange-100">Upon Completion</div>
                  </div>
                </div>
                <Button 
                  onClick={handleLearnAboutTraining}
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  Learn About Training
                </Button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Volunteer With Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Make Real Impact:</strong> See the direct results of your work in children's lives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Professional Development:</strong> Gain valuable experience and skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Community:</strong> Join a passionate team of like-minded individuals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Support:</strong> Comprehensive training and ongoing mentorship</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold">Submit Application</h4>
                      <p className="text-gray-600 text-sm">Complete our online volunteer application form</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold">Background Check</h4>
                      <p className="text-gray-600 text-sm">Safety screening for all volunteers working with children</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold">Interview & Training</h4>
                      <p className="text-gray-600 text-sm">Meet with staff and complete required training</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold">Start Volunteering</h4>
                      <p className="text-gray-600 text-sm">Begin making a difference in children's lives</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleStartApplication}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-lg"
              >
                Start Your Application
              </Button>
              <p className="text-gray-600 mt-4">
                Questions about volunteering? <Link to="/contact" className="text-orange-600 hover:underline">Contact our volunteer coordinator</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Volunteer;
