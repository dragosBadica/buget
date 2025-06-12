import React from 'react';
import { TrendingUp, PieChart, Target, Calculator, BarChart3, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Calculator,
    title: 'Simplu de folosit',
    description: 'Nu ai nevoie de cunoștințe avansate - doar introduci datele și Excel calculează totul automat.'
  },
  {
    icon: PieChart,
    title: 'Vizualizare cheltuieli',
    description: 'Vezi exact unde îți cheltuiești banii cu grafice colorate și ușor de înțeles.'
  },
  {
    icon: Target,
    title: 'Te ajută să economisești',
    description: 'Identifică rapid unde poți reduce cheltuielile și îți setează obiective realiste de economisire.'
  },
  {
    icon: BarChart3,
    title: 'Analiză detaliată',
    description: 'Urmărește tendințele lunare și vezi progresul tău financiar în timp real.'
  },
  {
    icon: TrendingUp,
    title: 'Planificare viitor',
    description: 'Proiectează bugetul pentru lunile următoare și planifică-ți obiectivele financiare.'
  },
  {
    icon: Shield,
    title: 'Securitate totală',
    description: 'Datele tale rămân private - Excel-ul funcționează offline pe computerul tău.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            De ce să folosești șablonul meu Excel?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Am dezvoltat acest instrument în anii de consultanță financiară, testându-l cu sute de clienți. 
            Știu exact ce funcționează pentru organizarea finanțelor personale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Peste 500 de clienți și-au îmbunătățit situația financiară cu ajutorul meu
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Alătură-te celor care au luat controlul asupra finanțelor personale cu instrumentele mele
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Clienți consultați</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">€1.2M+</div>
              <div className="text-gray-600">Bani economisiți</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">8 ani</div>
              <div className="text-gray-600">Experiență consultanță</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}