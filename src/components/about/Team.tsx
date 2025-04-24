import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Mehabub Abawajy",
    title: "Founder & Principal Consultant",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "With over 15 years of experience in business consulting and legal advisory, Mehabub founded Urlina Consulting to help businesses navigate complex challenges and achieve sustainable growth."
  },
  {
    name: "Jennifer Martinez",
    title: "Legal Consultant",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Jennifer specializes in contract law and business negotiations, with a strong track record of helping clients secure favorable terms and navigate legal complexities."
  },
  {
    name: "David Wilson",
    title: "Management Consultant",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "David brings extensive experience in operational efficiency and strategic planning, helping organizations optimize their processes and achieve their business objectives."
  },
  {
    name: "Sophia Chen",
    title: "Business Development Specialist",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Sophia excels at identifying growth opportunities and developing comprehensive strategies to help businesses expand their market presence and increase revenue."
  }
];

const Team: React.FC = () => {
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
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600">
            Our diverse team of consultants brings together decades of experience across various industries to deliver exceptional results for our clients.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="card overflow-hidden group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3 justify-center">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white p-2 rounded-full text-navy hover:bg-primary-100 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white p-2 rounded-full text-navy hover:bg-primary-100 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-4">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;