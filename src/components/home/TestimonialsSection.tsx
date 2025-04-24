import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Urlina Consulting helped us navigate complex legal issues during our expansion. Their expertise was invaluable.",
    author: "Sarah Johnson",
    title: "CEO, TechSolutions Inc."
  },
  {
    quote: "The team's attention to detail and business acumen helped us optimize our operations and increase profitability.",
    author: "Michael Chen",
    title: "COO, Global Manufacturing"
  },
  {
    quote: "Their negotiation skills secured us a partnership deal that exceeded our expectations. Highly recommended.",
    author: "Emily Rodriguez",
    title: "Director of Business Development, Nexus Partners"
  }
];

const TestimonialsSection: React.FC = () => {
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
          <h2 className="mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600">
            Hear what our clients have to say about working with Urlina Consulting.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="card p-8 h-full flex flex-col"
              variants={itemVariants}
            >
              <Quote size={40} className="text-primary-200 mb-6" />
              <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-navy">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;