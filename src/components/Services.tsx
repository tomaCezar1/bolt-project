import { Sparkles, Shield, Smile, Zap, Baby, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Detartraj Profesional',
      description: 'Curățare profesională a dinților pentru eliminarea tartrului și menținerea sănătății gingivale',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Smile,
      title: 'Albire Dentară',
      description: 'Tratamente moderne de albire pentru un zâmbet strălucitor și încredere sporită',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Implanturi Dentare',
      description: 'Soluții permanente pentru înlocuirea dinților lipsă cu materiale de calitate superioară',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Crown,
      title: 'Coroane și Punți',
      description: 'Proteze dentare de înaltă calitate pentru restaurarea completă a funcționalității',
      color: 'from-sky-400 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Ortodonție',
      description: 'Corectarea alinierii dinților pentru un zâmbet perfect și o ocluzie corectă',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Baby,
      title: 'Stomatologie Pediatrică',
      description: 'Îngrijire dentară delicată și prietenoasă pentru cei mai mici pacienți',
      color: 'from-cyan-400 to-sky-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferim o gamă completă de servicii stomatologice pentru întreaga familie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Nu ești sigur de ce tratament ai nevoie?
              </h3>
              <p className="text-blue-100 text-lg">
                Programează o consultație gratuită și te vom ajuta să găsești soluția potrivită
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-500 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap shadow-lg"
            >
              Consultație Gratuită
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
