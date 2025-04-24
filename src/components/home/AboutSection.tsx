import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-semibold text-lg">15+ Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="mb-4">{t('about.title')}</h2>
            <h3 className="text-2xl text-primary-600 mb-6">{t('about.subtitle')}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-3">{t('about.mission.title')}</h4>
              <p className="text-gray-700">
                {t('about.mission.description')}
              </p>
            </div>
            
            <Link to="/about">
              <Button variant="primary">
                {t('common.readMore')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;