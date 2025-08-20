
import { BookOpen, Heart, Users, Utensils, Stethoscope, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Providing school fees, uniforms, books, and educational materials to ensure children can attend and excel in school.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Stethoscope,
      title: "Health & Nutrition",
      description: "Medical care, health screenings, nutrition programs, and health education to keep children healthy and strong.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Heart,
      title: "Child Protection",
      description: "Safeguarding children from abuse, neglect, and exploitation while promoting their rights and wellbeing.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Working with families and communities to create supportive environments for children's development.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Life Skills Training",
      description: "Teaching practical skills, leadership, and character development to prepare children for successful futures.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "Nutritious meals and feeding programs to address malnutrition and support healthy growth.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How We Help Children Thrive
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our comprehensive programs address the diverse needs of children, providing holistic support 
            for their physical, emotional, educational, and spiritual development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                  <program.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Making a Real Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">90+</div>
              <div className="text-orange-100">Children Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-orange-100">Communities Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-orange-100">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
