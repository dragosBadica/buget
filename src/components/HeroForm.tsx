import React, { useState } from 'react';
import { Download, CheckCircle, Phone, Mail, User, AlertCircle } from 'lucide-react';
import { submitLead } from '../api/leads';

interface FormData {
  name: string;
  email: string;
  phone: string;
  gdpr: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  gdpr?: string;
}

export default function HeroForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    gdpr: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Numele este obligatoriu';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Numărul de telefon este obligatoriu';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(form.phone)) {
      newErrors.phone = 'Numărul de telefon nu este valid';
    }

    if (!form.gdpr) {
      newErrors.gdpr = 'Trebuie să accepți termenii și condițiile';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitLead(form);
      
      if (result.success) {
        setDownloadUrl(result.downloadUrl || '/budget-template.xlsx');
        setIsSubmitted(true);
        
        // Track conversion pentru Google Analytics/Tag Manager
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'YOUR-CONVERSION-ID',
            'value': 1.0,
            'currency': 'RON'
          });
        }
      } else {
        setSubmitError(result.error || 'A apărut o eroare. Te rog încearcă din nou.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Eroare de conexiune. Verifică internetul și încearcă din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Buget-Personal-Dragos-Badica.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Track download event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'file_download', {
          'file_name': 'Buget-Personal-Dragos-Badica.xlsx',
          'file_extension': 'xlsx'
        });
      }
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'gdpr' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    
    if (submitError) {
      setSubmitError(null);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mulțumesc! Formularul a fost trimis cu succes.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Descarcă acum șablonul meu Excel pentru bugetare personală
            </p>
          </div>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mb-6"
          >
            <Download className="w-5 h-5 mr-2" />
            Descarcă fișierul Excel
          </button>
          
          <div className="bg-green-50 p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-green-800">
              <strong>Felicitări!</strong><br />
              Ai făcut primul pas către organizarea finanțelor tale. Fișierul Excel conține toate instrumentele de care ai nevoie pentru a-ți gestiona bugetul eficient.
            </p>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Dacă descărcarea nu pornește automat, apasă din nou butonul de mai sus
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <User className="w-4 h-4 mr-2" />
                Consultant Financiar Personal
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Eu, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dragoș Bădică</span> – consultant financiar, îți ofer gratuit șablonul meu Excel de bugetare
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Am creat acest instrument ca să te ajut să-ți organizezi finanțele, simplu și eficient. 
              Este același Excel pe care îl folosesc cu clienții mei pentru a-i ajuta să-și ia controlul asupra banilor.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Șablon Excel profesional creat de mine personal</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Categorii predefinite pentru toate tipurile de cheltuieli</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Grafice automate pentru vizualizarea progresului</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Descărcare imediată, fără costuri ascunse</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Descarcă direct de la mine
              </h3>
              <p className="text-gray-600">
                Completează formularul și primești fișierul instant
              </p>
            </div>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-red-700 text-sm">{submitError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nume complet *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleInputChange('name')}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Introdu numele tău complet"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresa de email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleInputChange('email')}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="nume@exemplu.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Număr de telefon *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleInputChange('phone')}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0721234567"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={form.gdpr}
                    onChange={handleInputChange('gdpr')}
                    className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                      errors.gdpr ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="text-sm text-gray-600">
                    Sunt de acord cu{' '}
                    <a href="/terms" className="text-blue-600 hover:underline" target="_blank">
                      Termenii & Condițiile
                    </a>{' '}
                    și{' '}
                    <a href="/gdpr" className="text-blue-600 hover:underline" target="_blank">
                      Politica GDPR
                    </a>
                    . *
                  </span>
                </label>
                {errors.gdpr && (
                  <p className="text-red-500 text-sm mt-1">{errors.gdpr}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Se procesează...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Descarcă direct de la mine
                  </div>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Fișierul se va descărca automat după completarea formularului
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}