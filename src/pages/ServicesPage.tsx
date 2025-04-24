import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ServiceDetail from '../components/services/ServiceDetail';

const servicesData = [
  {
    title: "Management Consulting",
    description: "Our management consulting services are designed to optimize your business operations, improve efficiency, and drive sustainable growth. We work closely with your team to identify opportunities for improvement and implement effective strategies.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: [
      "Strategic planning and implementation",
      "Process optimization and efficiency improvement",
      "Change management and organizational development",
      "Performance measurement and improvement",
      "Leadership development and executive coaching"
    ]
  },
  {
    title: "Legal Consulting",
    description: "Our legal consulting services provide expert guidance on complex legal matters affecting your business. We help you navigate regulatory compliance, contract negotiations, and dispute resolution while minimizing legal risks and protecting your interests.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: [
      "Contract review, drafting, and negotiation",
      "Regulatory compliance and risk management",
      "Intellectual property protection",
      "Dispute resolution and litigation support",
      "Corporate governance and legal structure optimization"
    ]
  },
  {
    title: "Business Development",
    description: "Our business development services focus on identifying and capitalizing on growth opportunities in your market. We help you expand your customer base, enter new markets, and develop strategic partnerships that drive revenue growth and business expansion.",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: [
      "Market analysis and opportunity identification",
      "Growth strategy development and implementation",
      "Customer acquisition and retention planning",
      "Partnership and alliance development",
      "Business model innovation and transformation"
    ]
  },
  {
    title: "Negotiation Services",
    description: "Our negotiation services provide expert representation in business negotiations, mergers, acquisitions, partnerships, and other critical business transactions. We help you secure favorable terms and create win-win outcomes that support your business objectives.",
    image: "https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: [
      "Deal negotiation and structuring",
      "Mergers and acquisitions support",
      "Strategic partnership negotiations",
      "Contract and agreement negotiations",
      "Conflict resolution and mediation"
    ]
  }
];

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-24 md:pt-28 bg-navy text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{t('services.title')}</h1>
            <p className="text-xl text-gray-200">{t('services.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-6">Comprehensive Business Solutions</h2>
            <p className="text-lg text-gray-700">
              At Urlina Consulting, we offer a wide range of professional services tailored to meet your specific business needs. Our team of experts brings decades of experience across various industries to deliver exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {servicesData.map((service, index) => (
        <ServiceDetail
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          benefits={service.benefits}
          isReversed={index % 2 !== 0}
        />
      ))}

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Our Consulting Process</h2>
            <p className="text-lg text-gray-700 mb-12">
              We follow a structured approach to ensure we deliver value at every stage of the consulting engagement.
            </p>
            
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 z-0"></div>
              
              <div className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
                    <p className="text-gray-600">We begin with a thorough assessment of your business needs, challenges, and objectives to create a foundation for our recommendations.</p>
                  </div>
                  <div className="hidden md:flex justify-start">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold relative">
                      <span>1</span>
                      <div className="absolute w-6 h-1 bg-primary-200 right-full top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:flex justify-end">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold relative">
                      <span>2</span>
                      <div className="absolute w-6 h-1 bg-primary-200 left-full top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Analysis & Strategy Development</h3>
                    <p className="text-gray-600">Our team analyzes your situation and develops a tailored strategy that addresses your specific needs and aligns with your business goals.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                    <p className="text-gray-600">We work alongside your team to implement the agreed-upon strategies, providing guidance and support throughout the process.</p>
                  </div>
                  <div className="hidden md:flex justify-start">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold relative">
                      <span>3</span>
                      <div className="absolute w-6 h-1 bg-primary-200 right-full top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="hidden md:flex justify-end">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold relative">
                      <span>4</span>
                      <div className="absolute w-6 h-1 bg-primary-200 left-full top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Evaluation & Ongoing Support</h3>
                    <p className="text-gray-600">We measure results against objectives, make adjustments as needed, and provide ongoing support to ensure sustainable success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;