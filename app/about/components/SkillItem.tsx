import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  x?: string;
  y?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ 
  name, 
  x, 
  y 
}) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold absolute
      bg-dark text-light dark:bg-light dark:text-dark shadow-dark cursor-pointer
      text-sm xl:text-xl xl:py-4 xl:px-6 lg:py-2 lg:px-4 py-1.5 px-3"
      whileHover= {{ scale: 1.05 }}
      initial={{ x:0, y:0 }}
      whileInView= {{ x:x, y:y, transition: { duration: 1.5}}}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default SkillItem;
