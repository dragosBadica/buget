import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Popescu',
    role: 'Antreprenor',
    content: 'Dragoș m-a ajutat să înțeleg unde îmi "dispăreau" banii. Cu Excel-ul lui am economisit 2500 lei în primele 3 luni!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Alexandru Ionescu',
    role: 'Manager IT',
    content: 'Cel mai simplu și eficient instrument de bugetare pe care l-am folosit. Recomand cu încredere!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export default function Trust() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ce spun clienții mei
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Dragoș */}
        <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">DB</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dragoș Bădică - Consultant Financiar
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Cu peste 8 ani de experiență în consultanță financiară, am ajutat sute de persoane să-și 
              organizeze finanțele și să-și atingă obiectivele financiare. Cred că fiecare persoană 
              merită să aibă controlul asupra banilor săi, iar instrumentele simple sunt cele mai eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}