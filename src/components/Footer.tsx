import { Smile, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DentalCare Moldova</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Clinică stomatologică modernă dedicată sănătății și frumuseții zâmbetului tău.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Acasă
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Despre Noi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicii
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicii</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Detartraj Profesional</li>
              <li>Albire Dentară</li>
              <li>Implanturi Dentare</li>
              <li>Coroane și Punți</li>
              <li>Ortodonție</li>
              <li>Stomatologie Pediatrică</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div>+373 22 123 456</div>
                  <div>+373 69 123 456</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  contact@dentalcare.md
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} DentalCare Moldova. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termeni și Condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
