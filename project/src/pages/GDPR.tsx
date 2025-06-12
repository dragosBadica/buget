import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Trash2, Download } from 'lucide-react';

export default function GDPR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la pagina principală
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Politica de Confidențialitate GDPR</h1>
            <p className="text-gray-600 mt-2">Ultima actualizare: Decembrie 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-blue-900 m-0">Angajamentul meu pentru confidențialitate</h2>
              </div>
              <p className="text-blue-800 m-0">
                Respect și protejez datele tale personale în conformitate cu Regulamentul General 
                privind Protecția Datelor (GDPR) și legislația română aplicabilă.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Cine sunt și cum mă poți contacta</h2>
            <p className="mb-6">
              <strong>Operator de date:</strong> Dragoș Bădică - Consultant Financiar<br />
              <strong>Email:</strong> dragos@consultanta-financiara.ro<br />
              <strong>Telefon:</strong> +40 721 234 567
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Ce date colectez</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Date personale colectate prin formular:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Nume complet</strong> - pentru personalizarea comunicării</li>
                <li><strong>Adresa de email</strong> - pentru trimiterea materialelor și comunicare</li>
                <li><strong>Număr de telefon</strong> - pentru contact direct dacă este necesar</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. De ce colectez aceste date</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Scopuri principale:</h3>
                <ul className="text-green-700 text-sm">
                  <li>• Trimiterea materialelor gratuite</li>
                  <li>• Comunicarea despre resurse noi</li>
                  <li>• Îmbunătățirea serviciilor oferite</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Baza legală:</h3>
                <ul className="text-blue-700 text-sm">
                  <li>• Consimțământul tău explicit</li>
                  <li>• Interesul legitim pentru îmbunătățirea serviciilor</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cum protejez datele tale</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Securitate tehnică</h3>
                  <p className="text-gray-600">Folosesc conexiuni criptate (HTTPS) și servere securizate pentru stocarea datelor.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Eye className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Acces limitat</h3>
                  <p className="text-gray-600">Doar eu am acces la datele tale personale. Nu le partajez cu terți.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cât timp păstrez datele</h2>
            <p className="mb-6">
              Datele tale sunt păstrate doar atât timp cât este necesar pentru scopurile menționate:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Pentru trimiterea materialelor: imediat după trimitere</li>
              <li>Pentru comunicări viitoare: până la retragerea consimțământului</li>
              <li>Maxim 2 ani de la ultima interacțiune, dacă nu îmi retragi consimțământul</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Drepturile tale GDPR</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Eye className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Dreptul de acces</h3>
                </div>
                <p className="text-sm text-gray-600">Poți solicita o copie a datelor pe care le dețin despre tine.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Download className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold">Dreptul la portabilitate</h3>
                </div>
                <p className="text-sm text-gray-600">Poți primi datele tale într-un format structurat.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Trash2 className="w-5 h-5 text-red-600 mr-2" />
                  <h3 className="font-semibold">Dreptul la ștergere</h3>
                </div>
                <p className="text-sm text-gray-600">Poți solicita ștergerea completă a datelor tale.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-semibold">Dreptul la rectificare</h3>
                </div>
                <p className="text-sm text-gray-600">Poți corecta datele incorecte sau incomplete.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cum îți exerciți drepturile</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <p className="text-yellow-800 mb-4">
                Pentru a-ți exercita oricare dintre drepturile GDPR, trimite-mi un email la:
              </p>
              <p className="font-semibold text-yellow-900">
                <a href="mailto:dragos@consultanta-financiara.ro" className="text-blue-600 hover:underline">
                  dragos@consultanta-financiara.ro
                </a>
              </p>
              <p className="text-yellow-700 text-sm mt-2">
                Voi răspunde în maximum 30 de zile de la primirea solicitării tale.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificări ale politicii</h2>
            <p className="mb-6">
              Această politică poate fi actualizată periodic. Orice modificare va fi comunicată 
              prin email și publicată pe această pagină cu data actualizării.
            </p>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Angajamentul meu personal</h3>
              <p className="text-green-700">
                Ca consultant financiar, înțeleg importanța confidențialității. Îți garantez că 
                datele tale vor fi tratate cu maximă grijă și folosite doar pentru scopurile 
                menționate explicit în această politică.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}