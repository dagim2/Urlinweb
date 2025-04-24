import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
      onClick={toggleLanguage}
      aria-label={`Change language to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
    >
      <Globe size={16} className="mr-1" />
      <span>{currentLanguage === 'en' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSelector;