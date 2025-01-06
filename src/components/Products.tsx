import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Икра кеты",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "3,900 ₽",
  },
  {
    id: 2,
    name: "Икра горбуши",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "3,500 ₽",
  },
  {
    id: 3,
    name: "Креветки",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "1,200 ₽",
  },
  {
    id: 4,
    name: "Устрицы",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "2,800 ₽",
  },
];

export const Products = () => {
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
          Наш ассортимент
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-rich mb-2">{product.name}</h3>
                <p className="text-primary text-lg font-bold">{product.price}</p>
                <button className="mt-4 w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90 transition-colors">
                  В корзину
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};