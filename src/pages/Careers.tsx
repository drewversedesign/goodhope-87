
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Phone, Users, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from '@/components/SEO';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyForJob = (jobTitle: string) => {
    redirectToWhatsApp("volunteer", `Hello, I would like to apply for the ${jobTitle} position at Good Hope Ministries. Can you please provide me with more information about the application process and requirements?`);
  };
  
  const opportunities = [
    {
      title: "Program Coordinator",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Lead our education and community outreach programs, working directly with children and families.",
      requirements: ["Degree in Social Work, Education, or related field", "Experience working with children", "Fluent in English and Luganda"],
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Education Specialist",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Develop and implement educational curricula for children of different ages and learning needs.",
      requirements: ["Teaching qualification", "Curriculum development experience", "Passion for child development"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Child Protection Officer",
      type: "Full-time",
      location: "Multiple locations",
      description: "Ensure the safety and wellbeing of children in our programs, conducting assessments and follow-ups.",
      requirements: ["Background in child protection", "Strong assessment skills", "Trauma-informed care training"],
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    }
  ];
  
  return (
    <PageLayout>
      <SEO 
        title="Careers - Good Hope Ministries" 
        description="Join our team and make a difference in children's lives. Explore career opportunities at Good Hope Ministries in Uganda."
        keywords={['ministry jobs Uganda', 'children ministry careers', 'NGO jobs Uganda', 'charity work opportunities']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              Join Our Mission
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-4"
              >
                Are you passionate about transforming children's lives? Join our dedicated team working to create lasting change in Uganda's communities.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-600 mb-12"
              >
                We welcome both experienced professionals and passionate individuals starting their journey in child welfare and community development.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: "Meaningful Impact",
                      description: "See the direct results of your work in children's transformed lives every day."
                    },
                    {
                      title: "Professional Growth",
                      description: "Develop skills in child welfare, community development, and program management."
                    },
                    {
                      title: "Supportive Team",
                      description: "Work alongside passionate colleagues who share your commitment to children's wellbeing."
                    }
                  ].map((benefit, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-8">Current Opportunities</h2>
                <div className="space-y-6">
                  {opportunities.map((job, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className={`w-12 h-12 ${job.color} rounded-lg flex items-center justify-center mr-4`}>
                              {job.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{job.title}</h3>
                              <div className="flex items-center text-gray-600 text-sm">
                                <span className="mr-4">{job.type}</span>
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleApplyForJob(job.title)}
                            className="bg-orange-500 hover:bg-orange-600"
                          >
                            Apply Now
                          </Button>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="text-gray-600 text-sm space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                <h3 className="font-bold text-xl mb-6">Contact Our HR Team</h3>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
                      alt="HR Team"
                      className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900">Grace Nambi</h3>
                    <p className="text-gray-600 mb-4">HR & Operations Manager</p>
                    <div className="flex flex-col space-y-3">
                      <a href="mailto:hr@kaweesaministry.org" className="flex items-center text-gray-700 hover:text-orange-600">
                        <Mail className="w-5 h-5 mr-2" />
                        hr@kaweesaministry.org
                      </a>
                       <a href="tel:+256790281993" className="flex items-center text-gray-700 hover:text-orange-600">
                         <Phone className="w-5 h-5 mr-2" />
                         +256 790 281 993
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
