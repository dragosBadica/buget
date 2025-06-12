import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dragoș Bădică</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Consultant financiar cu peste 8 ani de experiență. Te ajut să-ți organizezi finanțele 
              și să-ți atingi obiectivele financiare prin instrumente simple și eficiente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Informații legale</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Termeni & Condiții
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="hover:text-white transition-colors">
                  Politica GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">dragos@consultanta-financiara.ro</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+40 721 234 567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">București, România</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Nu fac spam. Datele tale sunt sigure și folosite doar pentru trimiterea Excel-ului.
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Dragoș Bădică - Consultant Financiar. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}