import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
            <h1 className="text-3xl font-bold text-gray-900">Termeni și Condiții</h1>
            <p className="text-gray-600 mt-2">Ultima actualizare: Decembrie 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Despre mine</h2>
            <p className="mb-6">
              Sunt Dragoș Bădică, consultant financiar independent cu peste 8 ani de experiență în domeniul 
              consultanței financiare personale. Ofer servicii de consultanță și instrumente pentru 
              organizarea finanțelor personale.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Ce ofer</h2>
            <p className="mb-4">Prin acest site web ofer gratuit:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Șablon Excel pentru bugetare personală</li>
              <li>Instrumente de organizare financiară</li>
              <li>Resurse educaționale despre finanțe personale</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilizarea serviciilor</h2>
            <p className="mb-4">Prin utilizarea acestui site și descărcarea materialelor, te angajezi să:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Folosești materialele doar pentru uz personal</li>
              <li>Nu redistribui sau vinzi materialele primite</li>
              <li>Respecti drepturile de autor asupra conținutului</li>
              <li>Furnizezi informații corecte în formulare</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilități și limitări</h2>
            <p className="mb-4">
              Materialele oferite sunt instrumente educaționale și de organizare. Nu constituie sfaturi 
              financiare personalizate. Fiecare persoană este responsabilă pentru propriile decizii financiare.
            </p>
            <p className="mb-6">
              Nu îmi asum responsabilitatea pentru deciziile financiare luate pe baza materialelor oferite 
              gratuit prin acest site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Proprietate intelectuală</h2>
            <p className="mb-6">
              Toate materialele, inclusiv șablonul Excel, sunt proprietatea mea intelectuală. 
              Sunt oferite gratuit pentru uz personal, dar rămân protejate de drepturile de autor.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificări</h2>
            <p className="mb-6">
              Îmi rezerv dreptul de a modifica acești termeni în orice moment. Modificările vor fi 
              publicate pe această pagină cu data actualizării.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
            <p className="mb-6">
              Pentru întrebări despre acești termeni, mă poți contacta la: 
              <a href="mailto:dragos@consultanta-financiara.ro" className="text-blue-600 hover:underline ml-1">
                dragos@consultanta-financiara.ro
              </a>
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-blue-800">
                <strong>Notă:</strong> Prin completarea formularului și descărcarea materialelor, 
                confirmi că ai citit și accepți acești termeni și condiții.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}