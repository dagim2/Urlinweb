import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  isReversed?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  image,
  benefits,
  isReversed = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isReversed ? 30 : -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className={isReversed ? 'lg:order-2' : ''}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold mb-4"
              variants={itemVariants}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            <motion.ul className="space-y-3" variants={containerVariants}>
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <CheckCircle size={20} className="text-primary-600 mr-2 flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            className={isReversed ? 'lg:order-1' : ''}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;