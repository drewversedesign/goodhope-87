import { Heart, Users, Target, Globe } from "lucide-react";

const AboutMinistry = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            About Our Ministry
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Good Hope Ministries is a registered foundation in Uganda dedicated to transforming the lives of children through comprehensive care, education, and community development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic care, quality education, and protection for children in Uganda, 
                empowering them to reach their full potential and become productive members of society.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A Uganda where every child has access to quality education, healthcare, protection, 
                and opportunities to thrive in a nurturing and supportive environment.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Heart className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Love & Compassion</h4>
                  <p className="text-gray-600 text-sm">Treating every child with unconditional love and understanding</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community Partnership</h4>
                  <p className="text-gray-600 text-sm">Working together with families and communities for sustainable impact</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Excellence</h4>
                  <p className="text-gray-600 text-sm">Committed to providing the highest quality programs and services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-orange liquid-morph liquid-depth glass-ripple relative rounded-2xl p-8 text-center backdrop-blur-12 border border-orange-300/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Registration Details</h3>
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
      </div>
    </section>
  );
};

export default AboutMinistry;
