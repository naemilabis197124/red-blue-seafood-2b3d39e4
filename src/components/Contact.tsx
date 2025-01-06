import { motion } from "framer-motion";
import { Building2, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-pearl">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-rich text-center mb-12"
        >
          Контакты
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Building2 className="text-primary w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Компания</h3>
                <p className="text-rich/80">
                  Общество с ограниченной ответственностью "ИКОРНЫЙ" (ООО "ИКОРНЫЙ")
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="text-primary w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Реквизиты</h3>
                <p className="text-rich/80">
                  ИНН: 773 334 06 42<br />
                  КПП: 772 801 001<br />
                  ОГРН: 119 774 632 20 36
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
              alt="Location"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};