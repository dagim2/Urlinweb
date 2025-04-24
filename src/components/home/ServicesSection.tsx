import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Scale, 
  TrendingUp, 
  Handshake 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Briefcase size={40} className="text-primary-600" />,
      title: t('services.management.title'),
      description: t('services.management.description'),
    },
    {
      icon: <Scale size={40} className="text-primary-600" />,
      title: t('services.legal.title'),
      description: t('services.legal.description'),
    },
    {
      icon: <TrendingUp size={40} className="text-primary-600" />,
      title: t('services.business.title'),
      description: t('services.business.description'),
    },
    {
      icon: <Handshake size={40} className="text-primary-600" />,
      title: t('services.negotiation.title'),
      description: t('services.negotiation.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="section bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 mb-6">
            {t('services.description')}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card p-6 hover:translate-y-[-8px] group"
            >
              <div className="mb-5 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                {t('common.learnMore')} 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/services">
            <Button variant="primary" size="lg">
              {t('common.readMore')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;