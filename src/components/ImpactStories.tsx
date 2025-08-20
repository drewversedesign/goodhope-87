import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import DonationModal from "@/components/DonationModal";

const ImpactStories = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  const stories = [
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

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Impact Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Transforming Lives, One Child at a Time
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Read the inspiring stories of children, families, and supporters whose lives have been transformed through our programs. 
              These stories represent the hundreds of children we've been privileged to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{story.name}</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Support Creates Stories Like These</h3>
              <p className="text-gray-700 mb-6">
                Every donation, every prayer, every volunteer hour contributes to changing a child's life. 
                When you support Good Hope Ministries, you become part of these transformation stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleDonateClick}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Donate Now
                </button>
                <Link to="/volunteer">
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Volunteer With Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default ImpactStories;
