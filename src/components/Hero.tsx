import { ArrowRight, CheckCircle } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Clinică Dentară Modernă în Moldova
            </div>

            <SparklesText text="Zâmbetul tău, prioritatea noastră" />

            <p className="text-lg text-gray-600">
              Oferim servicii stomatologice moderne și profesionale pentru
              întreaga familie. Echipă calificată, tehnologie avansată și
              confort maxim pentru fiecare pacient.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  Echipament medical de ultimă generație
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  Medici stomatologi cu experiență
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  Prețuri accesibile și transparente
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Programează o vizită</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold"
              >
                Vezi Serviciile
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">15+</div>
                <div className="text-sm text-gray-600">Ani Experiență</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">5000+</div>
                <div className="text-sm text-gray-600">Pacienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">100%</div>
                <div className="text-sm text-gray-600">Satisfacție</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6812484/pexels-photo-6812484.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy patient at dental clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    100% Sterilizare
                  </div>
                  <div className="text-sm text-gray-600">Siguranță maximă</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
