import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Высокое качество продукции",
  "Свежие морепродукты",
  "Быстрая доставка",
  "Удобная оплата",
];

export const About = () => {
  return (
    <section className="py-20 bg-rich text-pearl">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg mb-8">
              Мы специализируемся на поставке премиальной красной икры и морепродуктов высшего качества. 
              Наша миссия - доставить изысканные дары моря прямо к вашему столу.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <Check className="text-secondary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
              alt="About us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};