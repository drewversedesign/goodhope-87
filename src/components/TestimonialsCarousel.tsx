import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Racheal",
      role: "10 years old",
      content: "My name is Racheal. I live with my auntie because my mummy and daddy died. Before, I didn't go to school and we didn't have enough food. Now, Good Hope Ministries gives me food and pays my school fees. I love drawing and I want to be an artist. Thank you for helping me.",
      image: "/lovable-uploads/13b49069-af8e-4704-a066-67143479c138.png"
    },
    {
      name: "Tom",
      role: "8 years old",
      content: "I am Tom. I was left alone when my family died. I used to cry a lot. Now I live with a good uncle, and Good Hope Ministries helps us. I go to school, I eat every day, and I play football with friends. I want to be a teacher one day. Thank you for making me smile again.",
      image: "/lovable-uploads/955416bc-3ab9-473f-a1a5-c76467be4658.png"
    },
    {
      name: "Devine",
      role: "11 years old",
      content: "My name is Devine. I lost my whole family and nobody wanted me. I felt very sad. Then a kind auntie took me in. I now go to school and have books and food because of Good Hope Ministries. I want to become a nurse to help others like me.",
      image: "/lovable-uploads/4894e9c9-e72a-41b8-97f1-21cb157aceb5.png"
    },
    {
      name: "Oliver",
      role: "9 years old",
      content: "My name is Oliver. My mummy died and I had no one. My stepmother died too. I now live with a good lady who takes care of me. Good Hope Ministries gives me school things and clothes. I like singing and I want to be a lawyer. Thank you for helping me learn.",
      image: "/lovable-uploads/f4d8e2af-2c4a-47a6-9a69-fffc94009473.png"
    },
    {
      name: "Aneni Joan",
      role: "10 years old",
      content: "I'm Aneni Joan. I was very sick and had no help after my parents died. Now, I am happy because Good Hope Ministries supports me. I eat, learn, and play with friends. I want to be a doctor. Thank you for loving children like me.",
      image: "/lovable-uploads/9d319820-ff2f-46c4-a479-1cf89731bb0d.png"
    },
    {
      name: "Ronald",
      role: "10 years old",
      content: "My name is Ronald. I didn't have food and school after my parents died. I felt lost. But now, I live with my grandma and Good Hope Ministries helps us. I want to be a footballer and make her proud. Thank you for giving me hope.",
      image: "/lovable-uploads/b49b6853-e71b-4f03-91e9-52b27412d0ea.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Voices of Hope</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear directly from the children whose lives have been transformed through our ministry's love and support
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-2">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div 
                          className="w-24 h-24 bg-cover bg-center rounded-full flex-shrink-0"
                          style={{ backgroundImage: `url('${testimonial.image}')` }}
                        />
                        <div className="flex-1 text-center md:text-left">
                          <Quote className="w-8 h-8 text-orange-500 mb-4 mx-auto md:mx-0" />
                          <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                            "{testimonial.content}"
                          </p>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-orange-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
