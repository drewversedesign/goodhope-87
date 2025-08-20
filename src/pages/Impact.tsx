
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Users, BookOpen, Heart, Home, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import SEO from '@/components/SEO';

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const impactStats = [
    {
      number: "90+",
      label: "Children Supported",
      description: "Direct beneficiaries of our programs",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "4",
      label: "Communities Served",
      description: "Across rural and urban Uganda",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      number: "95%",
      label: "School Enrollment",
      description: "Of children in our education program",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      number: "45+",
      label: "Families Empowered",
      description: "Through economic support programs",
      icon: <Home className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];
  
  return (
    <PageLayout>
      <SEO 
        title="Our Impact - Good Hope Ministries" 
        description="See the real impact of our work with children and families in Uganda. Success stories, statistics, and testimonials from our programs."
        keywords={['children ministry impact', 'Uganda charity results', 'success stories', 'program outcomes']}
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
              <h1 className="text-4xl font-bold mb-6">Our Impact</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how your support is transforming lives and building stronger communities 
                across Uganda. Every number represents a child whose life has been changed.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {stat.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                      <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                      <p className="text-gray-600 text-sm">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8">Program Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education Program</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 95% of children improved their reading skills</li>
                    <li>• 88% showed significant academic improvement</li>
                    <li>• 92% school attendance rate</li>
                    <li>• 15 children received scholarships for higher education</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Health & Nutrition</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 78% reduction in malnutrition cases</li>
                    <li>• 500+ children received health screenings</li>
                    <li>• 100% vaccination coverage in program areas</li>
                    <li>• 25 children received specialized medical care</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Family Empowerment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 150 families started small businesses</li>
                    <li>• 200% average increase in family income</li>
                    <li>• 85% of families achieved food security</li>
                    <li>• 50 mothers completed skills training</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Child Protection</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30 children removed from dangerous situations</li>
                    <li>• 100% of cases followed up regularly</li>
                    <li>• 45 families reunified successfully</li>
                    <li>• 12 children placed in loving foster homes</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Be Part of Our Growing Impact</h2>
              <p className="text-gray-600 mb-6">
                Join us in creating even more success stories and transforming more lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Donate Now
                </Link>
                <Link to="/volunteer" className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Impact;
