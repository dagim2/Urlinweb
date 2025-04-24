import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from '../common/LanguageSelector';
import Button from '../common/Button';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const headerClasses = scrolled
    ? 'bg-white shadow-md py-3'
    : 'bg-transparent py-6';

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-navy" />
              <span className="ml-2 text-xl font-bold font-montserrat text-navy">Urlina</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {links.map((link) => (
              <motion.div key={link.to} variants={itemVariants}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-medium text-base transition-colors ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <LanguageSelector />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/contact">
                <Button variant="primary" size="sm">
                  {t('common.contactUs')}
                </Button>
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSelector />
            <button
              className="ml-4 text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-medium text-base transition-colors ${
                        isActive
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link to="/contact" onClick={closeMenu}>
                  <Button variant="primary" size="sm" fullWidth>
                    {t('common.contactUs')}
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;