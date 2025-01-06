import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-rich text-pearl py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">ООО "ИКОРНЫЙ"</h3>
            <p className="text-pearl/80">
              ИНН: 773 334 06 42<br />
              КПП: 772 801 001<br />
              ОГРН: 119 774 632 20 36
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Главная</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Каталог</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Контакты</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right"
          >
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p className="text-pearl/80">
              Телефон: +7 (XXX) XXX-XX-XX<br />
              Email: info@ikorny.ru<br />
              Адрес: г.Москва, ул.Гарибальди, д.24
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-pearl/20 text-center text-pearl/60"
        >
          <p>&copy; 2024 ООО "ИКОРНЫЙ". Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
};