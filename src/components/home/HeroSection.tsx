import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-navy to-navy-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-6 text-accent-300"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('hero.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Link to="/contact">
              <Button variant="accent" size="lg">
                {t('hero.cta')}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="bg-white bg-opacity-10 border-white text-white hover:bg-opacity-20">
                {t('common.learnMore')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
          <path 
            fill="currentColor" 
            fillOpacity="0.1" 
            d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,149.3C672,149,768,171,864,170.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
