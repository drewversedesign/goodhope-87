

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target, Shield, BookOpen, Handshake } from 'lucide-react';

const ValuesApproach = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love & Compassion",
      description: "Every child deserves unconditional love and care. We approach each situation with empathy and understanding.",
      color: "bg-red-100 text-red-600 border-red-200"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Partnership",
      description: "We work hand-in-hand with families and local communities to create sustainable, lasting change.",
      color: "bg-blue-100 text-blue-600 border-blue-200"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Holistic Development",
      description: "We address the complete needs of children - education, health, protection, and emotional well-being.",
      color: "bg-green-100 text-green-600 border-green-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Child Protection",
      description: "Creating safe environments where children can grow, learn, and thrive without fear or harm.",
      color: "bg-purple-100 text-purple-600 border-purple-200"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Quality Education",
      description: "Providing access to excellent educational opportunities that unlock every child's potential.",
      color: "bg-orange-100 text-orange-600 border-orange-200"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Transparency & Trust",
      description: "Building lasting relationships through honest communication and accountable stewardship.",
      color: "bg-teal-100 text-teal-600 border-teal-200"
    }
  ];

  const approaches = [
    {
      step: "01",
      title: "Community Assessment",
      description: "We start by understanding the unique needs and challenges of each community we serve."
    },
    {
      step: "02", 
      title: "Collaborative Planning",
      description: "Working with local leaders and families to develop tailored programs that address specific needs."
    },
    {
      step: "03",
      title: "Implementation & Support",
      description: "Delivering comprehensive programs while providing ongoing mentorship and resources."
    },
    {
      step: "04",
      title: "Monitoring & Growth",
      description: "Continuously evaluating impact and adapting our approach to ensure sustainable outcomes."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            Our Values & Approach
          </div>
          <h2 className="text-3xl font-bold mb-4">How We Make a Difference</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our work is guided by core values and a proven approach that ensures every child receives the care and support they deserve
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4">
                <CardContent className="p-3 md:p-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${value.color} rounded-xl flex items-center justify-center mb-2 md:mb-4 border-2`}>
                    {value.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Our Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Four-Step Approach</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              A systematic methodology that ensures sustainable impact and meaningful change in every community we serve
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg mx-auto mb-2 md:mb-4">
                    {approach.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-base">{approach.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{approach.description}</p>
                </div>
                {index < approaches.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Us in Our Mission</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              When you partner with us, you become part of a community dedicated to transforming lives through love, care, and sustainable support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Support Our Work
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-medium">
                Learn More About Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesApproach;

