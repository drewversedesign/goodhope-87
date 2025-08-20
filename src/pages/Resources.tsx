import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageCircle, BookOpen, BarChart3, Shield, Users } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';

const Resources = () => {
  const handleWhatsAppRequest = (documentName: string) => {
    const message = `Hello, I would like to request ${documentName} from Good Hope Ministries.`;
    const whatsappUrl = `https://wa.me/+256790281993?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const annualReports = [
    {
      year: "2023",
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our programs, achievements, and financial transparency for 2023.",
      pages: "32 pages",
      size: "2.5 MB"
    },
    {
      year: "2022",
      title: "Annual Impact Report 2022",
      description: "Detailed report on our growth, impact stories, and program expansion in 2022.",
      pages: "28 pages",
      size: "2.1 MB"
    },
    {
      year: "2021",
      title: "Annual Impact Report 2021",
      description: "Our resilience during challenges and continued commitment to children's welfare in 2021.",
      pages: "25 pages",
      size: "1.9 MB"
    }
  ];

  const educationalResources = [
    {
      title: "Child Protection Guidelines",
      description: "Essential guidelines for working with vulnerable children and ensuring their safety.",
      type: "PDF Guide",
      size: "1.2 MB"
    },
    {
      title: "Volunteer Handbook",
      description: "Complete guide for volunteers including policies, procedures, and best practices.",
      type: "PDF Handbook",
      size: "3.4 MB"
    },
    {
      title: "Community Development Toolkit",
      description: "Resources for community leaders to support local child welfare initiatives.",
      type: "Resource Kit",
      size: "5.1 MB"
    },
    {
      title: "Educational Support Guide",
      description: "Strategies and resources for supporting children's educational development.",
      type: "PDF Guide",
      size: "2.3 MB"
    }
  ];

  const financialReports = [
    {
      title: "Financial Statement 2023",
      description: "Audited financial statements showing our responsible stewardship of resources.",
      period: "Jan-Dec 2023",
      size: "890 KB"
    },
    {
      title: "Quarterly Report Q4 2023",
      description: "Latest quarterly financial and program performance report.",
      period: "Oct-Dec 2023",
      size: "650 KB"
    },
    {
      title: "Donor Impact Summary",
      description: "Breakdown of how donor contributions are utilized across our programs.",
      period: "2023 Summary",
      size: "1.1 MB"
    }
  ];

  const policyDocuments = [
    {
      title: "Child Safeguarding Policy",
      description: "Our comprehensive policy ensuring the protection and safety of all children in our care.",
      category: "Safeguarding"
    },
    {
      title: "Code of Conduct",
      description: "Standards of behavior expected from all staff, volunteers, and partners.",
      category: "Governance"
    },
    {
      title: "Privacy and Data Protection",
      description: "How we collect, use, and protect personal information of beneficiaries and supporters.",
      category: "Privacy"
    },
    {
      title: "Complaints and Feedback Policy",
      description: "Process for reporting concerns and providing feedback about our services.",
      category: "Governance"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Resources - Good Hope Ministries" 
        description="Access our annual reports, educational materials, financial statements, and policy documents. Transparency and accountability in all our operations."
        keywords={['annual reports', 'financial transparency', 'educational resources', 'child protection policies', 'charity accountability']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resources & Reports
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transparency and accountability through comprehensive reporting, educational materials, and policy documentation
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-blue-500 mr-3" />
            Annual Impact Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{report.year}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{report.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                    <div className="flex justify-between text-xs text-gray-500 mb-4">
                      <span>{report.pages}</span>
                      <span>{report.size}</span>
                    </div>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600"
                      onClick={() => handleWhatsAppRequest(report.title)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-green-500 mr-3" />
            Educational Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{resource.size}</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleWhatsAppRequest(resource.title)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <FileText className="w-8 h-8 text-orange-500 mr-3" />
            Financial Transparency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financialReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{report.period}</span>
                    <span>{report.size}</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    onClick={() => handleWhatsAppRequest(report.title)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
            <Shield className="w-8 h-8 text-purple-500 mr-3" />
            Policies & Procedures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policyDocuments.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      policy.category === 'Safeguarding' ? 'bg-red-100 text-red-700' :
                      policy.category === 'Governance' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {policy.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{policy.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{policy.description}</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleWhatsAppRequest(policy.title)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Users className="w-16 h-16 mx-auto mb-4 text-indigo-200" />
          <h2 className="text-3xl font-bold mb-4">Need Additional Information?</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Can't find what you're looking for? Contact us for specific reports, data, or additional resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
              Contact Us
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold">
              Subscribe to Updates
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Resources;
