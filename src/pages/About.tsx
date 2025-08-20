
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leaders = [
    {
      name: "Basaalidde Allan",
      role: "Founder",
      bio: "Visionary leader dedicated to transforming children's lives",
      image: "https://github.com/drewversedesign/good-hopepics/blob/main/WhatsApp%20Image%202025-08-20%20at%2012.05.55%20PM%20(3).jpeg?raw=true"
    },
    {
      name: "Naluwooza Naema",
      role: "CEO",
      bio: "Executive leader driving organizational growth and impact",
      image: "https://github.com/drewversedesign/good-hopepics/blob/main/WhatsApp%20Image%202025-08-20%20at%2012.17.56%20PM.jpeg?raw=true"
    },
    {
      name: "Nassali Taylor",
      role: "Ambassador",
      bio: "Community advocate and program representative",
      image: "https://github.com/drewversedesign/good-hopepics/blob/main/WhatsApp%20Image%202025-08-20%20at%2012.05.55%20PM%20(4).jpeg?raw=true"
    }
  ];
  
  return (
    <PageLayout>
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
              About Good Hope Ministries
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Good Hope Ministries is a registered foundation in Uganda dedicated to transforming the lives of children through comprehensive care, education, and community development programs.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    To provide holistic care, quality education, and protection for children in Uganda, 
                    empowering them to reach their full potential and become productive members of society.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 mb-6">
                    A Uganda where every child has access to quality education, healthcare, protection, 
                    and opportunities to thrive in a nurturing and supportive environment.
                  </p>
                  <h4 className="text-xl font-bold mb-4">Our Core Values</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Love & Compassion:</strong> Treating every child with unconditional love and understanding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Community Partnership:</strong> Working together with families and communities for sustainable impact</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Excellence:</strong> Committed to providing the highest quality programs and services</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-8">
                  <p className="text-gray-600 mb-4">
                    Founded with a heart for Uganda's most vulnerable children, Good Hope Ministries 
                    began as a grassroots initiative to address the immediate needs of children in our local communities.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Over the years, we have grown from helping a handful of children to supporting hundreds of families 
                    across multiple communities. Our comprehensive approach addresses not just immediate needs but works 
                    to create sustainable, long-term solutions.
                  </p>
                  <p className="text-gray-600">
                    Today, we continue to expand our reach while maintaining our core commitment to treating every child 
                    with dignity, respect, and love. We work closely with local communities, schools, and healthcare 
                    providers to ensure our programs make a lasting impact.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-6">Meet Our Leadership</h3>
                <p className="text-gray-600 mb-8 text-center">
                  Dedicated professionals committed to transforming children's lives through experienced leadership and passionate service
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {leaders.map((leader, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                            <img 
                              src={leader.image} 
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-xl font-bold mb-2">{leader.name}</h4>
                          <p className="text-orange-600 font-medium mb-2">{leader.role}</p>
                          <p className="text-gray-600">{leader.bio}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Registration Details</h2>
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8 border border-orange-200 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Official Registration Information</h3>
                  <p className="text-gray-800 mb-2 font-semibold">
                    <strong className="text-gray-900">Company Registration Number:</strong> 80020080436892
                  </p>
                  <p className="text-gray-800 mb-2 font-semibold">
                    <strong className="text-gray-900">Registered Office:</strong> Kampala, Uganda
                  </p>
                  <p className="text-gray-800 font-semibold">
                    <strong className="text-gray-900">Type:</strong> Company Limited by Guarantee (Non-Profit)
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
                    <h4 className="font-bold text-blue-900 mb-2">Location</h4>
                    <p className="text-blue-800">Kampala, Uganda</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                    <h4 className="font-bold text-green-900 mb-2">Email</h4>
                    <p className="text-green-800">info@kaweesaministry.org</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 text-center">
                    <h4 className="font-bold text-orange-900 mb-2">Phone</h4>
                    <p className="text-orange-800">+256 790 281 993</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/volunteer" className="inline-flex items-center px-5 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all group">
                Join Our Mission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
