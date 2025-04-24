import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-24 md:pt-28 bg-navy text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-gray-200">{t('contact.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">{t('contact.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('contact.description')}
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('contact.address')}</h3>
                    <p className="text-gray-700">
                      2450 26th Ave S<br />
                      Minneapolis, MN, 55406<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('contact.phone')}</h3>
                    <p className="text-gray-700">
                      <a href="tel:+16122867725" className="hover:text-primary-600 transition-colors">
                        (612) 286-7725
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('contact.email')}</h3>
                    <p className="text-gray-700">
                      <a href="mailto:dawadire@gmail.com" className="hover:text-primary-600 transition-colors">
                        dawadire@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 pb-0">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-6">Find Us</h2>
            <p className="text-lg text-gray-700">
              Our office is conveniently located in South Minneapolis, easily accessible from major highways.
            </p>
          </div>
        </div>
        
        <div className="h-[400px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.6080726326043!2d-93.24038052392761!3d44.948734471027695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62822e9fd8a21%3A0x6fa1aae0828920a3!2s2450%2026th%20Ave%20S%2C%20Minneapolis%2C%20MN%2055406%2C%20USA!5e0!3m2!1sen!2s!4v1697129124592!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Urlina Consulting Office Location"
            aria-label="Map showing Urlina Consulting office location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;