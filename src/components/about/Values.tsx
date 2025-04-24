import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Users, 
  Lightbulb
} from 'lucide-react';

const Values: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Shield size={48} className="text-primary-600" />,
      title: t('about.values.integrity'),
      description: t('about.values.integrityDesc'),
    },
    {
      icon: <Award size={48} className="text-primary-600" />,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc'),
    },
    {
      icon: <Users size={48} className="text-primary-600" />,
      title: t('about.values.collaboration'),
      description: t('about.values.collaborationDesc'),
    },
    {
      icon: <Lightbulb size={48} className="text-primary-600" />,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc'),
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">{t('about.values.title')}</h2>
          <p className="text-lg text-gray-600">
            Our core values guide everything we do and how we work with our clients.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="card p-8 text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;