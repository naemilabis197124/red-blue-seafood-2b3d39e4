import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Caviar background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rich/40" />
      </div>
      
      <div className="container relative z-10 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-pearl mb-6"
        >
          Премиальная икра и морепродукты
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-pearl-dark mb-8 max-w-2xl mx-auto"
        >
          Изысканный вкус моря, доставленный прямо к вашему столу
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary px-8 py-4 text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Смотреть каталог
        </motion.button>
      </div>
    </section>
  );
};