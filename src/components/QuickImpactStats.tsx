
import { motion } from "framer-motion";
import { Users, MapPin, BookOpen, Home, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickImpactStats = () => {
  const stats = [
    {
      number: "90+",
      label: "Children Supported",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "4",
      label: "Communities Served",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      number: "95%",
      label: "School Enrollment",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      number: "45+",
      label: "Families Empowered",
      icon: <Home className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-50">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/90" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact at a Glance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the real difference your support makes in the lives of children and families across Uganda
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/50">
                <CardContent className="p-4 lg:p-6">
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.number}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickImpactStats;
