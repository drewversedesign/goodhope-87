
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, Heart } from 'lucide-react';
import { motion } from "framer-motion";
import SEO from '@/components/SEO';
import QuickImpactStats from '@/components/QuickImpactStats';

const Testimonials = () => {
  const beneficiaryStories = [
    {
      name: "Auntie Rose",
      age: 11,
      story: "Devine lost her whole family and was abandoned even by relatives. I opened my home to her, but I couldn't provide what she truly needed. Good Hope Ministries filled in that gap — school fees, books, meals, and most importantly, love. She now smiles again.",
      program: "Guardian of Devine",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
    },
    {
      name: "James",
      age: 8,
      story: "Tom was left all alone after his parents died. I found him wandering the streets and brought him home, though we have so little ourselves. Good Hope Ministries has been a lifeline. They've given Tom clothes, meals, and an education. I never thought someone would care for him like their own child.",
      program: "Guardian of Tom",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
    },
    {
      name: "Grace",
      age: 10,
      story: "When my sister and her husband passed away from COVID-19, I took in little Racheal with no idea how I would care for her. The support from Good Hope Ministries gave her not just food and schooling, but also hope. She now dreams of becoming an artist. I thank God every day for the people who stand with children like Racheal.",
      program: "Guardian of Racheal",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
    }
  ];

  const volunteerStories = [
    {
      name: "David Mukasa",
      role: "Local Volunteer",
      story: "Volunteering with Good Hope Ministries has changed my perspective on community service. Seeing the smiles on children's faces when they receive support motivates me every day.",
      duration: "2 years volunteering"
    },
    {
      name: "Emma Thompson",
      role: "International Volunteer",
      story: "I came to Uganda for a short-term volunteer program and ended up staying for six months. The work Good Hope Ministries does is truly transformational.",
      duration: "6 months in Uganda"
    },
    {
      name: "Peter Ssebunya",
      role: "Skills Trainer",
      story: "Teaching vocational skills to older children gives them hope for the future. Many of my students now have their own small businesses.",
      duration: "4 years trainer"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Testimonials - Good Hope Ministries" 
        description="Read inspiring stories from children, families, sponsors, and volunteers whose lives have been transformed through our ministry programs."
        keywords={['success stories', 'testimonials', 'child sponsorship stories', 'volunteer experiences', 'transformation stories']}
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Stories of Transformation
            </motion.h1>
            <motion.p 
              className="text-xl text-yellow-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hear from the children, families, sponsors, and volunteers whose lives have been transformed through our ministry
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Children's Success Stories</h2>
          
          {/* Add QuickImpactStats component here */}
          <QuickImpactStats />
          
          {/* Impact Stories Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Impact Stories
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Transforming Lives, One Child at a Time
              </h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Read the inspiring stories of children, families, and supporters whose lives have been transformed through our programs. 
                These stories represent the hundreds of children we've been privileged to serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficiaryStories.map((story, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">{story.name}</h4>
                        <p className="text-gray-600">Age {story.age}</p>
                        <div className="text-sm text-orange-600 font-medium">{story.program}</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-orange-200" />
                      <p className="text-gray-700 italic leading-relaxed pl-6">
                        "{story.story}"
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Verified Impact Story</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold mb-4 text-gray-900">Your Support Creates Stories Like These</h4>
                <p className="text-gray-700 mb-6">
                  Every donation, every prayer, every volunteer hour contributes to changing a child's life. 
                  When you support Good Hope Ministries, you become part of these transformation stories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    Donate Now
                  </Button>
                  <Button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Volunteer With Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Volunteer Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerStories.map((volunteer, index) => (
              <Card key={index} className="p-6 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{volunteer.name}</h4>
                  <p className="text-sm text-green-600 font-medium mb-3">{volunteer.role}</p>
                  <p className="text-gray-700 text-sm mb-4">"{volunteer.story}"</p>
                  <p className="text-xs text-gray-500">{volunteer.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Star className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-6 text-yellow-100">
            Join the thousands of people who have already made a difference. Your story of impact could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              Sponsor a Child
            </Button>
            <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600 font-semibold">
              Become a Volunteer
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Testimonials;
