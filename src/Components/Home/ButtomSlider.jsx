/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const items = [
  {
    img: "https://i.postimg.cc/8C7s0Nbs/SVG.png",
    title: "Payment only online",
    description: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    img: "https://i.postimg.cc/Gmh4vk8F/SVG-1.png",
    title: "New stocks and sales",
    description: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
  {
    img: "https://i.postimg.cc/bwCsgskK/SVG-2.png",
    title: "Quality assurance",
    description: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
  },
];

// Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ButtomSlider = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md mt-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // animate every time scroll into view
      variants={containerVariants}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex items-start gap-4"
          variants={itemVariants}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-16 h-16 mt-6 object-contain"
          />
          <div>
            <h3 className="text-lg font-bold text-[#030712]">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ButtomSlider;
