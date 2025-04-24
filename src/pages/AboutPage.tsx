import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Team from '../components/about/Team';
import Values from '../components/about/Values';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-24 md:pt-28 bg-navy text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-200 mb-8">{t('about.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Urlina Consulting was founded in 2010 with a clear mission: to provide businesses with strategic guidance and expert consultation that drives real results. What began as a small team of dedicated professionals has grown into a respected consultancy serving clients across various industries.
                </p>
                <p className="text-gray-700 mb-6">
                  Our founder, Mehabub Abawajy, recognized a gap in the market for business consultation services that combined legal expertise with practical business solutions. Drawing from his experience in both corporate law and business management, he assembled a team of professionals who shared his vision for client-centered, results-driven consultation.
                </p>
                <p className="text-gray-700">
                  Today, we continue to uphold the principles that guided our founding: integrity, excellence, collaboration, and innovation. These values inform every client interaction and every solution we provide.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Urlina Consulting team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Values />
      <Team />
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-12">
              We believe in a collaborative, tailored approach to every client engagement. Our process is designed to understand your unique challenges and deliver solutions that drive meaningful results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">We begin by understanding your business, challenges, and objectives.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
                <h3 className="text-xl font-semibold mb-3">Analysis</h3>
                <p className="text-gray-600">Our experts analyze your situation and identify opportunities for improvement.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-gray-600">We develop a tailored strategy designed to achieve your specific goals.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">4</div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-gray-600">We provide ongoing support to ensure successful execution and results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;